<template>
  <div class="details-page">
    <!-- <div
      class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out"
      :class="{ 'light-hero': themeMode === 'light', 'dark-hero': themeMode === 'dark' }"> -->
    <div class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <h1
          class="uppercase text-7xl mb-6 font-semibold text-center text-primary"
          :class="{ 'mix-blend-screen': darkMode }">
          ; (
        </h1>
        <h1
          class="uppercase text-5xl mb-6 font-semibold text-center text-primary"
          :class="{ 'mix-blend-screen': darkMode }">
          MORE PROJECTS
        </h1>

        <p class="text-center text-xl max-w-[650px]">
          Coming soon, work in progress. Thank you for understanding.
        </p>
        <div class="self-center mt-10 mb-20">
          <NuxtLink
            to="/"
            class="btn px-12 pt-4">
            <span class="text-xl">Back to Home</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Server Side
  import { useMainStore } from '~/stores/main';

  // built in composables functions
  definePageMeta({
    layout: 'details'
  });

  useHead({
    title: "Giovanni Oda's Portfolio | More Projects",
    meta: [
      { name: 'description', content: "Giovanni Oda's portfolio Cimtia Ads project Case Study" }
    ]
  });

  // consts
  const mainStore = useMainStore();

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
</script>

<style scoped>
  .light-hero {
    background-image: url('/imgs/projects/Bg_details_light.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .dark-hero {
    background-image: url('/imgs/projects/Bg_details_dark.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mousey {
    width: 2px;
    padding: 4px 10px;
    height: 35px;
    border: 1px solid var(--text);
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 2px;
    height: 10px;
    border-radius: 25%;
    background-color: var(--text);
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
</style>
