<template>
<div>
    <component :is="display"></component>
</div>
</template>

<script setup lang="ts">
import ProjectContent from '~/components/ProjectContent.vue'
import ThoughtContent from '~/components/ThoughtContent.vue'
import { useRoute } from 'vue-router';
const router = useRoute();

let display: any;
switch(router.params.location){
    case 'project':
        display = ProjectContent
        break;
    case 'thought':
        display = ThoughtContent
        break;
}
</script>

<style lang="scss" scoped>
#resume {
    display: grid;
    grid-template-rows: auto 1fr;
    position: relative;
    #resume_print{
        position: fixed;
        justify-self: center;
        align-self: start;
    }
    #resume_content {
    background: blue;
    width: 100%;
    aspect-ratio: 8.5/11;
    margin-top: $gap*2;
    }
}
</style>