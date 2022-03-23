
<template>
<HeaderBar>
  <div id="me">
    <img />
    <span>BenjaminRussell.me</span>
  </div>
</HeaderBar>
<Background :bg="bg" >
  <div id="app_grid">
    <section class="page_section">
    <Stage :width="stage_line_width" :title="page_title"> 
  <router-view :data="data" v-slot="{Component}">
    <transition name="fade" appear mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </Stage>
  </section>
  </div>
 <!-- <Markdown :source="data?.allProjects.data[1].content" /> -->
</Background>
<BottomBar>
  <div id="links">
  <router-link :class="{off: route.name == 'Home'}" to="/">Home</router-link>
  <router-link :class="{off: route.name == 'Projects'}" to="/projects">Projects</router-link>
  <router-link :class="{off: route.name == 'Thoughts'}" to="/thoughts">Thoughts</router-link>
  <router-link :class="{off: route.name == 'Resume'}" to="/resume">Resume</router-link>
  </div>
</BottomBar>
</template>

<script setup lang="ts">
import Background from '~/components/Background.vue'
import Stage from '~/components/Stage.vue'
import HomeBackground from './components/backgrounds/HomeBackground.vue';
import ProjectsBackground from './components/backgrounds/ProjectsBackground.vue';
import ThoughtsBackground from './components/backgrounds/ThoughtsBackground.vue';
import ResumeBackground from './components/backgrounds/ResumeBackground.vue'; 
import BottomBar from '~/components/BottomBar.vue'
import {useQuery} from 'villus'
import Markdown from 'vue3-markdown-it';
import HeaderBar from '~/components/HeaderBar.vue';
import {watch, ref} from 'vue'
import {useRoute} from 'vue-router'

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
      }
    }
    }`,
})
let page_title = ref("")
let stage_line_width = ref(0);
const route = useRoute();
let bg = ref('HomeBackground')
function stage_set() {
  switch(route.name){
    case 'Home':
      stage_line_width.value = 800;
      bg.value = HomeBackground
      page_title.value = "Home"
      break;
    case 'Thoughts':
      stage_line_width.value = 890;
      bg.value = ThoughtsBackground
      page_title.value = "Thoughts"
      break;
    case 'Projects':
      stage_line_width.value = 890;
      bg.value = ProjectsBackground
      page_title.value = "Projects"
      break;
    case 'Resume':
      stage_line_width.value = 700;
      bg.value = ResumeBackground
      page_title.value = "Resume"
      break;
    case 'Content':
      break;
  }

}
watch(
  () => route.name,
  async test => {
    stage_set();
  }
)
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
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


.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation-delay: 1s;
  opacity: 0;
}
</style>
