<template>
<div id="background_holder">
<div class="content_holder">
    <transition name="bg" appear mode="out-in">
    <component :is="bg"></component>
    </transition>
    </div>
<div class="content_holder">
<slot></slot>
</div>
</div>
</template>

<script setup lang="ts">
import HomeBackground from '~/components/backgrounds/HomeBackground.vue'
interface Props {
    bg: any
}
const props = withDefaults(defineProps<Props>(),{
    bg: HomeBackground
})

</script>

<style lang="scss" scoped>
#background_holder{
    height: 100vh;
    display: grid;
    background: radial-gradient( darken($darkColor, 5%), $darkColor);
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