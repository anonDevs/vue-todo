<template>
    <div>
        <h1>Vue.js Todo App</h1>
        <div class="main">
            <AddTodo @addTodo="saveTodo"/>
            <Todos>
                <TodoItem
                        v-for="todo in todos"
                        :key="todo.id"
                        :item="todo"
                        @changeCompleted="changeCompleted"
                />
            </Todos>
        </div>
    </div>
</template>

<script>
  import AddTodo from "./AddTodo";
  import Todos from "./Todos";
  import TodoItem from "./TodoItem";

  export default {
    name: "Main",
    components: {
      AddTodo,
      Todos,
      TodoItem
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            item: "Code something",
            completed: false
          },
          {
            id: 2,
            item: "Go to meeting",
            completed: true
          },
          {
            id: 3,
            item: "Sleep",
            completed: false
          }
        ]
      };
    },
    methods: {
      saveTodo(item) {
        this.todos = [...this.todos, item];
      },
      changeCompleted(id) {
        this.todos = this.todos.map(item => {
          if (item.id === id) item.completed = !item.completed;
          return item;
        });
      }
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
