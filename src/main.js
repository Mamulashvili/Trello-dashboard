import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseModal from '@/components/BaseModal';
import BaseButton from '@/components/BaseButton';
import BaseDropdown from '@/components/BaseDropdown';
import '../public/styles/style.css';
import backgroundDirective from '../plugins/backgroundDirective';


createApp(App)
    .component('BaseModal', BaseModal)
    .component('BaseButton', BaseButton)
    .component('BaseDropdown', BaseDropdown)
    .use(store)
    .use(router)
    .use(backgroundDirective)
    .mount('#app')
