<!-- src/App.vue -->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to CodeRabbit Vue App" />
    <Counter />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
