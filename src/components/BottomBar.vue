<template>
<div id="bottom">
    <div class="wrapper">
        <slot></slot>
    </div>
</div>
</template>

<style lang="scss" scoped>
    #bottom {
        width: 100%;
        display: grid;
        position: fixed;
        bottom: 0px;
        height: $header_height;
        z-index: 9999;
        .wrapper {
            justify-self: center;
            align-self: center;
            display: flex;
            width: $parent_width;
            justify-content: space-between;
            flex-wrap: wrap;
            background: $darkColor;
            box-shadow: $shadow;
            height: 100%;
            width: clamp(300px, 50%, 500px);
            display: flex;
            place-content: center;
            border-radius: $corners;
        }
    }
</style>
<style lang="scss">
    #links {
        display: flex;
        gap: $gap;
        a {
            color: $lightColor;
            text-decoration: none;
            background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
            background-attachment: fixed;
            font-weight: bold;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .off{
            color: rgba($lightColor, 0.5);
            background: none;
            -webkit-background-clip: initial;
            -webkit-text-fill-color: initial;
        }
    }
</style>