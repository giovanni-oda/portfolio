<template>
  <div>
    <h2 class="text-2xl font-bold">About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione libero quidem placeat,
      consequatur officia iure vel eaque. Voluptates hic neque sapiente facilis corrupti adipisci
      maiores ex repudiandae, facere, dolores voluptas.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione libero quidem placeat,
      consequatur officia iure vel eaque. Voluptates hic neque sapiente facilis corrupti adipisci
      maiores ex repudiandae, facere, dolores voluptas.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {
  //     age: 30
  //   }
  // });
  const { data } = await useFetch('/api/currency/GBP');
</script>

<style scoped></style>
