# 文档编辑

## Typora

## 插件

### PicGo

Typora使用图片时，可以选择将图片上传到图床，推荐使用PicGo-Core上传。Typora设置如下：

![image-20230224113148838](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/02/24/20230224113149.png)

PicGo-Core是[PicGo](https://github.com/Molunerfinn/PicGo)2.0版本里将会预置的底层核心组件。它可以看做是一个简单的上传流程系统。可以使用命令行配置并使用，操作更为简洁比较适合当作插件配合其他地方使用。PicGo-Core[官方文档](https://picgo.github.io/PicGo-Core-Doc/zh/guide/)

#### 快速入门

::: tips

.md文档编辑器选择Typora，图片上传服务为PicGo-Core，图床使用Github。

:::

1. 打开Typora偏好设置->图像。将插入图片选项改为上传图片，上传服务选择PicGo-Core，点击`下载或更新`安装PicGo-Core。

2. 使用`picgo set uploader`命令设置图床，可以根据自己需求选择合适的图床，这里以github举例。

   :::tips

    如果是Typora安装的PicGO-Core不是全局安装，需要到安装目录下操作，或者加环境变量。Typora的下载路径：

   `C:\Users\用户名\AppData\Roaming\Typora\picgo\win64`

   :::

   ```sh
   C:\Users\99>picgo set uploader
   ? Choose a(n) uploader (Use arrow keys)
   > aliyun
     tcyun
     smms
     github
     qiniu
     imgur
     upyun
   ```

   选择github，回车，根据提示依次设置github配置，分别是：仓库名、分支名、token、存储路径。

   ```sh
   C:\Users\99>picgo set uploader
   ? Choose a(n) uploader github
   设定仓库名 格式：username/repo ying/pic-repo
   设定分支名 例如：main master
   ? token: [hidden]
   设定存储路径 例如：test/ img/
   设定自定义域名 例如：https://test.com
   [PicGo SUCCESS]: Configure config successfully!
   [PicGo INFO]: If you want to use this config, please run 'picgo use uploader'
   ```

   ::: warning

   必须使用`picgo use uploader`选择设置的图床才能生效。

   :::

   ::: details github图床

   - 在github新建一个仓库，设置为Public，在master分支下新建一个img文件夹，生成一个Token。

   - github登入成功后，输入`https://github.com/settings/tokens/new`可生成一个token，选择repo下所有选项。点击生成后会显示token，注意此token只显示一次，后面无法再次获取，需要保存下来。

   ![image-20230224120429775](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/02/24/20230224120430.png)

   :::

3. 测试上传：点击验证图片上传选项，显示成功表面设置成功。

4. 默认上传的文件名是本地文件名，可能会导致名称冲突，可以安装一个重命名插件`super-prefix`

#### 安装

1. 仅在Typora中使用时，可以点击上图中的`下载或更新`按钮安装

2. 需要全局使用时可以使用npm或yarn安装

   ```sh
   # 安装
   yarn global add picgo # 或者 npm install picgo -g
   ```

#### 配置

picgo 需要配置文件来启动。当未指定配置文件的时候，picgo 将会使用默认配置文件来启动。

picgo 的默认配置文件为`~/.picgo/config.json`。其中`~`为用户目录。不同系统的用户目录不太一样。

linux 和 macOS 为`~/.picgo/config.json`。

windows 为`C:\Users\系统用户名\.picgo\config.json`。

##### 生成配置文件

- 自动生成

  参阅快速入门。

- 手动生成

  打开`config.json`配置文件，手动写入配置信息。

  ```json
  {
    "picBed": {
      "current": "smms",
      "smms": {
        "token": ""
      }
    },
    "picgoPlugins": {}
  }
  ```

`picBed`是picgo 最主要的配置项，包括了当前上传图床，以及所有上传图床的配置。设置完图床后不需要修改。

`picgoPlugins`放置插件名,主要用于判断插件是否被启用或者禁用。 **picgo 自动生成，不需要配置！**

`picgo-plugin-*`是插件配置

#### 插件

#####  安装

> 该命令用于安装npm上的picgo的插件。picgo的插件名都是以`picgo-plugin-`开头的。在安装、卸载或者更新的时候，你只需要输入`name`值而不需要输入`picgo-plugin-`的前缀。可以一次性安装多个插件，用空格隔开即可。

:::tips

PicGo会把插件安装在配置文件所在的目录下。默认配置文件在`~/.picgo/`下，所以插件会安装在`~/.picgo/node_modules/`下。

:::

你可以通过npm的官方网站查找目前所有的picgo的[插件](https://www.npmjs.com/search?q=picgo-plugin-)。picgo的插件命名规则为`picgo-plugin-[name]`。然后再通过：

```sh
picgo install [name]
```

来安装插件。你安装了之后，可以通过`picgo ch plugins`来选择开启或者禁用这个插件。

可以在PicGo官方的[Awesome-PicGo](https://github.com/PicGo/Awesome-PicGo)里找到超棒的PicGo插件和应用了PicGo的应用或者项目~

推荐使用[super-prefix](https://github.com/gclove/picgo-plugin-super-prefix#readme)插件，可以对文件上传的路径和上传的文件名进行自定义。安装插件之后，修改插件配置如下，可将上传路径以年月日分层，方便管理。

```json
{
  "picBed": {
    "uploader": "github",
    "github": {
      "repo": "username/reponame", // 仓库名，格式是 username/reponame
      "token": "token", // github token
      "path": "img/", // 自定义存储路径，比如 img/
      "customUrl": "", // 自定义域名，注意要加 http://或者 https://
      "branch": "master" // 分支名，默认是 main
    },
    "transformer": "path"
  },
  "picgoPlugins": {
    "picgo-plugin-super-prefix": true
  },
  "picgo-plugin-super-prefix": {
    "prefixFormat": "YYYY/MM/DD/",
    "fileFormat": "YYYYMMDDHHmmss"
  }
}
```

