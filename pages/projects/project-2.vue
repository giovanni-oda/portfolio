<template>
  <div>
    <h1>This is project 2 page</h1>
  </div>
</template>

<script setup>
  // built in composables functions
  definePageMeta({
    layout: 'details'
  });

  useHead({
    title: "Giovanni Oda's Portfolio | Project 2",
    meta: [{ name: 'description', content: "Giovanni Oda's portfolio project 2 Case Study" }]
  });
</script>

<style scoped></style>
