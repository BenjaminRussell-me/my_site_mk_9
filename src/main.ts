import { createApp } from 'vue'
import {createPinia } from 'pinia'
import {createRouter, createWebHistory} from 'vue-router'
import {createClient, defaultPlugins,  fetch,} from 'villus'
import Particles from 'particles.vue3'
import print from 'vue3-print-nb'
import App from './App.vue'

import Home from '~/views/Home.vue'
import Thoughts from '~/views/Thoughts.vue'
import Projects from '~/views/Projects.vue'
import Resume from '~/views/Resume.vue'
import ContentParent from '~/views/ContentParent.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/thoughts', name: 'Thoughts', component: Thoughts},
        {path: '/resume', name: 'Resume', component: Resume},
        {path: '/content/:location/:id', name: 'Content', component: ContentParent}
    ]
})

function authPlugin({opContext}: any) {
    opContext.headers.Authorization = `Bearer ${import.meta.env.VITE_FAUNA_KEY}`
}
function localStorageCache({ afterQuery, useResult, operation }: any) {
  // avoid caching mutations or subscriptions, also avoid caching queries with `network-only` policy
  if (operation.type !== 'query' || operation.cachePolicy === 'network-only') {
    return;
  }

  // Set the cache result after query is resolved
  // Using the `operation.key` is very handy here, it is a unique value that identifies this operation
  // The key is calculated from the query itself and it's variables
  afterQuery((result: string) => {
    localStorage.setItem(operation.key, result);
  });

  // Get cached item
  const cachedResult = localStorage.getItem(operation.key);

  // if exists in cache, terminate with result
  if (cachedResult) {
    // The first argument of `useResult` is the final value of the operation
    // The second argument is optional, it allows the plugin to terminate the operation
    // and stop all other plugins from executing, the last plugin must terminate with `true`
    return useResult(cachedResult);
  }
}

const client = createClient({
    url: 'https://graphql.us.fauna.com/graphql',
    use: [authPlugin, localStorageCache, fetch(), ...defaultPlugins()],
   // use: [authPlugin, ...defaultPlugins()],
})

createApp(App)
.use(createPinia())
.use(router)
.use(client)
.use(print)
.use(Particles)
.mount('#app')
