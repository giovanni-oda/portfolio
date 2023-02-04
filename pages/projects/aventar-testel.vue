<template>
  <div class="details-page">
    <div class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <img
          class="max-w-[300px] mb-8"
          :src="
            darkMode
              ? '/imgs/projects/aventar-testel/Logo_Aventar_Testel_Neg.svg'
              : '/imgs/projects/aventar-testel/Logo_Aventar_Testel_Pos.svg'
          "
          alt="Cimtia Ads Project Logo" />
        <p class="text-center text-xl max-w-[650px]">
          Valuable tool for radio advertisers, as it offers the possibility of checking the
          insertions of their campaign, gaining access to the list of radios and listening to all
          the ads captured in audio, in a simple and friendly way.
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
              <li class="glide__slide my-auto">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Mobile_screen0.jpg')] md:bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Desk_screen0.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Mobile_screen1.jpg')] md:bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Desk_screen1.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Mobile_screen2.jpg')] md:bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Desk_screen2.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Mobile_screen3.jpg')] md:bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Desk_screen3.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Mobile_screen4.jpg')] md:bg-[url('/imgs/projects/aventar-testel/Aventar-Testel_Desk_screen4.jpg')]"></div>
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
            Application commissioned and developed in partnership with the company Aventar, which
            provides services to large Brazilian advertising agencies.
          </p>
          <p class="mt-6">
            Also used in the campaign to encourage vaccination against COVID-19, by the Ministry of
            Health of the Government of Brazil, the application continues to be constantly
            developed, receiving new features and expanding its capacity to serve the customer even
            better.
          </p>
          <p class="mt-6">
            In this project, which started only from a need and an idea, I was responsible for the
            entire development, architecture, testing and implementation of the system.
          </p>
          <div id="section-text-overview"></div>
        </div>

        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Project Overview</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            Aventar - Rádio Testemunhal is an application developed to meet the needs of radio
            advertisers. It allows to check the insertions of advertising campaign, obtaining proof
            of all the media purchased by the advertising agency.
          </p>
          <p class="mt-6">
            Through the app, advertisers have access to a list of all contracted radio stations and
            can listen to the captured audio insertions, including only the ad excerpt. All this is
            available in a simple and friendly dashboard, public and accessible via the internet.
          </p>
          <p class="mt-6">
            With the application, advertisers can be sure that their campaigns are being displayed
            correctly and on all the radios in their media plan, in addition to having the
            possibility of listening to the insertions, which facilitates the verification of
            possible narration errors, content or audio problems.
          </p>
          <p class="mt-8">
            <span class="font-semibold">Technical specifications:</span> Web application, SPA, with
            PWA capability (offline functionality, push notifications, home icon installation etc.).
            Integrated with <span class="font-semibold">FFmpeg</span> audio library.
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
            <p class="chip">Vue JS</p>
            <p class="chip">Vuex</p>
            <p class="chip">Vuetify</p>
            <p class="chip">Firebase</p>
            <p class="chip">Firestore</p>
            <p class="chip">Firebase Auth</p>
            <p class="chip">Firebase Storage</p>
            <p class="chip">Cloud Functions</p>
            <p class="chip">Cloud Messaging</p>
            <div id="see-more"></div>
          </div>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">See More</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <div class="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://testemunhal.aventar.com.br/campaign/programa-de-testagem-covid-19"
              class="btn"
              target="_blank">
              Live Link (cliente LP)
            </a>
            <a
              href="https://testemunhal.aventar.com.br/"
              class="btn"
              target="_blank">
              Live Link (app back-office)
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
    title: "Giovanni Oda's Portfolio | Project | Aventar - Rádio Testemunhal",
    meta: [
      {
        name: 'description',
        content: "Giovanni Oda's portfolio Aventar - Rádio Testemunhal project Case Study"
      }
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
