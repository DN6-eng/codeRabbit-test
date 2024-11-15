import { ref } from "vue";

export function useCounter() {
  const count = ref(0 as any);
  const increment = () => count.value++;

  return { count, increment };
}
