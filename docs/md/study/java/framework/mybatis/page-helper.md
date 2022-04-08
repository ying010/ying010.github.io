# 背景：

[PageHelper](https://gitee.com/free/Mybatis_PageHelper)是一款好用的开源免费的Mybatis第三方物理分页插件，使用PageHelper可以十分便捷的做到分页并获取到记录总数。但是PageHelper怎么做到的，查出所有数据在内存中操作，还是直接修改了sql语句，总条数怎么获取的这是值得深入探索的。

在查看PageHelper代码过程中发现，他基于Mybatis的拦截器，对原生sql进行了改造，首先根据自定义的查询总条数语句查出总条数，然后在原生sql基础上拼接了limit，将查询结果从list转换为了Page记录信息。

# 一、Mybatis拦截器

MyBatis提供的拦截器接口可以方便用户自由扩展编写各种插件，PageHelper就是通过实现MyBatis中的Interceptor接口。具体MyBatis拦截器的原理参见上一篇。

# 二、PageHelper的使用

可以选择以下两个方式引入PageHelper，更详细的配置信息请参见[官方文档](https://pagehelper.github.io/docs/howtouse/)

## 2.1. 修改配置的方式引入PageHelper

引入PageHelper核心包并通过修改配置文件的方式使其生效。

### 2.1.1 引入maven

在 pom.xml 中添加如下依赖：

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>最新版本</version>
</dependency>
```

### 2.1.2 修改配置文件

使用以下两种方式的其中一种即可

#### 2.1.21 修改MyBatis的配置文件

```
<plugins>
    <!-- com.github.pagehelper为PageHelper类所在包名 -->
    <plugin interceptor="com.github.pagehelper.PageInterceptor">
        <!-- 使用下面的方式配置参数，详细参数介绍见官方文档 -->
        <property name="param1" value="value1"/>
	</plugin>
</plugins>
```

#### 2.1.22 修改Spring的配置文件

```xml
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
  <!-- 注意其他配置 -->
  <property name="plugins">
    <array>
      <bean class="com.github.pagehelper.PageInterceptor">
        <property name="properties">
          <!--使用下面的方式配置参数，一行配置一个 -->
          <value>
            params=value1
          </value>
        </property>
      </bean>
    </array>
  </property>
</bean>
```

## 2.2. PageHelper与SpringBoot整合

PageHelper已与SpringBoot整合，并提供了pagehelper-spring-boot-starter启动，使用这个方式引入pagehelper时，只需要引入该启动即可，SpringBoot会以自动配置的方式使PageHelper生效

### 2.2.1 maven

由于pagehelper-spring-boot-starter依赖了mybatis-spring-boot-starte，如果害怕冲突的同学可以将mybatis启动去除

```xml
<dependency>
  <groupId>com.github.pagehelper</groupId>
  <artifactId>pagehelper-spring-boot-starter</artifactId>
  <version>1.3.0</version>
  <exclusions>
    <exclusion>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

## 2.3. 代码中使用PageHelper

```java
PageHelper.startPage(1, 10);
List<Map> mapList = mapper.selectSomeList();
PageInfo pageInfo = new PageInfo(mapList);
```

PageInfo中封装了总记录数、当前页、结果集等信息

# 三、源码分析

根据Mybatis拦截器知识可知，如果想修改sql的执行流程需要实现`org.apache.ibatis.plugin.Interceptor`接口并重写`intercept`方法，在`intercept`方法中写拦截逻辑。

在PageHelper中由`com.github.pagehelper.PageInterceptor`实现拦截逻辑。

```java
@Override
    public Object intercept(Invocation invocation) throws Throwable {
        try {
            Object[] args = invocation.getArgs();
            MappedStatement ms = (MappedStatement) args[0];
            Object parameter = args[1];
            RowBounds rowBounds = (RowBounds) args[2];
            ResultHandler resultHandler = (ResultHandler) args[3];
            Executor executor = (Executor) invocation.getTarget();
            CacheKey cacheKey;
            BoundSql boundSql;
            //由于逻辑关系，只会进入一次
            if (args.length == 4) {
                //4 个参数时
                boundSql = ms.getBoundSql(parameter);
                cacheKey = executor.createCacheKey(ms, parameter, rowBounds, boundSql);
            } else {
                //6 个参数时
                cacheKey = (CacheKey) args[4];
                boundSql = (BoundSql) args[5];
            }
            checkDialectExists();
            //对 boundSql 的拦截处理
            if (dialect instanceof BoundSqlInterceptor.Chain) {
                boundSql = ((BoundSqlInterceptor.Chain) dialect).doBoundSql(BoundSqlInterceptor.Type.ORIGINAL, boundSql, cacheKey);
            }
            List resultList;
            //调用方法判断是否需要进行分页，如果不需要，直接返回结果
            // 判断是否分页时取得ThreadLocal中的Page,如果ThreadLocal中没有Page直接返回查询结果
            if (!dialect.skip(ms, parameter, rowBounds)) {
                //判断是否需要进行 count 查询
                if (dialect.beforeCount(ms, parameter, rowBounds)) {
                    //查询总数
                    // 根据数据库方言自动生成了一个查询总数的sql并执行
                    Long count = count(executor, ms, parameter, rowBounds, null, boundSql);
                    //处理查询总数，返回 true 时继续分页查询，false 时直接返回
                    if (!dialect.afterCount(count, parameter, rowBounds)) {
                        //当查询总数为 0 时，直接返回空的结果
                        return dialect.afterPage(new ArrayList(), parameter, rowBounds);
                    }
                }
                // 查询
                resultList = ExecutorUtil.pageQuery(dialect, executor,
                        ms, parameter, rowBounds, resultHandler, boundSql, cacheKey);
            } else {
                //rowBounds用参数值，不使用分页插件处理时，仍然支持默认的内存分页
                resultList = executor.query(ms, parameter, rowBounds, resultHandler, cacheKey, boundSql);
            }
            // 将结果从List包装为Page
            return dialect.afterPage(resultList, parameter, rowBounds);
        } finally {
            if(dialect != null){
                // 清楚缓存ThreadLocal
                dialect.afterAll();
            }
        }
    }
```



查询完毕后的处理：

```java
    @Override
    public Object afterPage(List pageList, Object parameterObject, RowBounds rowBounds) {
        Page page = getLocalPage();
        if (page == null) {
            return pageList;
        }
        page.addAll(pageList);
        if (!page.isCount()) {
            page.setTotal(-1);
        } else if ((page.getPageSizeZero() != null && page.getPageSizeZero()) && page.getPageSize() == 0) {
            page.setTotal(pageList.size());
        } else if (page.isOrderByOnly()) {
            page.setTotal(pageList.size());
        }
        return page;
    }
```
