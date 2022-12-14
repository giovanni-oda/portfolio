<template>
  <div
    class="main-div duration-300 ease-in-out"
    :class="{ 'blur-sm': isBlur }">
    <DetailsNavBar> </DetailsNavBar>

    <div>
      <slot />
    </div>

    <DefaultFooter></DefaultFooter>
  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useMainStore } from '~/stores/main';

  // consts
  const mainStore = useMainStore();

  // Computed
  const themeMode = computed(() => mainStore.getTheme);
  const isBlur = computed(() => mainStore.getPageBlur);

  // whatchers
  watch(themeMode, (val) => {
    if (val) setThemeMode(themeMode.value);
  });

  // Methods
  function setThemeMode(mode) {
    localStorage.setItem('theme', mode);
    mainStore.theme = mode;
    document.body.classList.remove(mode === 'dark' ? 'theme-light' : 'theme-dark');
    document.body.classList.add(mode === 'dark' ? 'theme-dark' : 'theme-light');
  }

  // Hooks
  onMounted(() => {
    const isDarkPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefTheme = localStorage.getItem('theme');

    if (userPrefTheme) {
      setThemeMode(userPrefTheme);
    } else {
      setThemeMode(isDarkPref ? 'dark' : 'light');
    }
  });
</script>

<style>
  @import url('/node_modules/@glidejs/glide/dist/css/glide.core.min.css');
  @import url('/node_modules/@glidejs/glide/dist/css/glide.theme.min.css');

  .glide__bullets {
    bottom: -2em;
  }
  .glide__arrow--right {
    right: 1em;
  }
  .glide__arrow--left {
    left: 1em;
  }
  .glide__arrow {
    padding: 2px 3px;
    bottom: -4em;
    border: 1px solid rgba(var(--text-rgb), 0.5);
    border-radius: 50%;
    top: auto;
  }
  .glide__arrow:hover {
    border: 1px solid rgba(var(--text-rgb), 0.75);
  }
  .slider-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .glide__bullet {
    background-color: rgba(var(--text-rgb), 0.75);
  }
  .glide__bullet--active {
    background-color: rgba(var(--text-rgb), 0.25);
  }
  .glide__bullet:hover,
  .glide__bullet:focus {
    border: 1px solid var(--text);
    background-color: rgba(var(--text-rgb), 0.5);
  }
</style>
