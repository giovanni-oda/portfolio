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
        <div class="self-center mt-10 mb-20">
          <a
            href="#see-more"
            class="btn px-12 pt-4">
            <span class="text-xl">Visite Project Site</span>
          </a>
        </div>
        <div>
          <a
            href="#section-media"
            class="text-primary">
            MEDIAS
          </a>
          <span class="mx-1">|</span>
          <a
            href="#section-text"
            class="text-primary">
            ROLE
          </a>
          <span class="mx-1">|</span>
          <a
            href="#section-text-overview"
            class="text-primary">
            OVERVIEW
          </a>
          <span class="mx-1">|</span>
          <a
            href="#section-text-more"
            class="text-primary">
            MORE
          </a>
          <div class="max-w-[50px] h-[3px] rounded mx-auto bg-secondary mt-3"></div>
        </div>
      </div>
      <div class="mousey mx-auto mb-4 lg:hidden">
        <div class="scroller"></div>
      </div>
    </div>
    <div class="mousey mx-auto mb-4 hidden lg:flex">
      <div class="scroller"></div>
    </div>
    <div :class="{ 'bg-[rgba(0,0,0,0.025)]': !darkMode, 'bg-[rgba(0,0,0,0.075)]': darkMode }">
      <section
        id="section-media"
        class="container mx-auto py-20 px-6 max-w-[1200px]">
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
      <section
        id="section-text"
        class="min-h-[800px] max-w-[900px] container mx-auto p-4 text-xl">
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Role</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            I am an entrepreneur who started my own business. As founder of the startup I acted as
            CTO and back-end developer, responsible for the technology strategy, leading the
            development team, researching and evaluating new technologies, budgeting and managing
            the technology budget.
          </p>
          <p class="mt-6">
            As a backend developer, I created and implemented server-side logic, managed
            communication between the frontend and the database, created and managed APIs,
            implemented security features, and optimized application performance.
          </p>
          <p class="mt-6">
            In this project i worked with several languages and technologies like Firebase,
            Firestore, Cloud Functions, Node.js and integrated third-party APIs for payment methods,
            zip code verification and checking the validity of personal registration documents.
          </p>
          <!-- <p class="mt-8">
            Like every entrepreneur who starts his own business or startup, I had to play multiple
            roles in this project, including CTO and back-end developer, where I was responsible for
            the company's technology strategy, leading the development team and ensuring that the
            company adopt the most appropriate technologies for the project.
          </p>
          <p class="mt-8">
            As CTO, I was also responsible for assessing the company's technology needs and
            determining how they could be met more efficiently. This includes researching and
            evaluating new technologies and deciding which ones should be adopted by the company. I
            was also responsible for budgeting and managing the company's technology budget.
          </p>
          <p class="mt-8">
            As a back-end developer I was responsible for creating and implementing server-side
            logic and managing the communication between the front-end and the database (no-sql).
            Duties also included creating and managing APIs, implementing security features, and
            optimizing application performance.
          </p>
          <p class="mt-8">
            For the back-end of this project I used several languages and technologies, such as
            Firebase, Firestore, Cloud Functions, Node.js, among others. In the application's
            integrations with third-party APIs, I worked with payment methods services (Pagar.me -
            similar to Stripe), zip code verification (IBGE - Official demographic source of the
            government of Brazil) and checking the validity of personal registration documents ( RG
            and CPF – something similar to the Social Security Number).
          </p> -->
          <div id="section-text-overview"></div>
        </div>

        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Project Overview</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            Cimtia Ads is a Marketplace or online platform for buying offline media (traditional
            advertising spaces – such as radio and TV). Allowing small and medium-sized companies to
            have access to advertising on channels with a large audience on Radio and Open TV
            stations, either through its easy and intuitive interface or through the negotiated and
            reduced prices practiced exclusively within the App.
          </p>
          <p class="mt-6">
            This combination of practicality and affordable prices was the pillar that enabled the
            connection of thousands of small business with large radio and TV stations. According to
            data collected from the platform's customers, around 90% of the companies that
            advertised through the app had never advertised on TV before. This demonstrates an
            extreme assertiveness with the target audience and confirms an increase in billing by
            the broadcasters, despite the lower profit margin practiced on the channel.
          </p>
          <p class="mt-6">
            In the application, the user can manually choose the communication vehicles he wants to
            advertise and the preferred channels to air the commercial, or even take advantage of
            the ease of use of the artificial intelligence of Cimtia Ads, which is capable of
            creating a selection or mapping of the best channels and programs that match the
            advertising customer's buying public.
          </p>
          <p class="mt-8">
            <span class="font-semibold">Technical specifications:</span> Web application, SPA, with
            PWA capability (synchronization with the database when offline, push notifications,
            installation of home icon etc.)
          </p>
          <div id="section-text-more"></div>
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
  import { logEvent } from 'firebase/analytics';

  // built in composables functions
  definePageMeta({
    layout: 'details'
  });

  useHead({
    title: "Giovanni Oda's Portfolio | Project | Cimtia Ads",
    meta: [
      { name: 'description', content: "Giovanni Oda's portfolio Cimtia Ads project Case Study" }
    ]
  });

  // consts
  const mainStore = useMainStore();
  const route = useRoute();

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
  const themeMode = computed(() => mainStore.getTheme);

  // client side Hook
  onMounted(async () => {
    const { analytics } = await useFirebase();
    const url = window.location.origin + route.fullPath;
    logEvent(analytics, 'page_view', {
      page_location: url
    });
    // console.log('url', url);
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
