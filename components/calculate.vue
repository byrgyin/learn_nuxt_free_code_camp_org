<script setup lang="ts">
const counter = useCounter('counter');
</script>

<template>
  <div class='calculator'>
    {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<style scoped>

</style>