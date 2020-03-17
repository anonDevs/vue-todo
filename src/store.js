import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //STATE
  state: {
    todos: [
      {
        id: 1,
        item: "Add Vuex to todo app",
        completed: false
      }
    ]
  },
  //--STATE
  //GETTERS
  getters: {
    //Function to get todos
    allTodos(state) {
      return state.todos;
    }
  },
  //--GETTERS
  //MUTATIONS
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    changeCompleted(state, payload) {
      state.todos = state.todos.map(item => {
        if (item.id === payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    }
  },
  //--MUTATIONS
  //ACTIONS
  actions: {
    addTodo({commit}, todo) {
      commit("addTodo", todo);
    },
    changeCompleted({commit}, id) {
      commit("changeCompleted", id);
    }
  }
  //--ACTIONS
});
