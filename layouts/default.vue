<template>
  <div
    class="main-div duration-300 ease-in-out"
    :class="{ 'blur-sm': isBlur }">
    <DefaultNavBar> </DefaultNavBar>

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
