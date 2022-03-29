
<template>
<HeaderBar>
  <div id="me">
    <img />
    <span id="logo">BenjaminRussell.me</span>
  </div>
</HeaderBar>
<Background>
  <div id="app_grid">
    <section class="page_section">
    <Stage :length="length" :position="position" :width="stage_line_width" :title="page_title" :showPadg="show_padg"> 
  <router-view :data="data" v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.fullPath"/>
    </transition>
  </router-view>
  </Stage>
  </section>
  </div>
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
import HeaderBar from '~/components/HeaderBar.vue';
import {watch, ref, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();
function test() {
  alert('hi')
}

let thoughts_cursor = ref(null);
let thoughts_size = ref(4);
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
    findResumeByID(id:327121152132513861){
      name
      About{
        discription
        content
      }
      img
      job
      contact{
        email
        website
      }
      experience{
        discription
        content
      }
      skills{
        discription
        content
      }
      Education{
        discription
        content
      }
      }
      thoughts_length: allThoughts(_size: 100){
      data{
        title
      }
    }
    }`
}) 


let {data, execute} = useQuery({
  query: get_main_query
})


const thoughts_pages = computed(() => {
  return Math.ceil(data?.value?.thoughts_length?.data?.length / 3)
})
const thoughts_ammount = computed(() => {
  if(data?.value?.thoughts_length?.data?.length){
    return data?.value?.thoughts_length?.data?.length 
  }
})

let position = ref(0);
let length = ref(0);
let show_padg = ref(false);
let page_title = ref("")
let stage_line_width = ref(800);

function stage_set() {
  position.value = 1;
  length.value = 1;
  switch(route.name){
    case 'Home':
      stage_line_width.value = 750;
      page_title.value = "Home"
      show_padg.value = false;
      break;
    case 'Thoughts':
      stage_line_width.value = 1200;
      page_title.value = "Thoughts"
      show_padg.value = false;
      break;
    case 'Projects':
      stage_line_width.value = 800;
      page_title.value = "Projects"
      show_padg.value = false;
      break;
    case 'Resume':
      stage_line_width.value = 900;
      page_title.value = "Resume"
      show_padg.value = false;
      break;
    case 'Content':
      stage_line_width.value = 500;
      page_title.value = "Resume"
      show_padg.value = true;
      break;
  }

}
watch(
  () => route.name,
  async test => {
    stage_set();
  }
)

// function padginate(forward: Boolean){
//   if(route.name == 'Thoughts'){
//   if(forward && data.value.allThoughts.after != null){
//     thoughts_cursor.value = `"${data.value.allThoughts.after}"`;
//   }else if (!forward && data.value.allThoughts.before != null){
//     thoughts_cursor.value = `"${data.value.allThoughts.before}"`;
//   }
//   }

 // this is scuffed as hell
 // look away lest you lose brain cells 

//   if(route.name == 'Content'){
//     if(route.params.location == 'thought'){
//       set_cont_padg()
//       const arr = [...data?.value?.allThoughts.data];
//       const current_id = (element) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
//       const index = arr.findIndex(current_id)

//       if(forward && index < arr.length - 1){
//         const next_id = data.value.allThoughts.data[index + 1]._id
//         router.push({path: `/content/thought/${next_id}`})
//       }
//       if(!forward && index != 0){
//         const next_id = data.value.allThoughts.data[index - 1]._id
//         router.push({path: `/content/thought/${next_id}`})
//       }

//     }
//     if(route.params.location == "project"){
//       const arr = [...data?.value?.allProjects.data];
//       const current_id = (element) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
//       const index = arr.findIndex(current_id)

//       if(forward && index < arr.length - 1){
//         const next_id = data.value.allProjects.data[index + 1]._id
//         router.push({path: `/content/project/${next_id}`})
//       }
//       if(!forward && index != 0){
//         const next_id = data.value.allProjects.data[index - 1]._id
//         router.push({path: `/content/project/${next_id}`})
//       }

//     }

//   }
// }

// function set_cont_padg() {
//   if(route.params.location == "thought"){
//       const arr = [...data.value.allThoughts.data];
//       const current_id = (element) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
//       const index = arr.findIndex(current_id)
//       length.value = thoughts_ammount
//       position.value = index + 1    
//   }
// }
</script>

<style lang="scss">
#logo{
  font-weight: 900;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation-delay: 1s;
  opacity: 0;
}
</style>
