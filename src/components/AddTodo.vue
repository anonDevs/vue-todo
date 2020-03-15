<template>
    <div class="search">
        <form @submit.prevent="addTodo">
            <input type="text" v-model="item" id="item"/>
            <input type="submit" value="Add"/>
        </form>
    </div>
</template>

<script>
  import {v4 as uuid} from "uuid";

  export default {
    name: "AddTodo",
    data() {
      return {
        item: ""
      };
    },
    methods: {
      addTodo() {
        this.$emit("addTodo", {
          item: this.item,
          completed: false,
          id: uuid()
        });
        this.item = "";
      }
    }
  };
</script>

<style scoped>
    .search form {
        display: flex;
    }

    .search input:first-child {
        flex: 10;
    }

    .search input:last-child {
        flex: 2;
    }

    .search input {
        padding: 10px;
        font-size: 20px;
    }

    input[type="submit"] {
        border: none;
        background: darkgrey;
        color: white;
    }
</style>
