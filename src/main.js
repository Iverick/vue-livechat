import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { projectAuth } from './firebase/config'

let app

/*
 * Verifies the auth state of the app before mounting it to the DOM 
 *
 */
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})
