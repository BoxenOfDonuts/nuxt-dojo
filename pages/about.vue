<template>
  <div>
    <h2 class="mb-5 text-3xl">About</h2>
    <p>{{ data.data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped>
P {
  margin: 20px 0;
}
</style>
