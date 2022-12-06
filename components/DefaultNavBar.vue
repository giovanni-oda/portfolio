<template>
  <!-- // NavBar -->
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
          to="https://giovannioda.dev"
          class="font-semibold">
          <img
            class="w-10 h-10 rounded-full"
            src="/imgs/giovanni-oda.jpg"
            alt="Giovanni Oda's avatar" />
        </NuxtLink>
        <NuxtLink
          to="https://giovannioda.dev"
          class="font-semibold">
          <span class="ml-4 font-smibold text-3xl">GO</span>
          <!-- <span class="ml-2 text-xl hover:text-primary duration-150">
            {{ '< ' }}Giovanni<span class="font-bold">Oda</span>{{ ' />' }}
          </span> -->
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <ul class="hidden lg:flex gap-6 uppercase">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="hover:text-primary duration-150">
            <NuxtLink :to="item.routeStr">{{ item.title }}</NuxtLink>
          </li>
        </ul>
        <button
          v-if="themeMode"
          class="ml-5"
          @click="toggleTheme()">
          <svg
            v-if="themeMode === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
  <!-- // Drawer -->
  <aside
    class="fixed top-0 bg-footer text-themeText h-full w-72 overflow-auto duration-200 z-20 pt-20 px-6 transform ease-in-out transition-all"
    :class="{ '-left-0': showDrawer, '-left-72': !showDrawer }">
    <p class="mb-4 mt-4 uppercase text-secondary">Menu</p>
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-primary"
        @click="goTo(item.routeStr)">
        <span class="material-icons block float-left">
          {{ item.icon }}
        </span>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </aside>
  <!-- // Overlay -->
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
  const menuItems = [
    { title: 'Home', routeStr: '/', icon: 'home' },
    { title: 'About', routeStr: '#about-section', icon: 'face' },
    { title: 'Projects', routeStr: '#projects-section', icon: 'dashboard' },
    { title: 'Contact', routeStr: '#contact-section', icon: 'mail' }
  ];

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
    showDrawer.value = false;
  }
</script>

<style scoped>
  /* .router-link-exact-active {
    color: var(--primary) !important;
  } */
</style>
