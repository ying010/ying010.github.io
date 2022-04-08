# 一、集合

## 1.1 Map

ConcurrentHashMap

# 二、设计模式

## 2.1 模板模式

[^引用]: 引用自微信小傅哥 [bugstack虫洞栈](https://mp.weixin.qq.com/s/fiWX6abSCiUKHAUa-HKg4A)

![单例模式(通用类图)](http://www.plantuml.com/plantuml/png/SoWkIImgAStDuN9AJSnpIKtBpCiioSpFKx3HqrC02Rab9fVa5rLQAJpPD_V5rcbSN4Y22ZQwkWgE1PaXgSKb2a0LU_S_dxA2Yoiv9x6uM07Dl6ek1Ls59A0OKA5_KbPgSWbNBLmfmaYGEgX2X6RVn0AWBY1f4rnIb9cNheDck1rGZxP2Uce9I5W3eaOJRWzOiYWrFREu9BK8LQC6TlD0UiloCrFWBeHxiXfiM0cG6O_aQ0qa3GwfUId0u0G0) 

```
<details>
@startuml
Title Spring 构建
BeanDefinition <.. BeanFactory: 依赖
BeanFactory <-- ApiTest : 使用
class BeanDefinition {
 - bean : Object
}
class BeanFactory {
  - beanDefinitionMap : Map\<String, BeanDefinition>
  + getBean(String) : Object
  + registerBeanDefinition(String, BeanDefinition) : void
}
class ApiTest {
  + test_BeanFactory() : void
}
@enduml
</details>
```

# 三、反射

## 3.1 Cglib
