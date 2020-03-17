<template>
    <ul>
        <TodoItem
                v-for="todo in allTodos"
                :key="todo.id"
                :item="todo"
                @changeCompleted="changeCompleted"
        />
    </ul>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import TodoItem from "./TodoItem";

  export default {
    name: "Todos",
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters(["allTodos"])
    },
    methods: {
      ...mapActions(["changeCompleted"])
    }
  };
</script>

<style scoped>
    ul {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
</style>
