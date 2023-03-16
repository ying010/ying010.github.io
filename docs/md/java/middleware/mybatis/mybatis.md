# Mybatis

## Mybatis拦截器

> MyBatis 允许你在映射语句执行过程中的某一点进行拦截调用。默认情况下，MyBatis 允许使用插件来拦截的方法调用包括：

> - Executor (update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)
> - ParameterHandler (getParameterObject, setParameters)
> - ResultSetHandler (handleResultSets, handleOutputParameters)
> - StatementHandler (prepare, parameterize, batch, update, query)

> 这些类中方法的细节可以通过查看每个方法的签名来发现，或者直接查看 MyBatis 发行包中的源代码。 如果你想做的不仅仅是监控方法的调用，那么你最好相当了解要重写的方法的行为。 因为在试图修改或重写已有方法的行为时，很可能会破坏 MyBatis 的核心模块。 这些都是更底层的类和方法，所以使用插件的时候要特别当心。

以上摘抄自[官网](https://mybatis.org/mybatis-3/zh/configuration.html#plugins)，这四个执行过程分别是：

- 执行器

- 参数处理

- 返回结果集处理

- sql构建

  以下代码非特殊标记的，都是MyBatis源码，唯一可能的修改点是为了节省空间省略了一些无关紧要的代码或加入一些注释。根据MyBatis版本不同，可能看到的源码也不尽相同。

### 一、 自定义MyBatis拦截器

#### 1.1 拦截器接口Interceptor

`mybatis`定义了`org.apache.ibatis.plugin.Interceptor`拦截器接口。`Interceptor`源码：

```java
public interface Interceptor {

  Object intercept(Invocation invocation) throws Throwable;

  default Object plugin(Object target) {
    return Plugin.wrap(target, this);
  }

  default void setProperties(Properties properties) {}

}
```

实现该接口就可以对MyBatis执行方法进行拦截，MyBatis本身并没有任何实现类。

由于`plugin`方法和`setProperties`方法都有默认实现，所以自定义拦截器是可以选择只实现`intercept`方法，实现自己的拦截逻辑。编写自定义拦截器时不仅要实现`Interceptor`接口，还要加`@Intercepts`注解，注解中的配置：

- `type`需要拦截的执行过程，上面给出的Executor 、ParameterHandler 、ResultSetHandler 、StatementHandler 四种的一种

- `method`拦截的方法，Executor中有:

  - update：增、删、改
  - query：查
  - commit：提交
  - rollback：回调
  - 等等

- `args`方法的参数，拦截方法的传参。

  这样有类名、方法名、方法传参等签名信息就能唯一确定一个方法，拦截时就可以拦截这个确定的方法了。注意：`@Intercepts`中可以配多个`@Signature`，即同时对多个方法进行拦截。具体为什么配上这个注解就可以拦截方法请看下一节详解。

#### 1.2 自定义拦截器实现

在[MyBatis官网](https://mybatis.org/mybatis-3/zh/configuration.html#plugins)提供了一个示例实现：

```java
/**
 * 官网示例代码，非源码
 */
// ExamplePlugin.java
@Intercepts({@Signature(
  type= Executor.class,
  method = "update",
  args = {MappedStatement.class,Object.class})})
public class ExamplePlugin implements Interceptor {
  private Properties properties = new Properties();
  public Object intercept(Invocation invocation) throws Throwable {
    // implement pre processing if need
    Object returnObject = invocation.proceed();
    // implement post processing if need
    return returnObject;
  }
  public void setProperties(Properties properties) {
    this.properties = properties;
  }
}
```

#### 1.3 修改配置文件

在使用MyBatis时如果想让上面的拦截器生效需要在MyBatis的配置文件中添加plugin配置如下：

```xml
<!-- 官网示例代码，非源码 -->
<!-- mybatis-config.xml -->
<plugins>
  <plugin interceptor="org.mybatis.example.ExamplePlugin">
    <property name="someProperty" value="100"/>
  </plugin>
</plugins>
```

#### 1.4 Spring集成MyBatis省略配置文件

但是在Spring中使用MyBatis时，可以省略.xml配置，此时只要在自定义的拦截器方法上加上`@Component`注解即可。也就是说如果项目中使用了Spring集成Mybatis时不需要1.3中的配置

```java
/**
 * 自定义示例代码，非源码
 * @author wzy
 */
@Intercepts({
        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),
        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),
    })
@Component
public class MyInterceptor implements Interceptor {
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        System.out.println("自定义拦截器。。。");
        // TODO 实现自定义拦截器逻辑
        return invocation.proceed();
    }
}
```



### 二、探究拦截器的原理

#### 2.1 拦截入口

MyBatis之所以可以对以上四个操作进行拦截，是因为这四个类都是通过`org.apache.ibatis.session.Configuration`类创建的，创建的时候添加了拦截链。`Configuration`方法的调用者是`org.apache.ibatis.session.SqlSessionFactory`，工厂模式创建`org.apache.ibatis.session.SqlSession`连接数据库执行语句的，属于MyBatis核心组件，暂不谈论。只要知道执行sql时都会调用`Configuration`的方法即可。

在这四个执行生成时都调用了`org.apache.ibatis.plugin.InterceptorChain#pluginAll`方法，`InterceptorChain`是拦截器链。

`Configuration`的部分代码如下：

```java
public class Configuration {
​```
    //拦截器链
	protected final InterceptorChain interceptorChain = new InterceptorChain();
​```
    
    public ParameterHandler newParameterHandler(MappedStatement mappedStatement, Object parameterObject, BoundSql boundSql) {
        ParameterHandler parameterHandler = mappedStatement.getLang().createParameterHandler(mappedStatement, parameterObject, boundSql);
    	// 执行拦截
        parameterHandler = (ParameterHandler) interceptorChain.pluginAll(parameterHandler);
        return parameterHandler;
      }

  public ResultSetHandler newResultSetHandler(Executor executor, MappedStatement mappedStatement, RowBounds rowBounds, ParameterHandler parameterHandler,
      ResultHandler resultHandler, BoundSql boundSql) {
    ResultSetHandler resultSetHandler = new DefaultResultSetHandler(executor, mappedStatement, parameterHandler, resultHandler, boundSql, rowBounds);
      // 执行拦截
    resultSetHandler = (ResultSetHandler) interceptorChain.pluginAll(resultSetHandler);
    return resultSetHandler;
  }

  public StatementHandler newStatementHandler(Executor executor, MappedStatement mappedStatement, Object parameterObject, RowBounds rowBounds, ResultHandler resultHandler, BoundSql boundSql) {
    StatementHandler statementHandler = new RoutingStatementHandler(executor, mappedStatement, parameterObject, rowBounds, resultHandler, boundSql);
      // 执行拦截
    statementHandler = (StatementHandler) interceptorChain.pluginAll(statementHandler);
    return statementHandler;
  }

  public Executor newExecutor(Transaction transaction) {
    return newExecutor(transaction, defaultExecutorType);
  }

  public Executor newExecutor(Transaction transaction, ExecutorType executorType) {
    executorType = executorType == null ? defaultExecutorType : executorType;
    executorType = executorType == null ? ExecutorType.SIMPLE : executorType;
    Executor executor;
    if (ExecutorType.BATCH == executorType) {
      executor = new BatchExecutor(this, transaction);
    } else if (ExecutorType.REUSE == executorType) {
      executor = new ReuseExecutor(this, transaction);
    } else {
      executor = new SimpleExecutor(this, transaction);
    }
    if (cacheEnabled) {
      executor = new CachingExecutor(executor);
    }
      // 执行拦截
    executor = (Executor) interceptorChain.pluginAll(executor);
    return executor;
  }
  
...
}
```

#### 2.2 拦截器链

`InterceptorChain`用一个列表保存了所有的已生效的自定义拦截器，在调用`pluginAll`方法时依次执行所有拦截器的拦截方法。拦截器链中的拦截器是在项目启动时读取的Spring注解或XML配置文件中配置的自定义拦截器。在执行拦截器时，执行的是`org.apache.ibatis.plugin.Interceptor#plugin`方法

源码如下：

```java
public class InterceptorChain {

  // 保存生效的自定义拦截器的列表
  private final List<Interceptor> interceptors = new ArrayList<>();

  // 遍历执行所有拦截器
  public Object pluginAll(Object target) {
    for (Interceptor interceptor : interceptors) {
      target = interceptor.plugin(target);
    }
    return target;
  }

  // 保存拦截器，由org.apache.ibatis.session.Configuration#addInterceptor调用
  // 最终由注解方式的org.mybatis.spring.SqlSessionFactoryBean#buildSqlSessionFactory调用
  // 或XML配置方式的org.apache.ibatis.builder.xml.XMLConfigBuilder#pluginElement调用
  // 在项目启动的时候自动保存拦截器
  public void addInterceptor(Interceptor interceptor) {
    interceptors.add(interceptor);
  }

  public List<Interceptor> getInterceptors() {
    return Collections.unmodifiableList(interceptors);
  }

}
```

#### 2.3 实现拦截

通过[Interceptor的源码](#1.1. 拦截器接口Interceptor)可以发现`plugin`方法调用了`org.apache.ibatis.plugin.Plugin#wrap`方法，在这个方法中读取了拦截器配置的`@Intercepts`标签，通过代理的方式对执行过程的方法进行了拦截。

`Plugin`源码如下：

```java
/**
 * @author Clinton Begin
 */
public class Plugin implements InvocationHandler {
  /**
   * 待拦截对象
   */
  private final Object target;
  /**
   * 拦截器
   */
  private final Interceptor interceptor;
  /**
   * 拦截器上@Intercepts标签配的方法签名
   */
  private final Map<Class<?>, Set<Method>> signatureMap;

  private Plugin(Object target, Interceptor interceptor, Map<Class<?>, Set<Method>> signatureMap) {
    this.target = target;
    this.interceptor = interceptor;
    this.signatureMap = signatureMap;
  }

  public static Object wrap(Object target, Interceptor interceptor) {
    // 获取拦截器上@Intercepts标签配的方法签名
    Map<Class<?>, Set<Method>> signatureMap = getSignatureMap(interceptor);
    Class<?> type = target.getClass();
    // 获取到待拦截类的所有被设置拦截的接口
    Class<?>[] interfaces = getAllInterfaces(type, signatureMap);
    if (interfaces.length > 0) {
      // 返回Java动态代理
      return Proxy.newProxyInstance(
              type.getClassLoader(),
              interfaces,
              new Plugin(target, interceptor, signatureMap));
    }
    return target;
  }

  /**
   * 代理方法，被代理的方法执行时会执行这个方法
   */
  @Override
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    try {
      // 根据方法的类获取配置的拦截标签
      Set<Method> methods = signatureMap.get(method.getDeclaringClass());
      // 如果配置了这个类，并且配置了该方法，执行拦截
      if (methods != null && methods.contains(method)) {
        // 自定义拦截器的拦截方法
        return interceptor.intercept(new Invocation(target, method, args));
      }
      return method.invoke(target, args);
    } catch (Exception e) {
      throw ExceptionUtil.unwrapThrowable(e);
    }
  }

  /**
   * 获取拦截器上配置的方法签名
   */
  private static Map<Class<?>, Set<Method>> getSignatureMap(Interceptor interceptor) {
    Intercepts interceptsAnnotation = interceptor.getClass().getAnnotation(Intercepts.class);
    // issue #251
    // 如果拦截器上没有添加@Intercepts标签就会报错
    if (interceptsAnnotation == null) {
      throw new PluginException("No @Intercepts annotation was found in interceptor " + interceptor.getClass().getName());
    }
    // 获取@Intercepts标签中配置的@Signature，使用数组接收的说明可以配置多个方法签名
    Signature[] sigs = interceptsAnnotation.value();
    // 使用Map报错方法签名，其中类作为key，类中的方法作为value
    Map<Class<?>, Set<Method>> signatureMap = new HashMap<>();
    // 遍历所有的@Signature注解
    for (Signature sig : sigs) {
      // 这个方法是JDK8中新增的方法，功能如下：
      // 如果key在map中存在，返回key对应的value，如果不存在将默认value存入key并返回
      // 大体类似于:
      // if (map.get(key) == null) return map.get(key);
      // else return map.put(key, new Object());
      Set<Method> methods = signatureMap.computeIfAbsent(sig.type(), k -> new HashSet<>());
      try {
        // 根据类、方法签名反射得到方法，并将改方法存入Map
        Method method = sig.type().getMethod(sig.method(), sig.args());
        methods.add(method);
      } catch (NoSuchMethodException e) {
        throw new PluginException("Could not find method on " + sig.type() + " named " + sig.method() + ". Cause: " + e, e);
      }
    }
    return signatureMap;
  }

  /**
   * 待拦截类实现的接口被设置的拦截，就将这些接口返回
   * @param type 被拦截的类，可能是Executor 、ParameterHandler 、ResultSetHandler 、StatementHandler的实现类
   * @param signatureMap 拦截器配置的待拦截方法
   * @return
   */
  private static Class<?>[] getAllInterfaces(Class<?> type, Map<Class<?>, Set<Method>> signatureMap) {
    Set<Class<?>> interfaces = new HashSet<>();
    while (type != null) {
      // 遍历待拦截类实现的所有接口
      for (Class<?> c : type.getInterfaces()) {
        // 如果有在标签中配置就返回
        if (signatureMap.containsKey(c)) {
          interfaces.add(c);
        }
      }
      type = type.getSuperclass();
    }
    return interfaces.toArray(new Class<?>[0]);
  }
}
```

### 三、总结

MyBatis提供的拦截器接口可以方便用户自由扩展编写各种插件。

## 分页插件PageHelper

[PageHelper](https://gitee.com/free/Mybatis_PageHelper)是一款好用的开源免费的Mybatis第三方物理分页插件，使用PageHelper可以十分便捷的做到分页并获取到记录总数。但是PageHelper怎么做到的，查出所有数据在内存中操作，还是直接修改了sql语句，总条数怎么获取的这是值得深入探索的。

在查看PageHelper代码过程中发现，他基于Mybatis的拦截器，对原生sql进行了改造，首先根据自定义的查询总条数语句查出总条数，然后在原生sql基础上拼接了limit，将查询结果从list转换为了Page记录信息。

### 一、Mybatis拦截器

[MyBatis拦截器](./mybatis.md#mybatis拦截器)可以方便用户自由扩展编写各种插件，PageHelper就是通过实现MyBatis中的Interceptor接口。

### 二、PageHelper的使用

可以选择以下两个方式引入PageHelper，更详细的配置信息请参见[官方文档](https://pagehelper.github.io/docs/howtouse/)

#### 2.1 修改配置的方式引入PageHelper

引入PageHelper核心包并通过修改配置文件的方式使其生效。

##### 2.1.1 引入maven

在 pom.xml 中添加如下依赖：

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>最新版本</version>
</dependency>
```

##### 2.1.2 修改配置文件

使用以下两种方式的其中一种即可

###### 2.1.21 修改MyBatis的配置文件

```
<plugins>
    <!-- com.github.pagehelper为PageHelper类所在包名 -->
    <plugin interceptor="com.github.pagehelper.PageInterceptor">
        <!-- 使用下面的方式配置参数，详细参数介绍见官方文档 -->
        <property name="param1" value="value1"/>
	</plugin>
</plugins>
```

###### 2.1.22 修改Spring的配置文件

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

#### 2.2 PageHelper与SpringBoot整合

PageHelper已与SpringBoot整合，并提供了pagehelper-spring-boot-starter启动，使用这个方式引入pagehelper时，只需要引入该启动即可，SpringBoot会以自动配置的方式使PageHelper生效

##### 2.2.1 maven

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

#### 2.3 代码中使用PageHelper

```java
PageHelper.startPage(1, 10);
List<Map> mapList = mapper.selectSomeList();
PageInfo pageInfo = new PageInfo(mapList);
```

PageInfo中封装了总记录数、当前页、结果集等信息

### 三、源码分析

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