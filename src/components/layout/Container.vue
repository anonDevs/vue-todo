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
        max-width: calc(1200px + 2rem);
        margin: 0 auto;
        padding: 0 2rem;
    }
</style>
