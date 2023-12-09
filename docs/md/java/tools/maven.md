# Maven



## 依赖机制

依赖管理是Maven的核心功能[官方文档](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html)

### 传递依赖

在没有特殊设置的情况下，项目可以从其父项目或其依赖项中继承任何依赖。传递依赖的级别(深度)是没有限制的，除非遇到循环依赖。

例如：A依赖B，B依赖C；此时虽然A没有显式依赖C依旧会根据依赖传递规则隐式依赖C。

因为上述的传递依赖项目包含的库将会变得非常大且会有一些不必要的依赖，为此maven有一些附加功能限制依赖项：

- **依赖策略 - **决定多个版本作为依赖时选择哪个版本。Maven选择“就近原则”。如果两个依赖项版本在依赖树中处于相同深度则选择先声明的。**需要注意的是始终可以在项目POM文件中显示声明依赖来确定版本。**

  ```
    A 
    ├── B 
    │ └── C 
    │ └── D 2.0 
    └── E 
        └── D 1.0
  ```

  A、B 和 C 的依赖关系定义为 A -> B -> C -> D 2.0 和 A -> E -> D 1.0，那么在构建 A 时将使用 D1.0，因为从 A 到 D 走 E 较短。可以在 A 中显式添加对 D 2.0 的依赖项以强制使用 D 2.0，如下所示：

  ```
    A 
    ├── B 
    │ └── C 
    │ └── D 2.0 
    ├── E 
    │ └── D 1.0 
    │ 
    └── D 2.0      
  ```

- **依赖管理(dependencyManagement) - ** 允许项目在传递依赖出现问题(如：版本冲突)或依赖未指定版本时直接指定要使用的版本。在上面的例子中A显示引用了D，所以即使A未使用D也会将其加入到A中。此时可以选择在A的`dependencyManagement`添加D并直接控制D的版本。

  ```xml
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
        <version>1.2</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
  ```

  上述示例中设置了`commons-logging`的版本为`1.2`。因为`log`是非常基础的依赖许多项目中都依赖它很容易出现版本冲突，这样设置之后会强制设置`commons-logging`的版本为`1.2`可以方便的解决冲突。

- **依赖范围(scope) - **允许设置依赖项生效的构建阶段。在标签`scope`中设置，下面有详细介绍。

- **排除依赖项(exclusion) - **如果项目 X 依赖项目 Y，并且项目 Y 依赖项目 Z，则项目 X 的所有者可以使用“exclusion”元素显式排除项目 Z 作为依赖项。

  ```xml
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
      <exclusion>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-logging</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
  ```

  上述示例展示了项目依赖`spring-boot-starter`但不依赖`spring-boot-starter`中的`spring-boot-starter-logging`。

- **可选依赖项(optional) - **如果项目 Y 依赖项目 Z，则项目 Y 的所有者可以使用`optional`元素将项目 Z 标记为可选依赖项。此时当项目 X 依赖项目 Y 时，X 将仅依赖 Y，而不依赖 Y 的可选依赖项 Z。然后，项目 X 的所有者可以根据自己的选择显式添加对 Z 的依赖项。

  ```xml
  <!--common项目-->
  <groupId>com.demo</groupId>
  <artifactId>demo-common</artifactId>
  <version>1.0.0</version>
  <name>demo-common</name>
  <description>common项目依赖了junit.junit:4.13.2并将optional设置了true，那么其他项目依赖common时不会继承junit依赖</description>
  
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <optional>true</optional>
    </dependency>
  </dependencies>
  ```

  ```xml
  <!--web项目-->
  <groupId>com.demo</groupId>
  <artifactId>demo-web</artifactId>
  <version>1.0.0</version>
  <name>demo-web</name>
  <description>web项目依赖了common不会继承junit依赖</description>
  
  <dependencies>
    <dependency>
      <groupId>com.demo</groupId>
      <artifactId>demo-common</artifactId>
      <version>1.0.0</version>
    </dependency>
  </dependencies>
  ```

  `demo-common`依赖`junit`时设置了`optional`为`true`限制了`junit`只被`demo-common`依赖不会传递，所以`demo-web`依赖`demo-common`但不会依赖`junit`。

::: tips

尽管传递依赖项可以隐式包含所需的依赖项，但显式指定源代码直接使用的依赖项是一个好习惯。这种最佳实践证明了它的价值，特别是当项目的依赖项更	改其依赖项时。

例如，假设您的项目 A 指定了对另一个项目 B 的依赖，而项目 B 指定了对项目 C 的依赖。如果您直接使用项目 C 中的组件，并且没有在项目 A 中指定项目 C，则当项目 B 突然更新/删除对项目 C 的依赖时，可能会导致构建失败。

直接指定依赖项的另一个原因是它为您的项目提供了更好的文档：只需阅读项目中的 POM 文件或执行**mvn dependency:tree**即可了解更多信息。

:::

### **Dependency Scope**

scope元素主要用来指定依赖的传递性，依赖范围即依赖在哪些阶段(编译、测试、运行)可用。常用的可选值有：`compile`、 `provided`、`runtime`、`test`等。

- **compile**
  默认选项。依赖项各阶段可用。并且这些依赖关系会参与依赖传递。

- **provided**
  依赖项将添加到编译和测试阶段，但不会添加到运行时。不具有传递性。适用于打war包时容器在运行时提供依赖项例如Servlet API，或者只参与编译不参与运行的jar包例如lombok等。

- **runtime**
  依赖项将添加到运行和测试阶段，但不会添加到编译阶段。具有传递性。表示只在运行时需要此依赖编译时不需要例如项目中引用的接口那么实现包就不用编译运行时能获取到就行。将实现包设置为`runtime`可以规范项目只使用接口以降低耦合。

- **test**
  表示应用程序的正常使用不需要依赖项，仅适用于测试编译和执行阶段。不具有传递性。通常用于测试库，或库只在单元测试 (src/test/java) 使用。

- **system**
  设置依赖从本地提供，不在maven仓库查找，使用时必须搭配`systemPath`设置本地路径。一般不会使用这个选项。在maven仓库中存在，需要本地提供jar包时设置。

- **import**
  仅在`<dependencyManagement>`中设置，用来导入`POM`并使用它的`<dependencyManagement>`。

  `POM`中通过`<dependencyManagement>`预设依赖的版本等信息，子项目可以继承这个父项目来使用这些依赖版本。

  示例：
  
  ```xml
  <!--依赖版本的统一管理-->
  <groupId>com.demo</groupId>
  <artifactId>demo-dependencies</artifactId>
  <name>demo-dependencies</name>
  <description>设置依赖的版本等信息，子项目继承了这个项目后使用这些依赖就会自动设置版本等</description>
  
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>commons-logging</groupId>
        <artifactId>commons-logging</artifactId>
        <version>1.2</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
  ```
  
  ```xml
  <!--继承了统一管理pom的子项目-->
  <parent>
    <groupId>com.demo</groupId>
    <artifactId>demo-dependencies</artifactId>
    <version>1.0.0</version>
  </parent>
  
  <artifactId>demo-web</artifactId>
  <name>demo-web</name>
  <description>demo-web项目继承了demo-dependencies，所以使用commons-logging时自动继承demo-dependencies中设置的版本信息不用另行设置</description>
  
  <dependencies>
    <dependency>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </dependency>
  </dependencies>
  ```

  但是由于maven的继承是单继承，那项目中如果已有其他继承或不想继承时怎么使用pom中设置的`<dependencyManagement>`呢，此时就可以在项目中通过`import`的形式来实现。如下：
  
  ```xml
  <!--不继承demo-dependencies还想用demo-dependencies中的<dependencyManagement>，使用import实现-->
  <groupId>com.demo</groupId>
  <artifactId>demo-boot</artifactId>
  <version>1.0.0</version>
  <name>demo-boot</name>
  <description>demo-boot项目没有继承demo-dependencies，但想要使用demo-dependencies中的dependencyManagement设置，可以在dependencyManagement中设置demo-dependencies的scope为import</description>
  
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>com.demo</groupId>
        <artifactId>demo-dependencies</artifactId>
        <version>1.0.0</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
  
  <dependencies>
    <dependency>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </dependency>
  </dependencies>
  ```

  ::: tips spring-boot实战
  
  在使用spring-boot开发时通常的做法是将`parent`设为`spring-boot-starter-parent`。但如果是有企业标准的`parent`或更想显示声明所有Maven配置，就可以通过`import` `spring-boot-dependencies`来使用`spring-boot`的依赖管理。
  
  如下：
  
  ```xml
  <dependencyManagement>
      <dependencies>
          <dependency>
              <!-- Import dependency management from Spring Boot -->
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-dependencies</artifactId>
              <version>3.2.0</version>
              <type>pom</type>
              <scope>import</scope>
          </dependency>
      </dependencies>
  </dependencyManagement>
  ```
  
  :::
  
  #### 总结
  
  下表格展示了`scope`选项的生效范围和传递性（不统计import、system）
  
  |          | 生效阶段   | 传递性(A依赖B但不依赖C的情况下)                      |
  | -------- | ---------- | ---------------------------------------------------- |
  | compile  | 所有阶段   | 传递(B依赖C并将scope设为compile或不设置，那么A依赖C) |
  | provided | 编译、测试 | 不传递(B依赖C并将scope设为provided，那么A不依赖C)    |
  | runtime  | 测试、运行 | 传递(B依赖C并将scope设为runtime，那么A依赖C)         |
  | test     | 测试       | 不传递(B依赖C并将scope设为test，那么A不依赖C)        |
  
  下表格展示了`scope`选项传递后的生效情况(`--`表示依赖不传递)（不统计import、system）
  
  |                                | compile(B依赖C并设为compile)   | provided(B依赖C并设为provided) | runtime(B依赖C并设为runtime)   | test(B依赖C并设为test) |
  | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ---------------------- |
  | compile(A依赖B并设为compile)   | compile(A依赖C并设为compile)   | --                             | runtime(A依赖C并设为runtime)   | --                     |
  | provided(A依赖B并设为provided) | provided(A依赖C并设为provided) | --                             | provided(A依赖C并设为provided) | --                     |
  | runtime(A依赖B并设为runtime)   | runtime(A依赖C并设为runtime)   | --                             | runtime(A依赖C并设为runtime)   | --                     |
  | test(A依赖B并设为test)         | test(A依赖C并设为test)         | --                             | test(A依赖C并设为test)         | --                     |
  
  

