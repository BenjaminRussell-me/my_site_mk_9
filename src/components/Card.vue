<template>
    <div class="card">
            <img class="card_img" />
        <div class="info">
            <h1 class="title">{{title}}</h1>
            <div class="tags_holder">
               <TagBubble v-for="tag in tags">{{tag.title}}</TagBubble>  
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TagBubble from './TagBubble.vue';

const Props = defineProps<{
    img: String,
    title: String,
    tags: [{title:String}],
}>()
</script>

<style lang="scss" scoped>

.card {
    background: $lightColor;
    width: clamp(160px, 20vw, 220px);
    box-shadow: 0 0 3px 1px;
    border-radius: $corners;
    .card_img {
        border-radius: $corners;
        overflow: hidden;
        border-radius: 6px 6px 0 0;
        width: 100%;
        aspect-ratio: 1/1;
        background: red;
    }
    .info {
        padding: $gap;
    }
}
</style>