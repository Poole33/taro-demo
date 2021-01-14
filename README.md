# 使用文档

## Taro介绍
  **Taro** 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。现如今市面上端的形态多种多样，Web、React Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

## Taro安装及使用
>若你想直接使用本demo进行开发，可略过这些步骤直接查看最后的[Demo使用](#Demo使用)。但从头看完文档会加深你对Taro的理解。也可直接去[Taro官网](https://docs.taro.zone/docs/README)进行更加详细的学习。

Taro 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 nvm 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

### CLI工具安装
>// 使用 npm 安装 CLI  
>**npm install -g @tarojs/cli**   

>// 使用 yarn 安装 CLI  
>**yarn global add @tarojs/cli**  

>// 使用 cnpm 安装 CLI  
>**cnpm install -g @tarojs/cli**

### 项目初始化
使用命令创建模版项目  
>taro init myApp

此命令会自动安装项目所需的依赖，如果安装失败可以自己在项目目录下自己使用命令进行安装
>// 使用 yarn 安装依赖  
>**yarn**  

>// 使用 npm 安装依赖  
>**npm install**  

>// 使用 cnpm 安装依赖  
>**cnpm install**  

### 项目运行
Taro 需要运行不同的命令，将 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。下面以微信小程序举例，其他类似。
>// 使用 yarn  
>**yarn dev:weapp**  
>**yarn build:weapp**  

>// 使用 npm  
>**npm run dev:weapp**  
>**npm run build:weapp**  

### 项目配置

#### 入口组件
每一个 Taro 应用都需要一个入口组件用来注册应用，入口文件默认是 src 目录下的 **app.js**。

在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期。
	
	import React, { Component } from 'react'
	import { Provider } from 'react-redux'
	import configStore from './store'
	const store = configStore()

	class App extends Component {
		render () {
    		// 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    		return (
      			<Provider store={store}>
        			/* this.props.children 是将要被渲染的页面 */
        			{this.props.children}
      			</Provider>
    		)
		}
	}
	export default App

#### 入口配置
我们可以新增一个 app.config.js 文件进行全局配置，app.config.js 的默认导出就是全局配置。

配置规范基于微信小程序的全局配置进行制定，所有平台进行统一:

	export default {
  		pages: [
    		'pages/index/index' // 路由
  		],
  		window: {
    		backgroundTextStyle: 'light',
    		navigationBarBackgroundColor: '#fff',
    		navigationBarTitleText: 'WeChat',
    		navigationBarTextStyle: 'black'
  		}
	}

### 文件划分

	├── dist                          编译结果目录
	├── config                        配置目录
	|   ├── dev.js                    开发时配置
	|   ├── index.js                  默认配置
	|   └── prod.js                   打包时配置
	├── src                           源码目录
	|   ├── actions                   action文件目录
	|   ├── assets                    静态资源文件目录
	|   ├── components                全局组件文件目录
	|   ├── constans                  全局常量文件目录
	|   ├── pages                     页面文件目录
	|   |   ├── index                 index 页面目录
	|   |   |   ├── index.config.js   index 页面配置项
	|   |   |   ├── index.js          index 页面逻辑
	|   |   |   └── index.css         index 页面样式
	|   ├── reducers                  reducer文件目录
	|   ├── services                  api服务封装管理文件目录
	|   ├── store                     store文件目录
	|   ├── utils                     共公方法文件目录
	|   ├── app.config.js             项目入口配置文件
	|   ├── app.css                   项目总通用样式
	|   └── app.js                    项目入口文件
	└── package.json

## Demo使用
<!-- <a name=“demo”></a> -->
[github仓库](https://github.com/ptcp3/taro-demo#demo) 拉取项目

### 项目初始化

此命令会自动安装项目所需的依赖，如果安装失败可以自己在项目目录下自己使用命令进行安装
>// 使用 yarn 安装依赖  
>**yarn**  

>// 使用 npm 安装依赖  
>**npm install**  

>// 使用 cnpm 安装依赖  
>**cnpm install**  

### 项目运行
#### 微信小程序运行方法  
微信小程序需要安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)

>**微信小程序开发流程内容较多，一篇文档很难详细讲解清楚的，官方的文档是最好的实践开发文档，自认为不能写的比官方文档更好，所以最好自己根据官方文档实际操作一遍，有兴趣可自行查看[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)了解流程**

微信开发者工具使用详情参见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

大致使用方法：（macOS）  
>// 使用 yarn  
>**yarn dev:weapp**  
>**yarn build:weapp**
  
>// 使用 npm  
>**npm run dev:weapp**  
>**npm run build:weapp**  
+ 打开微信开发者工具
+ dock栏 -> 项目 -> 新建项目
+ 选择导入项目 -> 选择目录（目录地址为项目根目录的**dist**文件）
+ AppID 可不填

#### H5运行方式
使用微信小程序方式运行，需要介入微信开发者工具。目前体验下来，使用此工具开发存在一些闪退和卡顿的问题，所以建议平时开发使用H5的方式进行调试。微信小程序运行作为最后上线时检查兼容等问题的环境。
>// 使用 yarn  
>**yarn dev:H5**  

>// 使用 npm  
>**npm run dev:H5**   

### 项目开发
项目开发使用React语法集成了Redux，具体语法自行查阅React相关开发文档 
 
整体的开发流程有详细的案例，在src->pages->home->home.jsx中可参考

