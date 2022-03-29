<template>
    <section id="resume">
        <button id="resume_print" v-print="print_object">print</button>
        <div v-if="$route.name == 'Resume'" id="resume_content">
            <div id="resume_header">
                <div id="header_content">
                    <h1>{{res?.name}}</h1>
                    <h3>{{res?.job}}</h3>
                    <p>E-mail: <a :href="'mailto:'+res?.contact.email">{{res?.contact.email}}</a></p>
                    <p>Portfolio: <a :href="res?.contact.website">{{res?.contact.website}}</a></p>
                </div>
                <img id="resume_img" :src="res?.img"/>
            </div>
            <div id="resume_main">
                <div id="resume_experiance">
                <h3>{{res?.experience?.discription}}</h3>
                <Markdown :source="res?.experience?.content[0]"></Markdown>
                </div>
                <div class="resume_line"></div>
                <div id="resume_side_bar">
                    <div id="resume_skills">

                        <h5>{{res?.skills?.discription}}</h5>
                        <Markdown :source="res?.skills?.content[0]"></Markdown>
                    </div>
                    <div id="resume_education">

                        <h5>{{res?.Education?.discription}}</h5>
                        <Markdown :source="res?.Education?.content[0]"></Markdown>
                    </div>
                </div>
                <div id="resume_about">

                    <h3>{{res?.About?.discription}}</h3>
                    <Markdown :source="res?.About?.content[0]"></Markdown>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {defineProps, computed, toRefs} from 'vue'
import Markdown from 'vue3-markdown-it';

      let stylesHtml = ''
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML
      }

const print_object = {
    id: "resume_content",
    extraHead: `
    ${stylesHtml}
    `

}

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
    width: 100%;
    overflow: auto;
    padding: 2rem 0 0 0;
    color: var(--darkColor);
    #resume_print{
        position: fixed;
        justify-self: center;
        align-self: start;
        z-index: 9999;
        padding: 0.5rem 2rem;
        background: $darkColor;
        color: $lightColor;
        border: none;
        box-shadow: $shadow;
        cursor: pointer;
    }
}
    #resume_content { 
    -webkit-print-color-adjust: exact;
    justify-self: center;
    width: 100%;
    aspect-ratio: 8.5/11;
    width: 8.5in;
    height: 11in;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    box-sizing: border-box;
    #resume_header {
        background: var(--darkColor);
        grid-area: 1/5/1/1;
        display: grid;
        padding:var(--gap);
        box-sizing: border-box;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: var(--gap);
        color: var(--lightColor);
        box-sizing: border-box;
        #header_content{
            box-sizing: border-box;
            grid-area: 1/4/1/1;
            box-sizing: border-box;
        }
        a {
            color: var(--gradient1);
        }
        #resume_img {
            width: 100%;
            aspect-ratio: 1/1;
            place-self: center;
            object-fit: cover;
        }
    }
    #resume_main {
        grid-area: 2/1/5/5;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: var(--gap);
        gap: var(--gap);
        background: white;
        grid-template-rows: 2fr auto 1fr;
        display: grid;
        box-sizing: border-box;
        #resume_experiance{
            grid-area: 1/4/1/1;
        box-sizing: border-box;
        }
        #resume_side_bar{
            background: var(--darkColor);
            color: var(--lightColor);
            padding: 10px;
            grid-area: 1/4/4/4;
        box-sizing: border-box;
        }
        .resume_line{
            width: 100%;
            height: 3px;
            background: var(--darkColor);
            grid-column: span 3;
        }
        #resume_about {
            grid-area: 3/1/3/4;
        box-sizing: border-box;
        }
    }
    }
</style>

<style lang="scss">
#resume_content {
    p,li,a {
        font-size: 16px;
        margin: 8px 0;
    }
    h6 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
    }
    h5 {
        font-size:  24px;
        font-weight: bold;
        margin: 0;
    }

    h4 {
        font-size: 30px;
        font-weight: bold;
        margin: 0;
    }

    h3 {
        font-size: 36px;
        font-weight: bold;
        margin: 0;
    }
    h2 {
       font-size:  48px;
        font-weight: bold;
        margin: 0;
    }
    h1 {
        font-size: 60px;
        font-weight: bold;
        margin: 0;
    }
    ul {
        padding-inline-start: 17px;
    }
}
</style>