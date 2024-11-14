<!-- src/components/HelloWorld.vue -->
<template>
  <h1>{{ msg }}</h1>
  <p>{{ description }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  msg: string;
  description?: string;
}

const props = defineProps<Props>();

// Mistake 1: Incorrect default prop value type (should be string, not boolean)
props.description = true; // ❌ Incorrect

// Mistake 2: Unused import
import { ref } from 'vue'; // ❌ Unused import
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
