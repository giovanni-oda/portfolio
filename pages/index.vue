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
    <section ref="about">
      <div
        class="text-center duration-[2000ms] ease-in-out"
        :class="{
          'opacity-0': !aboutIsVisible,
          'opacity-100': aboutIsVisible
        }">
        <h1 class="uppercase text-2xl font-semibold">About Me</h1>
        <div class="max-w-[50px] h-[3px] rounded mx-auto bg-secondary mt-3"></div>
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
              <p class="mb-10">
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
                <p
                  v-for="(skill, index) in skills"
                  :key="index"
                  class="chip">
                  {{ skill }}
                </p>
              </div>
              <h2 class="text-2xl font-bold opacity-60 mt-10 mb-8">Resume</h2>
              <div class="flex gap-4 justify-center lg:justify-start">
                <a
                  href="#contact-section"
                  class="btn">
                  View
                </a>
                <a
                  href="#contact-section"
                  class="btn">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="projects"
      id="projects-section"
      class="pt-20">
      <div
        class="text-center mt-10 duration-[2000ms] ease-in-out"
        :class="{
          'opacity-0': !projectsIsVisible,
          'opacity-100': projectsIsVisible
        }">
        <h1 class="uppercase text-2xl font-semibold">Projects</h1>
        <div class="max-w-[50px] h-[3px] rounded mx-auto bg-secondary mt-3"></div>

        <div class="content mt-12 text-lg max-w-[1024px] mx-auto">
          <p class="max-w-[700px] mx-auto text-xl">
            Here you will find some of the personal and clients projects that I created with each
            project containing its own case study
          </p>
          <div class="grid lg:grid-cols-3 gap-8 mt-20">
            <div class="card lg:col-span-2">
              <div class="grid lg:grid-cols-[42.5%_57.5%] gap-6">
                <div>
                  <img
                    src="/imgs/Teste.png"
                    alt="Teste"
                    class="max-h-[500px] rounded" />
                </div>
                <div class="flex flex-col justify-between lg:pr-6">
                  <div class="text-left">
                    <h2 class="text-xl text-left mb-4 font-semibold">Project Title 1</h2>
                    <p class="mb-4 text-base leading-snug">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa amet
                      nobis excepturi, cupiditate commodi tempora pariatur dolores fugiat dolor
                      similique eveniet sapiente mollitia laudantium.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button class="btn py-1 px-8">Case Study</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-1 lg:row-span-1 pt-1">
              <div class="grid">
                <div>
                  <img
                    src="/imgs/Teste2.png"
                    alt="Teste2"
                    class="rounded" />
                </div>
                <div>
                  <div class="text-left">
                    <h2 class="text-xl text-left my-2 font-semibold">Project Title 2</h2>
                    <p class="mb-2 text-base leading-snug">
                      Lorem ipsum dolor sit amet, consect sicing elit. Corrupti culpa amet nobis
                      excepturi lorem ipsum sit amet.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button class="btn py-1 px-8">Case Study</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-1 lg:row-span-1 pt-1">
              <div class="grid">
                <div>
                  <img
                    src="/imgs/Teste2.png"
                    alt="Teste2"
                    class="rounded" />
                </div>
                <div>
                  <div class="text-left">
                    <h2 class="text-xl text-left my-2 font-semibold">Project Title 3</h2>
                    <p class="mb-2 text-base leading-snug">
                      Lorem ipsum dolor sit amet, consect sicing elit. Corrupti culpa amet nobis
                      excepturi lorem ipsum sit amet.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button class="btn py-1 px-8">Case Study</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-2">
              <div class="grid lg:grid-cols-[57.5%_42.5%]">
                <div>
                  <img
                    src="/imgs/Teste.png"
                    alt="Teste"
                    class="max-h-[500px] flip-x rounded" />
                </div>
                <div class="flex flex-col justify-between lg:row-start-1">
                  <div class="text-left">
                    <h2 class="text-xl text-left mb-4 font-semibold">Project Title 4</h2>
                    <p class="mb-4 text-base leading-snug">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa amet
                      nobis excepturi, cupiditate commodi tempora pariatur dolores fugiat dolor
                      similique eveniet sapiente mollitia laudantium.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue 3
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button class="btn py-1 px-8">Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <NuxtLink
              class="text-primary text-xl hover:underline"
              to="/projects">
              View More Projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="contact"
      id="contact-section"
      class="pt-20">
      <div
        class="text-center mt-10 duration-[2000ms] ease-in-out"
        :class="{
          'opacity-0': !contactIsVisible,
          'opacity-100': contactIsVisible
        }">
        <h1 class="uppercase text-2xl font-semibold">Contact</h1>
        <div class="max-w-[50px] h-[3px] rounded mx-auto bg-secondary mt-3"></div>

        <div class="content mt-12 text-lg max-w-[1280px] mx-auto">
          <p class="max-w-[700px] mx-auto text-xl">
            Feel free to contact me by submitting the form below and I will get back to you as soon
            as possible
          </p>

          <div class="card mt-12 mb-20 md:p-12">
            <form class="text-left">
              <div class="formGroup mb-8 relative">
                <label for="name"> Name </label>
                <div
                  class="flex items-center rounded-md bg-background px-4 py-2 mt-2 border border-footer">
                  <input
                    v-model="formData.name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    class="bg-transparent w-full text-themeText focus:outline-none"
                    @keypress="clearError('name')" />
                </div>
                <Transition mode="out-in">
                  <span
                    v-if="nameError"
                    class="absolute text-error text-sm duration-300">
                    {{ nameError.errorMsg }}
                  </span>
                </Transition>
              </div>
              <div class="formGroup mb-8 relative">
                <label for="email"> Email </label>
                <div
                  class="flex items-center rounded-md bg-background px-4 py-2 mt-2 border border-footer">
                  <input
                    v-model="formData.email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    class="bg-transparent w-full text-themeText focus:outline-none"
                    @keypress="clearError('email')" />
                </div>
                <Transition mode="out-in">
                  <span
                    v-if="emailError"
                    class="absolute text-error text-sm duration-300">
                    {{ emailError.errorMsg }}
                  </span>
                </Transition>
              </div>
              <div class="formGroup mb-8 relative">
                <label for="msg"> Message </label>
                <div
                  class="flex items-center rounded-md bg-background px-4 py-2 mt-2 border border-footer">
                  <textarea
                    v-model="formData.msg"
                    name="msg"
                    placeholder="Enter Your message"
                    rows="4"
                    class="bg-transparent w-full text-themeText focus:outline-none"
                    @keypress="clearError('msg')" />
                </div>
                <Transition mode="out-in">
                  <span
                    v-if="msgError"
                    class="absolute text-error text-sm duration-300">
                    {{ msgError.errorMsg }}
                  </span>
                </Transition>
              </div>
              <div class="flex justify-between mb-2">
                <div>Contact</div>
                <button
                  class="btn"
                  :class="{ 'bg-footer': !formIsValid, 'text-surface': !formIsValid }"
                  type="submit"
                  :disabled="!formIsValid"
                  @click.prevent="sendMsg()">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>Loading: {{ mainStore.loading }}</h1> -->
  </div>
</template>

<script setup>
  // Server Side
  import { ref } from 'vue';
  import { useMainStore } from '~/stores/main';

  // consts
  const mainStore = useMainStore();

  // refs
  const about = ref(null);
  const projects = ref(null);
  const contact = ref(null);

  // state
  const aboutIsVisible = useElementVisibility(about);
  const projectsIsVisible = useElementVisibility(projects);
  const contactIsVisible = useElementVisibility(contact);
  const formData = ref({ name: '', email: '', msg: '' });
  const validationErrors = ref([
    // { field: 'name', type: 'required', errorMsg: 'Name is invalid!' }
  ]);
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Vue Js',
    'Vuex',
    'Pinia',
    'Nuxt',
    'Node Js',
    'Firebase',
    'AWS',
    'PHP',
    'Laravel',
    'SQL',
    'Git',
    'Art Direction'
  ];

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
  const nameError = computed(() => validationErrors.value.find((obj) => obj.field === 'name'));
  const emailError = computed(() => validationErrors.value.find((obj) => obj.field === 'email'));
  const msgError = computed(() => validationErrors.value.find((obj) => obj.field === 'msg'));
  const formIsValid = computed(() => validationErrors.value.length <= 0);

  // Methods
  function sendMsg() {
    if (validateForm()) {
      console.log('formData.value', formData.value);
      resetForm();
    }
  }

  function validateForm() {
    let valid = true;
    const formKeys = Object.keys(formData.value);
    // field required
    for (let i = 0; i < formKeys.length; i++) {
      if (!formData.value[formKeys[i]] || formData.value[formKeys[i]] === '') {
        validationErrors.value.push({
          field: formKeys[i],
          type: 'required',
          errorMsg: `Please enter a${formKeys[i] === 'email' ? 'n' : ''} ${
            formKeys[i] === 'msg' ? 'message' : formKeys[i]
          }.`
        });
        valid = false;
      }
    }
    // email validation
    const re = /\S+@\S+\.\S+/;
    if (!re.test(formData.value.email)) {
      validationErrors.value.push({
        field: 'email',
        type: 'format',
        errorMsg: 'Invalid email'
      });
      valid = false;
    }
    return valid;
  }

  function clearError(field) {
    validationErrors.value = validationErrors.value.filter((obj) => {
      return obj.field !== field;
    });
  }

  function resetForm() {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.msg = '';
    validationErrors.value = [];
  }

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
  section {
    min-height: 800px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
