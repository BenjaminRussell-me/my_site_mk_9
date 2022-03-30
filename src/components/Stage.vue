<template>
<div id="stage">
   <span id="stage_title">{{title}}</span>
   <main :style="{width: `clamp(200px, 80%, ${width}px)`}">
      <div id="main_grid">
         <div class="line"></div>
         <div id="main_content">
            <slot></slot>
         </div>
         <div class="line"></div>
      </div>
   </main>
   <!--
    <transition name="fade" mode="out-in">
         < <Padg v-if="showPadg" :data="data" :position="position" :length="length" @forward="$emit('forward')" @backward="$emit('backward')"></Padg>
   </transition>
   -->
   <div id="reflection"></div>
   <div id="color_bar">
      <div id="color"></div>
      <div id="white"></div>
   </div>
</div>
</template>

<script setup lang="ts">
import Padg from './Padg.vue';
   const props = defineProps({
      width: Number,
      title: String,
      showPadg: Boolean,
      length: Number,
      position: Number,
      data: Object,
   })
</script>

<style lang="scss" scoped>
#stage {
   width: 100%;
   background: linear-gradient(to right, rgba($lightColor, .5),rgba($lightColor, .7),rgba($lightColor, .5));
   box-shadow: $shadow;
   align-self: center;
   justify-self: center;
   min-height: 75vh;
   backdrop-filter: blur(6px);
   border-radius: $corners;
   display: grid;
   z-index: 500;
   #stage_title {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      justify-self: start;
      align-self: start;
      margin: $gap;
      grid-area: 1/1/1/1;
   display: block;
   font-family: sans-serif;
   font-size: clamp(0.8rem, 3.5vw, 3.5rem);
   font-weight: bold;
   box-sizing: border-box;
   }
}
main {
   margin: $gap $gap ($gap*2) $gap;
   display: grid;
   grid-area: 1/1/1/1;
   transition: 1s ease-in-out;
   justify-self: center;
   max-height: 68vh;
   overflow-y: auto;
   box-shadow: inset 0 -15px 10px -20px black, inset 0 15px 10px -20px black;
   #main_grid {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: $gap;
      grid-area: 1/1/1/1;
      #main_content {
         padding: $gap 0 $gap 0;
         display: grid;
         grid-area: 1/2/1/2;
      }
   }
}
.line {
   width: 2px;
   background: $darkColor;
   height: 100%;
}
#reflection{
   width: 100%;
   grid-area: 1/1/1/1;
   align-self: end;
  height: 25px; 
   filter: blur(8px);
   mix-blend-mode: lighten;
   background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
   opacity: 0.5;
}
#color_bar {
   width: 100%;
   height: $gap;
   grid-area: 1/1/1/1;
   align-self: end;
   display: grid;
   border-radius: 0 0 $corners $corners;
   margin-bottom: -8px;
   transform: scale(100.6%);
   #color {
      filter: blur(3px);
      grid-area: 1/1/1/1;
   border-radius: 0 0 $corners $corners;
   background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
   width: 100%;
   height: 50%;
   place-self: center;
   }
   #white {
      grid-area: 1/1/1/1;
      width: 99.5%;
      place-self: center;
      height: 25%;
      background: $lightColor;
      filter: blur(1px);
      z-index: 9999;
   border-radius: 360px;
   }
}
</style>