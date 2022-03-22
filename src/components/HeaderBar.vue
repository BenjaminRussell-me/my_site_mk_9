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
            width: 80%;
            justify-self: center;
            align-self: center;
        }
    }
</style>