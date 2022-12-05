<template>
  <div class="home-page">
    <div
      id="hero-section"
      class="hero h-screen relative">
      <div class="content flex justify-center flex-col items-center h-[80%]">
        <h1 class="uppercase text-4xl mb-6 font-semibold text-center">Hey, I'm Giovanni Oda</h1>
        <p class="text-center text-xl">
          A full stack engineer focused web developer building web applications <br />
          that leads to the success of the overall product.
        </p>
        <div class="self-center mt-10">
          <a
            href="#projects-section"
            class="btn px-12 pt-4">
            <span class="text-xl">Projects</span>
          </a>
        </div>
      </div>
      <div class="mousey mx-auto">
        <div class="scroller"></div>
      </div>
      <div id="about-section"></div>
    </div>
    <section>
      <div class="text-center">
        <h1 class="uppercase text-2xl font-semibold">About Me</h1>
        <div class="under-title mx-auto bg-secondary mt-3"></div>
        <div class="content text-center mt-12 text-xl">
          <p class="max-w-[700px] mx-auto">
            Here you will find more information about me, what I do, and my current skills mostly in
            terms of programming and technology
          </p>
          <div class="flex-col mx-auto p-4 flex justify-center mt-12 lg:gap-8 lg:px-16 lg:flex-row">
            <div class="max-w-[600px] text-center mx-auto lg:text-left">
              <h2 class="text-2xl font-bold opacity-60 mb-8">Get to know me!</h2>
              <p class="mb-4">
                I'm a full stack web engineer with
                <span class="font-semibold">4 years of experience</span> building websites and web
                applications that leads to the success of the overall product. Check out some of my
                work in the Projects section.
              </p>
              <p class="mb-4">
                I also like sharing content related to the stuff that I have learned over the years
                in web development so it can help other people of the Dev community. Feel free to
                connect or follow me on my
                <a
                  class="text-primary hover:underline"
                  href="https://www.linkedin.com/in/giovanni-oda/"
                  target="_blank">
                  Linkedin
                </a>
                where I post useful content related to web development and programming.
              </p>
              <p class="mb-8">
                I'm open to job opportunities where I can contribute, learn and grow. If you have a
                good opportunity that matches my skills and experience then don't hesitate to
                contact me.
              </p>
              <a
                href="#contact-section"
                class="btn">
                Contact
              </a>
            </div>
            <div class="max-w-[600px] text-center mx-auto mt-16 lg:mt-0 lg:text-left">
              <h2 class="text-2xl font-bold opacity-60 mb-10">My Skills</h2>
              <div class="flex flex-wrap text-zinc-600 justify-center lg:justify-start">
                <p class="chip">HTML</p>
                <p class="chip">CSS</p>
                <p class="chip">Javascript</p>
                <p class="chip">Vue Js</p>
                <p class="chip">Vuex</p>
                <p class="chip">Pinia</p>
                <p class="chip">Nuxt</p>
                <p class="chip">Node Js</p>
                <p class="chip">Firebase</p>
                <p class="chip">PHP</p>
                <p class="chip">Laravel</p>
                <p class="chip">SQL</p>
                <p class="chip">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="projects-section"
      class="pt-20">
      <div class="text-center mt-10">
        <h1 class="uppercase text-2xl font-semibold">Projects</h1>
        <div class="under-title mx-auto bg-secondary mt-3"></div>
      </div>
    </section>
    <section
      id="contact-section"
      class="pt-20">
      <div class="text-center mt-10">
        <h1 class="uppercase text-2xl font-semibold">Contact</h1>
        <div class="under-title mx-auto bg-secondary mt-3"></div>
      </div>
    </section>
    <!-- <h1>Loading: {{ mainStore.loading }}</h1> -->
  </div>
</template>

<script setup>
  // Server Side
  import { useMainStore } from '~/stores/main';

  const mainStore = useMainStore();

  // Client Side
  onMounted(async () => {
    const { firestore } = useFirebase();

    console.log('firestore', firestore);
    // const docRef = doc(firestore, `animals`, 'dog');
    // onSnapshot(docRef, (snap) => {
    //   data.value = snap.data();
    // });
  });
</script>

<style scoped>
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
  .under-title {
    max-width: 50px;
    height: 3px;
    border-radius: 5px;
  }
  section {
    min-height: 800px;
  }
</style>
