<template>
  <header
    class="sticky top-0 z-30 shadow-sm bg-surface"
    style="position: sticky !important">
    <nav class="flex container mx-auto p-4 justify-between">
      <div class="avatar flex items-center">
        <span
          class="material-icons mr-3 lg:hidden cursor-pointer transform ease-in-out duration-500"
          :class="{ 'rotate-180': showDrawer }"
          @click="showDrawer = !showDrawer">
          {{ showDrawer ? 'close' : 'menu' }}
        </span>
        <NuxtLink
          to="/"
          class="font-semibold">
          <img
            class="w-10 h-10 rounded-full"
            src="/imgs/giovanni-oda.jpg"
            alt="Giovanni Oda's avatar" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="font-semibold">
          <span class="ml-4 text-xl hover:text-primary duration-150">
            {{ '< ' }}Giovanni<span class="font-bold">Oda</span>{{ ' />' }}
          </span>
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <ul class="hidden lg:flex gap-5 uppercase">
          <li class="hover:text-primary duration-150">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="hover:text-primary duration-150">
            <NuxtLink to="#about-section">About</NuxtLink>
          </li>
          <li class="hover:text-primary duration-150">
            <NuxtLink to="#projects-section">Projects</NuxtLink>
          </li>
          <li class="hover:text-primary duration-150">
            <NuxtLink to="#contact-section">Contact</NuxtLink>
          </li>
        </ul>
        <button
          v-if="themeMode"
          class="ml-5"
          @click="toggleTheme()">
          <svg
            v-if="themeMode === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-50"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
  <!-- class="fixed top-0 bg-secondary h-full w-72 overflow-auto duration-200 z-20 pt-20 px-8" -->
  <aside
    class="fixed top-0 bg-secondary h-full w-72 overflow-auto duration-200 z-20 pt-20 px-8 transform ease-in-out transition-all"
    :class="{ '-left-0': showDrawer, '-left-72': !showDrawer }">
    <p class="mb-4 mt-4">Menu</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </aside>
  <div
    v-if="showDrawer"
    class="fixed top-0 w-screen h-screen z-10 bg-black bg-blend-multiply duration-200"
    :class="{ hidden: !showDrawer, 'opacity-60': showDrawer }"
    @click="showDrawer = false"></div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useMainStore } from '~/stores/main';

  // Consts
  const mainStore = useMainStore();
  const router = useRouter();

  // state
  const showDrawer = ref(false);

  // Computed
  const themeMode = computed(() => {
    return mainStore.getTheme;
  });

  // Methods
  function toggleTheme() {
    mainStore.theme = mainStore.getTheme === 'dark' ? 'light' : 'dark';
  }

  function goTo(routeStr) {
    router.push(routeStr);
  }
</script>

<style scoped>
  /* .router-link-exact-active {
    color: var(--primary) !important;
  } */
</style>
