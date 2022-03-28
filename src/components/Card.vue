<template>
    <router-link :to="'/content/'+location+'/'+id" class="card">
            <img class="card_img" :src="img" />
        <div class="info">
            <h1 class="title">{{title}}</h1>
            <div v-if="tags" class="tags_holder">
               <TagBubble class="bubble" v-for="tag in tags">{{tag.title}}</TagBubble>  
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import TagBubble from './TagBubble.vue';
import {} from 'vue-router'
const Props = defineProps<{
    img?: string,
    title: string,
    id: string,
    tags?: [{title:String}],
    location: String,
}>()

</script>

<style lang="scss" scoped>

.card {
    background: $darkColor;
    width: clamp(170px, 16vw, 220px);
    box-shadow: 0 0 5px 2px black;
    border-radius: $corners;
    text-align: left;
    padding: 0;
    border: none;
    text-decoration: none;
    .card_img {
        border-radius: $corners;
        overflow: hidden;
        border-radius: 6px 6px 0 0;
        width: 100%;
        aspect-ratio: 1/1;
        box-shadow: 0 5px 10px -5px black;
        object-fit: cover;
    }
    .info {
        padding: $gap;
        .title{
        background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
    }
}
.tags_holder {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.bubble {
    color: $darkColor;
    font-weight: bold;
    font-size: 12px;
}
</style>