
<template>
<HeaderBar>
  <router-link to="/projects">Projects</router-link>
</HeaderBar>
<Background>
  <div id="app_grid">
  <router-view :data="data"></router-view>
  </div>
 <!-- <Markdown :source="data?.allProjects.data[1].content" /> -->
</Background>
</template>

<script setup lang="ts">
import Background from '~/components/Background.vue'
import {useQuery} from 'villus'
import Markdown from 'vue3-markdown-it';
import HeaderBar from '~/components/HeaderBar.vue';

const {data} = useQuery({
  query: `{
    allThoughts{
      data{
        title
        tags {
          data {
            title
            _id
          }
        }
      }
    }
    allProjects {
      data {
        title
        content
      }
    }
    }`,
})
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
#app_grid{
  display: grid;
  height: 100%;
  .page_section {
    place-self: center;
    align-self: center;
    width: $parent_width;
  }
}

</style>
