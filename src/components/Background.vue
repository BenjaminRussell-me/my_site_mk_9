<template>
<div id="background_holder">
<div class="content_holder">
    <projects-background v-if="bg == 'projects'"></projects-background>
    <home-background v-if="bg == 'home'"></home-background>
    <resume-background v-if="bg == 'resume'"></resume-background>
    <thoughts-background v-if="bg == 'thoughts'"></thoughts-background>
    </div>
<div class="content_holder">
<slot></slot>
</div>
</div>
</template>

<script setup lang="ts">
import {ref, markRaw, watch, shallowRef} from 'vue'
import { useRoute } from 'vue-router'
import HomeBackground from '~/components/backgrounds/HomeBackground.vue'
import ResumeBackground from '~/components/backgrounds/ResumeBackground.vue'
import ThoughtsBackground from '~/components/backgrounds/ThoughtsBackground.vue'
import ProjectsBackground from '~/components/backgrounds/ProjectsBackground.vue'
const route = useRoute();
let bg = ref('home')


function bg_set(){
  switch(route.name){
    case 'Home':
    default:
      bg.value = 'home' 
      break;
    case 'Thoughts':
      bg.value = 'thoughts'
      break;
    case 'Projects':
      bg.value = 'projects' 
      break;
    case 'Resume':
      bg.value = 'resume'
      break;
    case 'Content':
      bg.value = 'projects'
      break;
  }
}
watch(
  () => route.name,
  async test => {
    bg_set();
  }
)
</script>

<style lang="scss" scoped>
#background_holder{
    height: 100vh;
    display: grid;
    background: radial-gradient( darken($darkColor, 10%), $darkColor);
    z-index: -1;
    .content_holder {
        grid-area: 1/1/1/1;
    .background {
        width: 100%;
        height: 100%;
    }
    }
}
.bg-enter-active, .bg-leave-active {
  transition: opacity 1s;
  opacity: 1;
}
.bg-enter, .bg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>