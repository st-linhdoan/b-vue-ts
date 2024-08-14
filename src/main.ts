import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/app.routes';
import './stylesheet/style.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
