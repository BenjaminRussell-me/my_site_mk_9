<template>
<div class="tag_bubble">
    <slot></slot>
</div>
</template>

<style lang="scss" scoped>
    .tag_bubble {
        background: linear-gradient(to right, $gradient1, $gradient2, $gradient3, $gradient4);
        border-radius: 360px;
        padding: 0 10px;
    }
</style>