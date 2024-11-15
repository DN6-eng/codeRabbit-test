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

props.description = true;

import { ref } from 'vue'; 
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
