<template>
  <div>
    <DefaultNavBar> </DefaultNavBar>

    <div class="container mx-auto p-4">
      <slot />
    </div>
    <div class="footer bg-footer">
      <div class="container mx-auto p-4">
        © Copyright {{ new Date().getFullYear() }}. Made by Giovanni Oda <span>Ver. 1.0.0</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed } from 'vue';
  import { useMainStore } from '~/stores/main';

  // consts
  const mainStore = useMainStore();

  // data

  // Computed
  const themeMode = computed(() => {
    return mainStore.getTheme;
  });

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

<style scoped>
  .footer {
    min-height: 400px;
  }
</style>
