<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex tenetur,
      obcaecati, quas dolorem culpa quo deleniti quidem porro asperiores esse
      rerum illum est distinctio neque tempore molestiae atque. Dolore?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
