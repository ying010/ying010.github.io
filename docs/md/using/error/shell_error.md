# 脚本执行错误

## windows系统上禁止运行脚本

Windows系统执行脚本时有时回报，`无法加载文件 XXX，因为在此系统上禁止运行脚本`的错误，详细错误信息如下：

![image-20220411162133691](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-162136.png)

出现这个原因是客户端系统的`PowerShell` 执行策略默认是`Restricted`,该策略不允许执行脚本；这时我们可以把策略改为服务器的默认策略`RemoteSigned`

其中查看系统当前执行策略的指令是：`Get-ExecutionPolicy`,执行示例：

![image-20220411162716321](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-162717.png)

更改执行策略的指令是：`Set-ExecutionPolicy 策略名` , 执行示例：

![image-20220411162903866](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-162905.png)

> 官方文档：[about_Execution_Policies](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2)



