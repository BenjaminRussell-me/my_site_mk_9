import { createApp } from 'vue'
import {createPinia } from 'pinia'
import {createRouter, createWebHistory} from 'vue-router'
import {createClient, defaultPlugins, opContext} from 'villus'
import App from './App.vue'

import Home from '~/views/Home.vue'
import Thoughts from '~/views/Thoughts.vue'
import Projects from '~/views/Projects.vue'
import Resume from '~/views/Resume.vue'


const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/thoughts', name: 'Thoughts', component: Thoughts},
        {path: '/resume', name: 'Resume', component: Resume},
    ]
})

function authPlugin({opContext}) {
    opContext.headers.Authorization = `Bearer ${import.meta.env.VITE_FAUNA_KEY}`
}


const client = createClient({
    url: 'https://graphql.us.fauna.com/graphql',
    use: [authPlugin, ...defaultPlugins()],
})

createApp(App)
.use(createPinia())
.use(router)
.use(client)
.mount('#app')
