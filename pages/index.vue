<script setup lang="ts">
import {useCounterStore} from "~/stores/myStore";
const store = useCounterStore();
console.log(store);
</script>

<template>
  <div class='main'>

  </div>
  <calculate/>
</template>

<style scoped>

</style>