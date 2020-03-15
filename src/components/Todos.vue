<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
  export default {
    name: "Todos"
  };
</script>

<style scoped>
    ul {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
</style>
