<template>
        <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="options"
        />
</template>

<script setup lang="ts">
import options from "~/assets/backgrounds/thoughts.json"
console.log(options)
</script>
<style lang="scss" scoped>
</style>