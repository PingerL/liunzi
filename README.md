# 轮子 - 一个Vue UI 组件

## 介绍

## 开始使用
1. 安装
使用本框架前，请在 CSS 中开启 border-box
```
*{box-sizing:border-box}
```
## 使 `g-input` 支持 `v-model`
```
// input.vue 中
<input type="text" :value="value"  @input="$emit('input',$event.target.value)">

// index.html 中
<g-input v-model="msg" ></g-input>
```



## 运行脚本测试
- 使用 `npm run test` 一次性运行，使用` npm run dev-test` 进行` watch` 运行
- Windows 用户运行 `npm run dev-test` 时会出现 BUG，解决办法是：
将 `dev-test `对应的命令 `parcel watch test/* --no-cache & karma start` 分别运行，运行方式如下
新开一个 Git Bash 窗口运行 `npx parcel watch test/* --no-cache`
再开一个 Git Bash 窗口运行 `npx karma start`