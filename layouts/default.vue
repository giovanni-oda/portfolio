<template>
  <div>
    <DefaultNavBar> </DefaultNavBar>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
