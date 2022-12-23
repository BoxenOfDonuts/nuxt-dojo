<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="mx-auto container p-4 flex justify-between">
        <NuxtLink class="font-bold" to="/">Nuxt Dojo</NuxtLink>
        <ul class="gap-4 flex">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn" to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="mx-auto container p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
