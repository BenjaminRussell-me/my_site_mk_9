<template>
<div>
    <div id="thought_content" v-for="item in data">
        <h1>{{item.title}}</h1>
        <img :src="item.img">
        <Markdown :source="item.content" :highlight="highlight"></Markdown>
    </div>
</div>
</template>

<script setup lang="ts">
import {useQuery} from 'villus';
import {useRoute} from 'vue-router';
import Markdown from 'vue3-markdown-it';
import highlight from 'highlight.js/lib/core'
import 'highlight.js/styles/monokai.css';
const route = useRoute();

const plugins = [
  highlight
]

const {data} = useQuery({
  query: `{
      findThoughtByID(id: ${route.params.id}){
              title
              content
              img
      }
    }`,
})


</script>

<style lang="scss">
#thought_content {
  img {
    width: 100%;
  }
}

</style>