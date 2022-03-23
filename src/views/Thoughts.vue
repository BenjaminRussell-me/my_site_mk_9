<template>
    <section id="thoughts">
        <CardHolder>
            <Card 
            v-for="project in data?.allThoughts.data"
            :title="project.title"
            :tags="project.tags.data"
            :id="project._id"
            location="thought"
            ></Card>
        </CardHolder>
    </section>
</template>

<script setup lang="ts">
import Stage from '~/components/Stage.vue'
import CardHolder from '~/components/CardHolder.vue';
import Card from '~/components/Card.vue';
const props = defineProps({
    data: Object
})
</script>

<style lang="scss" scoped>
    #thoughts {
        height: 100%;
        display: grid;
    }
</style>