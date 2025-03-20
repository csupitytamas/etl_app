import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ipcRenderer } from 'electron';

const app = createApp(App)

app.use(router)

app.mount('#app')


function closeApp() {
  ipcRenderer.send('close-window');
}
