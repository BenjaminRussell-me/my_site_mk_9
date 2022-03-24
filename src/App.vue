
<template>
<HeaderBar>
  <div id="me">
    <img />
    <span>BenjaminRussell.me</span>
  </div>
</HeaderBar>
<Background>
  <div id="app_grid">
    <section class="page_section">
    <Stage @forward="padginate(true)" @backward="padginate(false)" :width="stage_line_width" :title="page_title" :showPadg="show_padg"> 
  <router-view :data="data" v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.fullPath"/>
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
import BottomBar from '~/components/BottomBar.vue'
import {useQuery} from 'villus'
import Markdown from 'vue3-markdown-it';
import HeaderBar from '~/components/HeaderBar.vue';
import {watch, ref, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();
function test() {
  alert('hi')
}

let thoughts_cursor = ref(null);
let thoughts_size = ref(3);
const get_main_query = computed(() =>{
  return `{
    allThoughts(_size: ${thoughts_size.value}, _cursor:${thoughts_cursor.value}){
      data{
        title
        _id
        img
        tags {
          data {
            title
            _id
          }
        }
      }
      before
      after
    }
    allProjects {
      data {
        title
        img
        _id
      }
    }
    }`
}) 


let {data, execute} = useQuery({
  query: get_main_query
})


let show_padg = ref(false);
let page_title = ref("")
let stage_line_width = ref(800);
function stage_set() {
  switch(route.name){
    case 'Home':
      stage_line_width.value = 800;
      page_title.value = "Home"
      show_padg.value = false;
      break;
    case 'Thoughts':
      stage_line_width.value = 890;
      page_title.value = "Thoughts"
      show_padg.value = true;
      thoughts_size.value = 3;
      break;
    case 'Projects':
      stage_line_width.value = 890;
      page_title.value = "Projects"
      show_padg.value = false;
      break;
    case 'Resume':
      stage_line_width.value = 700;
      page_title.value = "Resume"
      show_padg.value = false;
      break;
    case 'Content':
      stage_line_width.value = 500;
      page_title.value = "Resume"
      show_padg.value = true;
      thoughts_size.value = 99;
      break;
  }

}
watch(
  () => route.name,
  async test => {
    stage_set();
  }
)

function padginate(forward: Boolean){
  if(route.name == 'Thoughts'){
  if(forward && data.value.allThoughts.after != null){
    thoughts_cursor.value = `"${data.value.allThoughts.after}"`;
  }else if (!forward && data.value.allThoughts.before != null){
    thoughts_cursor.value = `"${data.value.allThoughts.before}"`;
  }
  }

 // this is scuffed as hell
 // look away lest you lose brain cells 

  if(route.name == 'Content'){
    if(route.params.location == 'thought'){
      const arr = [...data.value.allThoughts.data];
      const current_id = (element) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
      const index = arr.findIndex(current_id)

      if(forward && index < arr.length - 1){
        const next_id = data.value.allThoughts.data[index + 1]._id
        router.push({path: `/content/thought/${next_id}`})
      }
      if(!forward && index != 0){
        const next_id = data.value.allThoughts.data[index - 1]._id
        router.push({path: `/content/thought/${next_id}`})
      }

    }
    if(route.params.location == "project"){
      const arr = [...data.value.allProjects.data];
      const current_id = (element) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
      const index = arr.findIndex(current_id)

      if(forward && index < arr.length - 1){
        const next_id = data.value.allProjects.data[index + 1]._id
        router.push({path: `/content/project/${next_id}`})
      }
      if(!forward && index != 0){
        const next_id = data.value.allProjects.data[index - 1]._id
        router.push({path: `/content/project/${next_id}`})
      }

    }

  }
}
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
