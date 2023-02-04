<template>
  <div class="details-page">
    <div class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <img
          class="max-w-[125px] mb-8"
          src="/imgs/projects/agencia-bsb/Logo_Ag_BSB_512px.jpg"
          alt="Agência Brasília Project Logo" />
        <p class="text-center text-xl max-w-[650px]">
          The Government of the Federal District's official news portal has news, announcements,
          data, the Governor's public agenda and other info accessible through the website or app
          for iOS and Android.
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
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Mobile_screen0.jpg')] md:bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Desk_screen0.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Mobile_screen1.jpg')] md:bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Desk_screen1.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Mobile_screen2.jpg')] md:bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Desk_screen2.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Mobile_screen3.jpg')] md:bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Desk_screen3.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Mobile_screen4.jpg')] md:bg-[url('/imgs/projects/agencia-bsb/Agencia-bsb_Desk_screen4.jpg')]"></div>
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
            In the first stage of this project - news portal - I was responsible for creating the
            layout, creating the visual identity, the graphic design, the prototype as well as the
            creation and development of the Interface and the User Experience (Ui/Ux).
          </p>
          <p class="mt-6">
            In the second stage – mobile application – I participated in the development of the app
            in Flutter on the front-end, creating screens and snippets. As for the backend, I used
            Firebase mainly to implement the push notifications functionality with FCM. I also
            participated in the build process for both platforms (iOS and Android) and their
            publications in the respective stores.
          </p>
          <div id="section-text-overview"></div>
        </div>

        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Project Overview</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            The official news portal of the Government of the Federal District is a powerful tool
            for keeping the public informed about the latest developments and happenings in the
            government. Built using the popular WordPress platform, the portal allows the
            government's team of journalists to easily feed it with news, announcements, and
            important data, such as the number of hospital beds and the number of cases of COVID-19.
          </p>
          <p class="mt-6">
            In addition to providing the latest news and information, the portal also makes the
            Governor's public agenda available, allowing the public to stay informed about the
            governor's schedule and upcoming events. The government information is also accessible
            through the portal via the website or in the mobile version application developed with
            Flutter available for iOS and Android.
          </p>
          <p class="mt-8">
            <span class="font-semibold">Technical specifications web:</span> Website in wordpress,
            with MySQL database and several custom functions in PHP. It feeds the native application
            through an RSS feed.
          </p>
          <p class="mt-8">
            <span class="font-semibold">Technical specifications mobile:</span> Flutter native app
            developed with the same codebase for iOS and Android. It uses Firebase services as a
            backend.
          </p>
          <div id="section-text-more"></div>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Tools Used</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <div class="mt-8 flex flex-wrap text-zinc-600 justify-start">
            <p class="chip">Flutter</p>
            <p class="chip">Dart</p>
            <p class="chip">Firebase</p>
            <p class="chip">Firestore</p>
            <p class="chip">Firebase Storage</p>
            <p class="chip">Cloud Functions</p>
            <p class="chip">Cloud Messaging</p>
            <p class="chip">Wordpress</p>
            <p class="chip">PHP</p>
            <p class="chip">MySQL</p>
            <p class="chip">HTML</p>
            <p class="chip">CSS</p>
            <p class="chip">Javascript</p>
            <div id="see-more"></div>
          </div>
        </div>
        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">See More</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <div class="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://www.agenciabrasilia.df.gov.br/"
              class="btn"
              target="_blank">
              Live Link
            </a>
            <a
              href="https://www.figma.com/proto/xoWunvJDHjwrU2pGhqdpW9/Portal-de-Not%C3%ADcias---Ag.-Bras%C3%ADlia?node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down-width"
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
    title: "Giovanni Oda's Portfolio | Project | Agência Brasília",
    meta: [
      {
        name: 'description',
        content: "Giovanni Oda's portfolio Agência Brasília project Case Study"
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
