<script setup lang="ts">
const { data: products, pending } = await useLazyFetch('/api/products');
</script>

<template>
  <div class='main'>
    <h1>I bottom loading</h1>
    <div>
    <h3>{{ pending ? "Loading" : products }}</h3>
    </div>
  </div>
  <calculate/>
</template>

<style scoped>

</style>