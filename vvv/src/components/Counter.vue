<!-- src/components/Counter.vue -->
<template>
    <div>
        <p>Counter: {{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number | string>(0);

function increment() {
    count.value += 1;
}
</script>

<style scoped>
button {
    background-color: #42b983;
    color: white;
}
</style>
