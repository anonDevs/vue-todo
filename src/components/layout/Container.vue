<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Container"
  };
</script>

<style scoped>
    div {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
