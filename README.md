# react-lazy-load
基于react的图片懒加载

## 简介

### component文件夹 
	react图片懒加载组件源码

### page文件夹
	组件具体使用方法及demo
	
### parmas
|属性名|数据类型|属性介绍|默认值|
|:---:|:---:|:---:|:---:|
|fatherRef|string|最外层的ref|fatherRef|
|className|string或者模块化css类|自定义类名|""|
|style|object|自定义样式|{}|
|link|string|标签中存真实地址的属性名|data-original|
|interval|number|懒加载节流间隔|100|
|distance|number|距离浏览器底部多少px的时候加载图片|100|

## ps
	暂时懒得发npm包，可以自行去"src/component/react-lazy-load.jsx"下载源码使用
	具体使用方法见"page/index.jsx"