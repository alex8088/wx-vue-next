<p align="center">
  <img src="https://alex8088.github.io/assets/wx-vue.png" width="180px" height="180px">
</p>
<div align="center">
  <h1>wx-vue</h1>
</div>

<p align="center">A Vue.js 3 Mobile UI components library based on the WeUI Design</p>

<p align="center">
<img src="https://img.shields.io/github/license/alex8088/wx-vue-next?color=blue" alt="license" />
</p>

<p align="center">
  English | <a href="./README.zh-CN.md">中文</a>
</p>

---

## Features

- 🍥 Base on WeUI Design
- 🚀 More then 40 components（WIP）
- 📗 Extensive documentation and demos
- 🔥 Written in TypeScript
- 🔥 Support Vue 3
- 💪 Support on-demand import
- 💪 Support dark mode
- 💪 Support custom theme

## Usage

### Install

```sh
npm i wx-vue
```

### Quick Start

```js
import { createApp } from 'vue';
import App from './App.vue';
import Wx from 'wx-vue';
import 'wx-vue/dist/wx-vue.css';

const app = createApp(App);

app.use(Wx);
app.mount('#app');
```

Read the [documentation](https://alex8088.github.io/wx-vue-next/docs/) to learn more.

## Preview

![Demo](https://alex8088.github.io/assets/wx-vue-qrcode.png)

## Links

- [weui](https://weui.io/)

## License

[MIT](./LICENSE) copyright © 2020-present alex wei
