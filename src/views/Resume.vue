<template>
    <section id="resume">
        <div id="resume_print">prant</div>
        <div id="resume_content">
            <div id="resume_header">
                <div id="header_content">
                    <h1>{{res?.name}}</h1>
                    <h3>{{res?.job}}</h3>
                    <p>E-mail: <a :href="res?.contact.email">{{res?.contact.email}}</a></p>
                    <p>Portfolio: <a :href="res?.contact.website">{{res?.contact.website}}</a></p>
                </div>
                <img id="resume_img" :src="res?.img"/>
            </div>
            <div id="resume_main">
                <div id="resume_experiance">
                <h1>{{res?.experience?.discription}}</h1>
                <Markdown :source="res?.experience?.content[0]"></Markdown>
                </div>
                <div class="resume_line"></div>
                <div id="resume_about">

                    <h1>{{res?.About?.discription}}</h1>
                    <Markdown :source="res?.About?.content[0]"></Markdown>
                </div>
                <div id="resume_side_bar">
                    <div id="resume_skills">

                        <h1>{{res?.skills?.discription}}</h1>
                        <Markdown :source="res?.skills?.content[0]"></Markdown>
                    </div>
                    <div id="resume_education">

                        <h1>{{res?.Education?.discription}}</h1>
                        <Markdown :source="res?.Education?.content[0]"></Markdown>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {defineProps, computed, toRefs} from 'vue'
import Markdown from 'vue3-markdown-it';
const props = defineProps({
    data: Object
})

let res = computed(()=> {
    return props.data?.findResumeByID
})
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
    justify-self: center;
    width: 100%;
    aspect-ratio: 8.5/11;
    max-width: 8.5in;
    margin-top: $gap*2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    #resume_header {
        background: $darkColor;
        grid-area: 1/5/1/1;
        display: grid;
        padding:$gap;
        box-sizing: border-box;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: $gap;
        color: $lightColor;
        #header_content{
            box-sizing: border-box;
            grid-area: 1/4/1/1;
        }
        #resume_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    #resume_main {
        grid-area: 2/1/5/5;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: $gap;
        gap: $gap;
        background: white;
        grid-template-rows: 2fr auto 1fr;
        display: grid;
        box-sizing: border-box;
        #resume_experiance{
            grid-area: 1/4/1/1;
        box-sizing: border-box;
        }
        #resume_side_bar{
            background: $darkColor;
            color: $lightColor;
            padding: 5px;
            grid-area: 1/4/4/4;
        box-sizing: border-box;
        }
        .resume_line{
            width: 100%;
            height: 3px;
            background: $darkColor;
            grid-column: span 3;
        }
        #resume_about {
            grid-area: 3/1/3/4;
        box-sizing: border-box;
        }
    }
    }
}
</style>

<style lang="scss">
#resume_content {
    ul {
        padding-inline-start: 17px;
    }
}
</style>