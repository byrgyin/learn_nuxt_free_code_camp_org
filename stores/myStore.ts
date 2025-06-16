import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', ()=>{
const count = ref<number>(0);
const name = ref<string>('Sergey');
const doubleCount = computed(() => count.value * 2);
const increment = computed(() => count.value++);

return {
  count,
  name,
  doubleCount,
  increment,
}
});