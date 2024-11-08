import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/app.routes';
import './stylesheet/style.scss';
import i18n from '../src/app/core/services/i18n.services';

const app = i18n(createApp(App));

app.use(router);

app.mount('#app');
