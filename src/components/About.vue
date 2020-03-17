<template>
    <transition name="fade">
        <div>
            <h1>About</h1>
            <p>This is a todo app made with Vue JS for the practice and stuff.</p>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style scoped>
    div{
        margin-top: 30px;
    }
    h1{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>