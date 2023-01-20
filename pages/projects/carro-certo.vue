<template>
  <div class="details-page">
    <div class="flex-1 h-screen md:max-h-[600px] relative duration-500 ease-in-out">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <img
          class="max-w-[300px] mb-8"
          :src="
            darkMode
              ? '/imgs/projects/carro-certo/Logo_Carro-Certo_Neg.svg'
              : '/imgs/projects/carro-certo/Logo_Carro-Certo_Pos.svg'
          "
          alt="Cimtia Ads Project Logo" />
        <p class="text-center text-xl max-w-[650px]">
          The Carro Certo app connects the stock of several used car stores to each other, allowing
          the entrepreneur to serve his customers even if he does not have the vehicle he is looking
          for in his yard.
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
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen0.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen0.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen1.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen1.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen2.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen2.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen3.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen3.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen4.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen4.jpg')]"></div>
              </li>
              <li class="glide__slide">
                <div
                  class="slider-img min-h-[550px] bg-[url('/imgs/projects/carro-certo/carro-certo_mobile_screen5.jpg')] md:bg-[url('/imgs/projects/carro-certo/carro-certo_desk_screen5.jpg')]"></div>
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
            <button
              class="glide__bullet"
              data-glide-dir="=5"></button>
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
            In this project, I was recruited to lead the development of the application from the
            start. My team consisted of only two full-stack developers, and it took us approximately
            six months to complete the full development of the app.
          </p>
          <p class="mt-6">
            As a member of the team, I alternated between front-end and back-end tasks. I was also
            responsible for designing the database architecture and selecting the technologies and
            stack used in the project.
          </p>
          <!-- <p class="mt-6">
            In addition to my work on the development side, I was also responsible for setting up
            and maintaining the continuous integration and continuous deployment (CI/CD) pipeline.
            This included configuring a webhook in the GitHub repository that triggered the build
            and deployment process whenever code was pushed to the repository.
          </p> -->
          <p class="mt-6">
            Lastly, I was also responsible for managing the DevOps system, which included building,
            maintaining and improving the development infrastructure, deployment through pipeline
            build automation (Ci/Cd), testing and application deployment.
          </p>
          <div id="section-text-overview"></div>
        </div>

        <div class="my-16">
          <h2 class="uppercase text-2xl font-semibold">Project Overview</h2>
          <div class="max-w-[50px] h-[3px] rounded mr-auto bg-secondary mt-3"></div>
          <p class="mt-8">
            The CarroCerto.com app offers a wide range of features that are designed to make it easy
            for car dealers to expand their inventory and improve their sales. The app offers a vast
            selection of cars, with over 1,000 vehicles available for purchase at any given time.
            This means that dealers can find the vehicles they need to fill their inventory without
            having to worry about storage space or the cost of maintaining a large physical
            inventory.
          </p>
          <p class="mt-6">
            One of the key features of the app is the real-time negotiation feature. This allows
            dealers to negotiate prices and finalize deals quickly and easily. The app is also
            optimized for mobile use, so dealers can manage and negotiate their inventory from
            anywhere at any time. This feature also allows them to keep track of their inventory and
            monitor sales in real-time, giving them the flexibility to adapt to market changes and
            customer demand.
          </p>
          <p class="mt-6">
            The CarroCerto.com app also offers a variety of other features that are designed to make
            it easy for dealers to operate their business. For example, the app offers an external
            evaluation feature that allows dealers to have a third party evaluate their vehicles
            before they are sold. Additionally, the app has a filtering feature that allows dealers
            to sort through their inventory and find the specific vehicles they need. The app also
            provides an unlimited number of ads and only charges users when they make a purchase.
            All these features are designed to help car dealers to expand their inventory, increase
            sales, and improve their overall business operations.
          </p>
          <p class="mt-8">
            <span class="font-semibold">Technical specifications:</span> Web application, SPA, with
            PWA capability (offline functionality, push notifications, home icon installation etc.).
            Integrated with payment system and real-time chat capability for communication between
            users.
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
              href="https://app-carro-certo.web.app/"
              class="btn"
              target="_blank">
              Live Link
            </a>
            <a
              href="https://www.figma.com/file/1L81WDi1JUGt8b3ETwDETy/Carro-Certo?node-id=2405%3A345&t=xkrNK2rAalUcWEKy-0"
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
    title: "Giovanni Oda's Portfolio | Project | App Carro Certo",
    meta: [
      {
        name: 'description',
        content: "Giovanni Oda's portfolio App Carro Certo project Case Study"
      }
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
