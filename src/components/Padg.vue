<template>
<div id="padg">
    <button @click="$emit('backward')">backward</button>
    <button @click="$emit('forward')">forward</button>
</div>
</template>

<style lang="scss" scoped>
   #padg {
         grid-area: 1/1/1/1;
         z-index: 9999;
         background: red;
         justify-self: center;
         align-self: end;
         margin: $gap;
         position: static;
   } 
</style>