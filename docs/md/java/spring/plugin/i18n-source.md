# I18N源码解析

## LocaleChangeInterceptor拦截器

`LocaleChangeInterceptor`拦截器是Spring拦截器`HandlerInterceptor`的一个实现，用来实现请求处理前根据接口参数修改语言环境，设置Locale解析器`LocaleResolver`。`HandlerInterceptor`的核心源码如下，核心功能是对Locale解析器`LocaleResolver`设置`Locale`：

```java
public class LocaleChangeInterceptor implements HandlerInterceptor {
  //省略部分
  
  @Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws ServletException {

		String newLocale = request.getParameter(getParamName());
		if (newLocale != null) {
			if (checkHttpMethod(request.getMethod())) {
				LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
				if (localeResolver == null) {
					throw new IllegalStateException(
							"No LocaleResolver found: not in a DispatcherServlet request?");
				}
				try {
					localeResolver.setLocale(request, response, parseLocaleValue(newLocale));
				}
				catch (IllegalArgumentException ex) {
					if (isIgnoreInvalidLocale()) {
						if (logger.isDebugEnabled()) {
							logger.debug("Ignoring invalid locale value [" + newLocale + "]: " + ex.getMessage());
						}
					}
					else {
						throw ex;
					}
				}
			}
		}
		// Proceed in any case.
		return true;
	}
  
  //省略部分
}
```



## `LocaleResolver`解析器

`LocaleResolver`解析器用来保存Locale，实现方式可以选择`Cookie`或`Session`。使用时只需要将对应的Bean给到Spring容器即可。

以`Cookie`为例，`CookieLocaleResolver`实现了`LocaleContextResolver`接口提供了设置Locale的方法如下：

```java
@Override
	public void setLocale(HttpServletRequest request, @Nullable HttpServletResponse response, @Nullable Locale locale) {
		setLocaleContext(request, response, (locale != null ? new SimpleLocaleContext(locale) : null));
	}

	@Override
	public void setLocaleContext(HttpServletRequest request, @Nullable HttpServletResponse response,
			@Nullable LocaleContext localeContext) {

		Assert.notNull(response, "HttpServletResponse is required for CookieLocaleResolver");

		Locale locale = null;
		TimeZone timeZone = null;
		if (localeContext != null) {
			locale = localeContext.getLocale();
			if (localeContext instanceof TimeZoneAwareLocaleContext) {
				timeZone = ((TimeZoneAwareLocaleContext) localeContext).getTimeZone();
			}
			addCookie(response,
					(locale != null ? toLocaleValue(locale) : "-") + (timeZone != null ? '/' + timeZone.getID() : ""));
		}
		else {
			removeCookie(response);
		}
		request.setAttribute(LOCALE_REQUEST_ATTRIBUTE_NAME,
				(locale != null ? locale : determineDefaultLocale(request)));
		request.setAttribute(TIME_ZONE_REQUEST_ATTRIBUTE_NAME,
				(timeZone != null ? timeZone : determineDefaultTimeZone(request)));
	}
```

从源码中可以看到，是将Locale存放到了Cookie中，使用时从Cookie中获取。Session实现方式相同，只不过是存放到了Session中。

## 流程

```mermaid
sequenceDiagram
	autonumber
  Actor User as 用户
  Participant Application as Web应用程序
  Participant Service as 业务程序
  Participant DispatcherServlet
	Participant HandlerExecutionChain
  Participant LocaleContextHolder
  Participant LocaleResolver
  Participant request as HttpServletRequest
  Participant MessageSource as ResourceBundleMessageSource

  User ->> Application: 发送请求
  Application ->> +DispatcherServlet: 处理请求 <br/> <<processRequest>>
  note over Application,DispatcherServlet: 由父类FrameworkServlet处理
  DispatcherServlet ->> +DispatcherServlet: 构建LocaleContext <br/> <<buildLocaleContext>>
  DispatcherServlet ->> +LocaleResolver: 构建LocaleContext <br/> <<resolveLocaleContext>>
  note over DispatcherServlet, LocaleResolver: LocaleResolver由@Bean注入
  LocaleResolver -->> -DispatcherServlet: 返回LocaleContext
  note over LocaleResolver,DispatcherServlet: 根据LocaleResolver实现方式定义Locale获取方式<br/>具体Locale由拦截器提供
  DispatcherServlet -->> -DispatcherServlet: 返回LocaleContext
  DispatcherServlet ->> +DispatcherServlet: 初始化LocaleContextHolder<br/> <<initContextHolders>>
  DispatcherServlet ->> LocaleContextHolder: 将LocaleContext保存到ThreadLocal <br/> <<setLocaleContext>>
  deactivate DispatcherServlet
  DispatcherServlet ->> +DispatcherServlet: 处理请求 <br/> <<doService>>
  DispatcherServlet ->> request: 缓存LocaleResolver对象到Request
  DispatcherServlet ->> +DispatcherServlet: 处理请求 <br/> <<doDispatch>>
  DispatcherServlet ->> +HandlerExecutionChain: 拦截器开始请求处理前的拦截处理 <br/> <<applyPreHandle>>
  HandlerExecutionChain ->> -DispatcherServlet: 返回所有拦截器执行结果
  note over HandlerExecutionChain, DispatcherServlet: 实现方式见拦截器时序图
  DispatcherServlet ->> +Service: 调用实际业务
  Service ->> +LocaleContextHolder: 获取Locale <br/> <<getLocale>>
  LocaleContextHolder ->> LocaleContextHolder: 从ThreadLocal中获取LocaleContext <br/> <<getLocaleContext>>
  LocaleContextHolder ->> LocaleContextHolder: 从LocaleContext中获取Locale <br/> <<getLocale>>
  LocaleContextHolder ->> -Service: 返回Locale
  Service ->> +MessageSource: 根据Locale获取消息 <br/> <<getMessage>>
  MessageSource ->> -Service: 返回消息
  note over MessageSource, Service: 实现方式见MessageSource获取消息时序图
  Service ->> -Service: 业务处理完成
  DispatcherServlet ->> HandlerExecutionChain: 业务完成完成后的拦截 <br/> <<applyPostHandle>>
  DispatcherServlet ->> -DispatcherServlet: 处理业务返回和异常 <br/> <<processDispatchResult>>
  deactivate DispatcherServlet
  DispatcherServlet ->> -DispatcherServlet: 重置上下文
  Application->>User: 呈现响应
```



### 拦截器时序图

```mermaid
sequenceDiagram
	autonumber
	Participant DispatcherServlet
	Participant request as HttpServletRequest
	Participant HandlerExecutionChain
  Participant LocaleChangeInterceptor
  Participant LocaleResolver
  
  DispatcherServlet ->> +HandlerExecutionChain: 拦截器开始请求处理前的拦截处理 <br/> <<applyPreHandle>>
  HandlerExecutionChain ->> +LocaleChangeInterceptor: Locale拦截器的处理 <br/> <<preHandle>>
  LocaleChangeInterceptor ->> LocaleChangeInterceptor: 检查请求参数和请求方法模式是否设置Locale
  LocaleChangeInterceptor ->> request: 获取LocaleResolver
  LocaleChangeInterceptor ->> LocaleChangeInterceptor: 将请求中的字符串类型的语言转换为Locale <br/> <<parseLocaleValue>>
  LocaleChangeInterceptor ->> +LocaleResolver: 设置Locale
  LocaleResolver->>-LocaleResolver: 保存Locale
  note over LocaleResolver: 根据实现方式，Locale保存到Session或Cookie
  LocaleChangeInterceptor ->> -HandlerExecutionChain: 返回Locale拦截器结果
  HandlerExecutionChain ->> -DispatcherServlet: 返回所有拦截器执行结果
```



### MessageSource获取消息时序图

```mermaid
sequenceDiagram
	autonumber
	Participant Service AS 业务代码
  Participant MessageSource as ResourceBundleMessageSource
  
  Service ->> +MessageSource: 根据Locale获取消息 <br/> <<getMessage>>
  MessageSource ->> MessageSource: 获取Message <br/> <<getMessageInternal>>
  alt 无参数
  	MessageSource ->> +MessageSource: 获取Message <br/> <<resolveCodeWithoutArguments>>
  	MessageSource ->> MessageSource: 获取ResourceBundle <br/> <<getResourceBundle>>
  	MessageSource ->> -MessageSource: 从ResourceBundle返回数据 <br/> <<getStringOrNull>>
  else 有参数
		MessageSource ->> +MessageSource: 解析参数 <br/> <<resolveArguments>>
  	MessageSource ->> +MessageSource: 获取MessageFormat <br/> <<resolveCode>>
  	MessageSource ->> MessageSource: 获取ResourceBundle <br/> <<getResourceBundle>>
  	MessageSource ->> MessageSource: 从ResourceBundle获取消息 <br/> <<getStringOrNull>>
  	MessageSource ->> -MessageSource: 将消息解析为MessageFormat <br/> <<createMessageFormat>>
  	MessageSource ->> -MessageSource: MessageFormat格式化参数并返回 <br/> <<createMessageFormat>>
  end
  MessageSource ->> -Service: 返回消息
```