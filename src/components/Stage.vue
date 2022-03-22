<template>
<div id="stage">
   <span id="stage_title">title</span>
   <main :style="{width: `clamp(200px, 80%, ${width}px)`}">
      <div id="main_grid">
         <div class="line"></div>
         <div id="main_content">
            <slot></slot>
         </div>
         <div class="line"></div>
      </div>
   </main>
   <div id="color_bar">
      <div id="color"></div>
      <div id="white"></div>
   </div>
</div>
</template>

<script setup lang="ts">
   const props = defineProps({
      width: Number
   })
</script>

<style lang="scss" scoped>
#stage {
   width: 100%;
   background: rgba($lightColor, 0.7);
   box-shadow: $shadow;
   align-self: center;
   justify-self: center;
   min-height: 75vh;
   backdrop-filter: blur(5px);
   border-radius: $corners;
   display: grid;
   #stage_title {
      transform: rotate(90deg);
      justify-self: start;
      align-self: start;
      grid-area: 1/1/1/1;
   margin: $gap;
   }
}
main {
   margin: $gap $gap ($gap*2) $gap;
   display: grid;
   grid-area: 1/1/1/1;
   transition: 1s ease-in-out;
   justify-self: center;
   #main_grid {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: $gap;
   }
}
.line {
   width: 2px;
   background: $darkColor;
   height: 100%;
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