<template>
<div id="home">
    <div id="home_grid">
        <div class="half">
            <div id="words">
                <div id="words_wrapper">
                <h1>Welcome!</h1>
                <!--<h2>Links: Links Here</h2>-->
                </div>
            </div>
            <div id="me_arrow">
            <div id="me">
            <div class="shadow"></div>
            <img :src="res?.img" alt="profile of me">
            </div>
            <img id="point" src="../assets/imgs/arrow.svg">
            </div>
        </div>
        <div class="line"></div>
        <div>
            <h1>About Me</h1>
            <Markdown :source="res?.About?.content[0]"></Markdown>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import Stage from '~/components/Stage.vue'
import {computed} from 'vue'
import Markdown from 'vue3-markdown-it';
const props = defineProps({
    data: Object
})

const res = computed(()=>{
    return props.data?.findResumeByID
})
</script>

<style lang="scss" scoped>
    #home {
        #home_grid{
        display: grid;
        grid-template-rows: 1fr auto auto;
        gap: $gap;
        }
        .half{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
                @media(max-width: 460px){
                    justify-content: space-around;
                }
        }
        #words{
            display: grid;
            #words_wrapper{
                place-self: center;
            }
            h1 {
                font-size: clamp(1rem, 5vw, 5rem);
                @media(max-width: 460px){
                  font-size: clamp(2rem, 13vw, 2.4rem);
                }
            }
            h1,h2{
                margin: 0;
            }
        }
        .line{
            width: 95%;
            height: 6px;
            background: $darkColor;
            place-self: center;
        }
        #me_arrow{
            display: grid;
            #point{
                width: clamp(60px, 6vw, 100px);
                grid-area: 1/1/1/1;
                z-index: 5;
                justify-self: end;
                justify-self: start;
                align-self: end;
                object-fit: cover;
                @media(max-width: 460px){
                    margin-bottom: 0;
                    transform: translateX(0px) translateY(15px);
                }
            }
        }
        #me{
            grid-area: 1/1/1/1;
            display: grid;
            place-items: center;
            box-sizing: border-box;
            .shadow{
            grid-area: 1/1/1/1;
                width: clamp(210px, 20vw, 310px); 
                height: clamp(200px, 20vw, 300px); 
             clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
             background: linear-gradient(to right, $gradient1, $gradient2,$gradient3,$gradient4);
             box-sizing: border-box;
            }
            img{
                box-sizing: border-box;
                grid-area: 1/1/1/1;
                width: clamp(200px, 20vw, 300px); 
                height: clamp(200px, 20vw, 300px); 
                clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
            }

        }
    }
</style>
