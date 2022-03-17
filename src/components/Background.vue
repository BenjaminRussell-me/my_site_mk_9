<template>
<div id="background">
<slot></slot>
</div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
#background {
    height: 100vh - $header_height;
    padding: $gap;
}
</style>