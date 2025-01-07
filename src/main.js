import './assets/main.css'
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Utilisez le routeur ici
app.use(router);

// Ensuite, montez l'application
app.mount('#app');
