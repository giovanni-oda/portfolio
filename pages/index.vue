<template>
  <div class="home-page">
    <div class="hero">Home Hero</div>
    <div class="footer">
      © Copyright {{ new Date().getFullYear() }}. Made by Giovanni Oda <span>Ver. 1.0.0</span>
    </div>
    <!-- <h1>Loading: {{ mainStore.loading }}</h1> -->
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
