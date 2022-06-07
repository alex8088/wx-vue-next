import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Wx from 'wx-vue'
import 'wx-vue/dist/wx-vue.css'

const app = createApp(App)

app.use(router)
app.use(Wx)

app.mount('#app')
