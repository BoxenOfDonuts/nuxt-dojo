<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard class="card" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products, error } = await useFetch(
  "https://fakestoreapi.com/products",
  {
    query: { limit: 15 },
  }
);

if (error.value) {
  throw createError({
    statusCode: 418,
    statusMessage: "Something Went Wrong",
    fatal: true,
  });
}

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped></style>
