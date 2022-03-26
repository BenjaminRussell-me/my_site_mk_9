<template>
<div id="padg">
    <div id="padg_flex">
        <button class="arrow" @click="$emit('backward')"><span></span><span></span></button>
        <span id="counter">{{p}}/{{l}}</span>
        <button class="arrow" @click="$emit('forward')"><span/> <span/></button>
    </div>
</div>
</template>

<script setup lang="ts">
import {computed, watch,ref} from 'vue'
import {useRoute} from 'vue-router'
import { useQuery } from 'villus';

const route = useRoute();

let p = ref(1);
let l = ref(1);

const query = computed(() =>{
  return `{
      thoughts_length: allThoughts(_size: 4){
      data{
        title
        _id
      }
    }
      projects_length: allProjects(_size: 3){
      data{
        title
        _id
      }
    }
    }`
}) 

let {data} = useQuery({
  query: query
})

const thoughts_arr = computed(() => {
    return data?.value?.thoughts_length?.data
})
const projects_arr = computed(() => {
    return data?.value?.projects_length?.data
})

function page_location(arr:[any], id:String){
       const current_id = (element: String) => {if(Object.values(element).indexOf(route.params.id) > -1){return true}}
       const index = arr.findIndex(id)
}


const Props = defineProps<{
    length: Number,
    position: Number,
}>()


function on_page() {
    switch(route.params.location){
        case "thought":
            l.value = thoughts_arr.value.lenght
            break;
        case "project":
            l.value = projects_arr.value.lenght
            break;
    }
}




watch(
  () => route.name,
  async test => {
  }
)
</script>

<style lang="scss" scoped>
   #padg {
         grid-area: 1/1/1/1;
         z-index: 9999;
         justify-self: center;
         align-self: end;
         margin: $gap;
         position: static;
         #padg_flex{
             display: flex;
              align-items: center; 
              width: 100px;
              justify-content: space-between;
         }
         .arrow {
             display: grid;
             border: none;
             height: 25px;
             background: none;
             width: 25px;
             padding: 0;
             cursor: pointer;
             &:nth-child(1){
                 transform: rotate(180deg);
             }

             span{
                 display: block;
                 width: 10px;
                 height: 2px;
                 background: $darkColor;
                 grid-area: 1/1/1/1;
                 place-self: center;
                 &:nth-child(1){
                    transform: rotate(45deg) translateY(-5px); 
                 }
                 &:nth-child(2){
                    transform: rotate(-45deg) translateY(5px); 
                 }
             }
         }
   } 
</style>