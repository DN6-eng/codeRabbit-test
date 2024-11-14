<!-- src/components/Counter.vue -->
<template>
    <div>
        <p>Counter: {{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number | string>(0); // Mistake 3: Overly broad type, mixing number and string ❌

function increment() {
    count.value += 1; // Mistake 4: Type mismatch, count could be a string ❌
}
</script>

<style scoped>
button {
    background-color: #42b983;
    color: white;
}
</style>
