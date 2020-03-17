<template>
    <transition name="slide">
        <div class="main">
            <AddTodo @addTodo="addTodo"/>
            <Todos/>
        </div>
    </transition>
</template>

<script>
  import AddTodo from "./AddTodo";
  import Todos from "./Todos";

  import {mapActions} from "vuex";

  export default {
    name: "Main",
    components: {
      AddTodo,
      Todos
    },
    methods: {
      ...mapActions(["addTodo"])
    }
  };
</script>

<style scoped>
    h1 {
        margin-top: 30px;
    }

    .main {
        margin-top: 30px;
    }
</style>
