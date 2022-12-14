<template>
  <div class="details-page">
    <!-- <div
      class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out"
      :class="{ 'light-hero': themeMode === 'light', 'dark-hero': themeMode === 'dark' }"> -->
    <div class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <img
          class="max-w-[300px] mb-8"
          :src="
            darkMode
              ? '/imgs/projects/cimtia/cimtia-ads-logo-neg-hor.svg'
              : '/imgs/projects/cimtia/cimtia-ads-logo-pos-hor.svg'
          "
          alt="Cimtia Ads Project Logo" />
        <!-- <h1
          class="uppercase text-5xl mb-6 font-semibold text-center text-primary"
          :class="{ 'mix-blend-screen': darkMode }">
          Cimtia Ads
        </h1> -->
        <p class="text-center text-xl max-w-[650px]">
          A online marketplace platform for the sale of traditional (offline) Tv and Radio media
          ads, which connects small advertisers to large channels and communication vehicles.
        </p>
        <div class="self-center mt-10">
          <a
            href="#see-more"
            class="btn px-12 pt-4">
            <span class="text-xl">Visite Project Site</span>
          </a>
        </div>
      </div>
    </div>
    <div :class="{ 'bg-[rgba(0,0,0,0.025)]': !darkMode, 'bg-[rgba(0,0,0,0.075)]': darkMode }">
      <section class="container mx-auto py-20 px-6 max-w-[1200px]">
        <div class="glide">
          <div
            class="glide__track"
            data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <div class="flex justify-center min-h-[600px] w-full">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/43RDhRCYa_I"
                    title="Cimtia Ads project review video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </li>
              <li class="glide__slide my-auto">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot1_mobile.jpg')] md:bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot1.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot2_mobile.jpg')] md:bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot2.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot3_mobile.jpg')] md:bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot3.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot4_mobile.jpg')] md:bg-[url('/imgs/projects/cimtia/Cimtia_Screenshot4.jpg')]"></div>
              </li>
            </ul>
          </div>
          <div
            class="glide__arrows"
            data-glide-el="controls">
            <button
              class="glide__arrow glide__arrow--left"
              data-glide-dir="<">
              <span class="material-icons text-themeText"> chevron_left </span>
            </button>
            <button
              class="glide__arrow glide__arrow--right"
              data-glide-dir=">">
              <span class="material-icons text-themeText"> chevron_right </span>
            </button>
          </div>
          <div
            class="glide__bullets"
            data-glide-el="controls[nav]">
            <button
              class="glide__bullet"
              data-glide-dir="=0"></button>
            <button
              class="glide__bullet"
              data-glide-dir="=1"></button>
            <button
              class="glide__bullet"
              data-glide-dir="=2"></button>
            <button
              class="glide__bullet"
              data-glide-dir="=3"></button>
            <button
              class="glide__bullet"
              data-glide-dir="=4"></button>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section class="min-h-[800px] max-w-[900px] container mx-auto p-4 text-xl">
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Role</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat minima eveniet
            maxime vitae labore mollitia, perspiciatis explicabo ratione neque numquam ipsum
            reprehenderit, nesciunt ex consequatur corporis, culpa fuga tempora!
          </p>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Project Overview</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut sint labore nesciunt
            aspernatur soluta quod dolore possimus repellat aut totam nisi a quos corporis quisquam
            ducimus et amet vitae aperiam, nostrum modi, consequuntur fugit maiores! Perferendis
            consequatur quae eveniet voluptatibus necessitatibus delectus nemo molestias ut
            similique architecto! Officia, obcaecati rem in, suscipit itaque, enim qui ad rerum
            error iste non accusantium adipisci? Repellat dicta est aperiam quasi id velit cum
            assumenda, amet delectus suscipit! Nesciunt, sunt ratione quae repellat fugiat deleniti
            consectetur asperiores iure odit reiciendis adipisci esse, nemo delectus obcaecati
            quibusdam? Incidunt veritatis corporis rem? Id, ut aliquam?
          </p>
          <p class="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut sint labore nesciunt
            aspernatur soluta quod dolore possimus repellat aut totam nisi a quos corporis quisquam
            ducimus et amet vitae aperiam, nostrum modi, consequuntur fugit maiores! Perferendis
            consequatur quae eveniet voluptatibus necessitatibus delectus nemo molestias ut
            similique architecto! Officia, obcaecati rem in, suscipit itaque, enim qui ad rerum
            error iste non accusantium adipisci? Repellat dicta est aperiam quasi id velit cum
            assumenda, amet delectus suscipit! Nesciunt, sunt ratione quae repellat fugiat deleniti
            consectetur asperiores iure odit reiciendis adipisci esse, nemo delectus obcaecati
            quibusdam? Incidunt veritatis corporis rem? Id, ut aliquam?
          </p>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Tools Used</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <div class="mt-8 flex flex-wrap text-zinc-600 justify-start">
            <p class="chip">HTML</p>
            <p class="chip">CSS</p>
            <p class="chip">Javascript</p>
            <p class="chip">React</p>
            <p class="chip">Tailwind</p>
            <p class="chip">Firebase</p>
            <p class="chip">Firestore</p>
            <p class="chip">Firebase Auth</p>
            <p class="chip">Firebase Storage</p>
            <p class="chip">Cloud Functions</p>
            <div id="see-more"></div>
          </div>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">See More</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <div class="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://cimtiaads.com.br/"
              class="btn"
              target="_blank">
              Live Link
            </a>
            <a
              href="https://www.figma.com/proto/A2lYY95xY7u5hGZcgVLHxX/Redesign-Cimtia---Anunciante-DESKTOP?node-id=76%3A2246&starting-point-node-id=76%3A2246&scaling=scale-down"
              class="btn"
              target="_blank">
              Figma Prototype
            </a>
            <button
              class="btn bg-footer text-surface"
              disabled>
              Git Repository (Private)
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  // Server Side
  import { useMainStore } from '~/stores/main';
  import Glide from '@glidejs/glide';

  // built in composables functions
  definePageMeta({
    layout: 'details'
  });

  useHead({
    title: "Giovanni Oda's Portfolio | Cimtia Ads Project",
    meta: [
      { name: 'description', content: "Giovanni Oda's portfolio Cimtia Ads project Case Study" }
    ]
  });

  // consts
  const mainStore = useMainStore();

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
  const themeMode = computed(() => mainStore.getTheme);

  // hooks (Client Side)
  onMounted(async () => {
    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      rewind: false
    }).mount();
  });
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
</style>
