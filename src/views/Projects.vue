<template>
    <section id="projects">
        <CardHolder>
            <Card 
            v-for="project in data?.allProjects.data"
            :title="project.title"
            :tags="project?.tags?.data"
            location="project"
            :id="project._id"
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
    #projects {
        height: 100%;
        display: grid;
    }
</style>