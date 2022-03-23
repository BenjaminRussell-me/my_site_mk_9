<template>
<div id="card_holder">
    <slot></slot>
</div>
</template>

<style lang="scss" scoped>
    #card_holder {
        display: flex;
        gap: $gap;
        flex-wrap: wrap;
        justify-content: space-around;
        align-self: center;
    }
</style>