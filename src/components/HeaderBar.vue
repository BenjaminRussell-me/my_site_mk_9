<template>
<div id="header">
    <div class="wrapper">
        <slot></slot>
    </div>
</div>
</template>

<style lang="scss" scoped>
    #header {
        width: 100%;
        height: $header_height;
        background: $darkColor;
        box-shadow: $shadow;
        display: grid;
        position: fixed;
        z-index: 9999;
        .wrapper {
            justify-self: center;
            align-self: center;
            display: flex;
            width: $parent_width;
            justify-content: space-between;
            flex-wrap: wrap;
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
    }
</style>