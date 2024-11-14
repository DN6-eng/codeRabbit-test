// src/composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
  const count = ref(0 as any); // Mistake 5: Use of `any` instead of number type ❌
  const increment = () => count.value++;

  return { count, increment };
}
