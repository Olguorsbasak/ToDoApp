<script>
import Todo from './components/Todo.vue'
export default {
  name: 'App',
  components: {
    Todo
  },

}
</script>

<template>
  <div>
    <Todo />
    <Toast />
  </div>
</template>

<style scoped></style>