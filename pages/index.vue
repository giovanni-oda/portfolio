<template>
  <div>
    <h2 class="text-2xl font-bold">Home</h2>
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
    <h1>Loading: {{ mainStore.loading }}</h1>
  </div>
</template>

<script setup>
  // Server Side
  import { useMainStore } from '~/stores/main';

  const mainStore = useMainStore();

  // Client Side
  onMounted(async () => {
    const { firestore } = useFirebase();

    console.log('firestore', firestore);
    // const docRef = doc(firestore, `animals`, 'dog');
    // onSnapshot(docRef, (snap) => {
    //   data.value = snap.data();
    // });
  });
</script>

<style scoped></style>
