<template>
    <section id="resume">
        <div id="resume_print">prant</div>
        <div id="resume_content"></div>
    </section>
</template>

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