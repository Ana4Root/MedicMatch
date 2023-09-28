import { createApp } from 'vue';
import router from './routes';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.4.15:8000/api/';

const app = createApp(App);
app.use(router); 
app.mount('#app');