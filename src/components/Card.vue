<template>
    <router-link :to="'/content/'+location+'/'+id" class="card">
            <img class="card_img" :src="img" />
        <div class="info">
            <h1 class="title">{{title}}</h1>
            <div v-if="tags" class="tags_holder">
               <TagBubble v-for="tag in tags">{{tag.title}}</TagBubble>  
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import TagBubble from './TagBubble.vue';
import {} from 'vue-router'
const Props = defineProps<{
    img?: String,
    title: String,
    id: String,
    tags?: [{title:String}],
    location: String,
}>()

</script>

<style lang="scss" scoped>

.card {
    background: $lightColor;
    width: clamp(160px, 20vw, 220px);
    box-shadow: 0 0 3px 1px;
    border-radius: $corners;
    text-align: left;
    padding: 0;
    border: none;
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