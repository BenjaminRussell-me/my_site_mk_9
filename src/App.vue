
<template>
  <router-link to="/projects">Projects</router-link>
  <router-view></router-view>
  {{data}}
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {useQuery} from 'villus'

const {data} = useQuery({
  query: `{
    findProjectByID(id: 324226404490149953){
      content
      title
    }
    }`,
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
