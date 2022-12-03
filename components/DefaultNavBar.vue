<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink
        to="/"
        class="font-bold">
        <div class="avatar">
          <img
            src=""
            alt="" />
        </div>
        Giovanni Oda's Portfolio
      </NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li>
          <NuxtLink
            to="/products"
            class="btn">
            Products
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  //
</script>

<style>
  .avatar {
    /* // */
  }
</style>
