<template>
<div>
    <div v-for="item in data">
        <h1>{{item.title}}</h1>
        <img :src="item.img"/>
        <Markdown :source="item.content"></Markdown>
    </div>
</div>
</template>

<script setup lang="ts">
import {useQuery} from 'villus';
import {useRoute} from 'vue-router';
import Markdown from 'vue3-markdown-it';
const route = useRoute();


const {data} = useQuery({
  query: `{
      findProjectByID(id: ${route.params.id}){
              title
              content
              img
      }
    }`,
})

</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>