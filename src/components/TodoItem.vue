<template>
    <li :class="{ completed: item.completed }">
        <span>{{ item.item }}</span>
        <button @click="$emit('changeCompleted', item.id)">
            {{ btnText }}
        </button>
    </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ["item"],
    computed: {
      btnText() {
        if (this.item.completed === true) {
          return "Mark Incomplete";
        } else {
          return "Mark Completed";
        }
      }
    }
  };
</script>

<style scoped>
    li {
        list-style: none;
        padding: 30px 20px;
        background: green;
        color: white;
        display: flex;
        align-items: center;
    }

    li:not(:last-child) {
        border-bottom: darkseagreen 1px solid;
    }

    li button {
        border: none;
        padding: 10px;
        margin-left: auto;
    }

    .completed {
        background: darkseagreen;
        order: 2;
    }

    .completed span {
        text-decoration: line-through;
    }
</style>
