<template>
  <div class="card">
    <img src="/images/icons8-fairytale-96.png" alt="product thumb" class="thumbnail" />
    <p class="font-bold text-gray-500 m-4 truncate"></p>
    <NuxtLink :to="`/products/${props.product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
.thumbnail {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
