<template>
  <div
    class="home-page duration-300 ease-in-out"
    :class="{ 'blur-sm': showCvModal || showMsgModal }">
    <div
      id="hero-section"
      class="flex-1 h-screen relative duration-500 ease-in-out"
      :class="{ 'light-hero': themeMode === 'light', 'dark-hero': themeMode === 'dark' }">
      <div class="content flex justify-center flex-col items-center h-[80%] px-4">
        <h1
          class="uppercase text-5xl mb-6 font-semibold text-center text-primary"
          :class="{ 'mix-blend-screen': darkMode }">
          Hey, I'm Giovanni Oda
        </h1>
        <p class="text-center text-xl max-w-[650px]">
          A full stack software engineer focused on web application development that leads to the
          success of the overall product.
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
    <section
      ref="about"
      class="container mx-auto p-4 pt-10 mb-10">
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
                I'm a full stack software engineer with
                <span class="font-semibold">5 years of experience</span> building websites and
                primarily web applications that leads to the success of the overall product. Check
                out some of my latest work in the Projects section.
              </p>
              <p class="mb-4">
                I also like sharing content related to the stuff that I have learned over the years
                in web development so it can help other people of the Dev community. Feel free to
                connect or follow me on my
                <a
                  class="text-primary font-sem duration-300 ease-in-out hover:underline"
                  href="https://www.linkedin.com/in/giovanni-oda/"
                  target="_blank">
                  Linkedin</a
                >.
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
                <button
                  class="btn"
                  @click="toggleModal()">
                  View / Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="projects"
      id="projects-section"
      class="pt-10 pb-20"
      :class="{ 'bg-[rgba(0,0,0,0.025)]': !darkMode, 'bg-[rgba(0,0,0,0.075)]': darkMode }">
      <div
        class="container mx-auto p-4 text-center mt-10 duration-[2000ms] ease-in-out"
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
              <div class="grid lg:grid-cols-[42%_58%] gap-6">
                <div>
                  <img
                    src="/imgs/Cel_MockUp_Cimtia.png"
                    alt="Giovanni Oda's Portfolio Project Image - Cimtia Ads"
                    class="max-h-[500px] rounded" />
                </div>
                <div class="flex flex-col justify-between lg:pr-6">
                  <div class="text-left">
                    <h2 class="text-xl text-left mb-4 font-semibold">Cimtia Ads</h2>
                    <p class="mb-4 text-base leading-snug">
                      Is a Brazilian platform that offers small and medium-sized businesses the
                      possibility of advertising on TV, in an uncomplicated and autonomous way. The
                      entire process of buying TV media and ordering creative material is done
                      online by the user on the platform.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        React
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Tailwind
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firestore
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase Auth
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase Storage
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Cloud Functions
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button
                      class="btn py-1 px-8"
                      @click="$router.push('/projects/cimtia-ads')">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-1 lg:row-span-1 pt-1">
              <div class="grid">
                <div>
                  <img
                    src="/imgs/Desk_MockUp_Carro-certo.png"
                    alt="Carro Certo App Screenshot"
                    class="rounded" />
                </div>
                <div>
                  <div class="text-left">
                    <h2 class="text-xl text-left my-2 font-semibold">Carro Certo App</h2>
                    <p class="mb-2 text-base leading-snug">
                      Application that connects used car dealerships to a database of more than 1000
                      vehicles.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue JS
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vuex
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vuetify
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase
                      </span>
                      <!-- <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firestore
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase Functions
                      </span> -->
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button
                      class="btn py-1 px-8"
                      @click="$router.push('/projects/carro-certo')">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-1 lg:row-span-1 pt-1">
              <div class="grid">
                <div>
                  <img
                    src="/imgs/Desk_MockUp_Aventar-testel.png"
                    alt="Aventar Radio Testel Screenshot"
                    class="rounded" />
                </div>
                <div>
                  <div class="text-left">
                    <h2 class="text-xl text-left my-2 font-semibold">
                      Aventar - Rádio Testemunhal
                    </h2>
                    <p class="mb-2 text-base leading-snug">
                      Application that allows checking the radio advertising insertions ordered by
                      the advertising agency.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vue JS
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vuex
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Vuetify
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button
                      class="btn py-1 px-8"
                      @click="$router.push('/projects/aventar-testel')">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:col-span-2">
              <div class="grid lg:grid-cols-[57.5%_42.5%]">
                <div>
                  <img
                    src="/imgs/Cel_MockUp_Agencia-bsb_flip.png"
                    alt="Agencia Brasília Project Screenshot"
                    class="hidden lg:block max-h-[500px] rounded" />
                  <img
                    src="/imgs/Cel_MockUp_Agencia-bsb.png"
                    alt="Agencia Brasília Project Screenshot"
                    class="lg:hidden max-h-[500px] rounded" />
                </div>
                <div class="flex flex-col justify-between lg:row-start-1">
                  <div class="text-left">
                    <h2 class="text-xl text-left mb-4 font-semibold">
                      Agência Brasília – News Portal
                    </h2>
                    <p class="mb-4 text-base leading-snug">
                      Official News Portal of the Government of the Federal District (capital of
                      Brazil). Through the portal, the government posts news, announcements,
                      important data, makes the Governor's public agenda available and other
                      relevant information that the population can access via the website or native
                      apps for iOS and Android.
                    </p>
                    <span class="text-base font-semibold">Stack</span>
                    <div class="flex gap-2 flex-wrap text-sm">
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Flutter
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Dart
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Firebase
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Wordpress
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        PHP
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        MySQL
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        HTML
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        CSS
                      </span>
                      <span
                        class="pill"
                        :class="{ 'dark-pill': darkMode }">
                        Javascript
                      </span>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <button
                      class="btn py-1 px-8"
                      @click="$router.push('/projects/agencia-bsb')">
                      Case Study
                    </button>
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
      class="container mx-auto p-4 pt-12 mb-6">
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
                    @keyup="clearError('name')" />
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
                    @keyup="clearError('email')" />
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
                    @keyup="clearError('msg')" />
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
                <div></div>
                <button
                  class="btn duration-300 ease-in-out"
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
    <BaseModal
      :show-modal="showCvModal"
      title="Resume - Updated Dec/22"
      max-size="xl"
      :hide-footer="true"
      @close-modal="toggleModal()">
      <ResumeContent></ResumeContent>
      <template v-slot:tools>
        <button class="text-primary">
          <a
            href="/pdf/GiovanniOda_Resume.pdf"
            target="_blank">
            <span class="material-icons"> picture_as_pdf </span>
          </a>
        </button>
      </template>
    </BaseModal>
    <BaseModal
      :show-modal="showMsgModal"
      :title="msgFeedBack.title"
      max-size="md"
      :hide-footer="false"
      @close-modal="showMsgModal = false">
      <div class="text-center">
        <h2 class="text-2xl mb-4">{{ msgFeedBack.h2 }}</h2>
        <p>{{ msgFeedBack.p }}</p>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
  // Server Side
  import { connectStorageEmulator } from '@firebase/storage';
  import { ref } from 'vue';
  import { useMainStore } from '~/stores/main';
  //import { collection, getDocs } from 'firebase/firestore';

  // const { data: serverData } = useFetch('/api/projects');
  // const { db } = await useFirebase();

  // consts
  const mainStore = useMainStore();

  // refs
  const about = ref(null);
  const projects = ref(null);
  const contact = ref(null);

  // state
  const showCvModal = ref(false);
  const showMsgModal = ref(false);
  const aboutIsVisible = useElementVisibility(about);
  const projectsIsVisible = useElementVisibility(projects);
  const contactIsVisible = useElementVisibility(contact);
  const formData = ref({ name: '', email: '', msg: '' });
  const validationErrors = ref([
    // { field: 'name', type: 'required', errorMsg: 'Name is invalid!' }
  ]);
  const msgFeedBack = ref({ title: '', h2: '', p: '' });
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Vue Js',
    'Vuex',
    'Pinia',
    'Nuxt Js',
    'Node Js',
    'Firebase',
    'Tailwind',
    'Vuetify',
    'PHP',
    'Laravel',
    'SQL',
    'No-SQL',
    'GIT',
    'PWA',
    'Ui/Ux Design',
    'Figma',
    'Photoshop',
    'InDesign',
    'Illustrator',
    'SCRUM'
  ];

  // Computed
  const darkMode = computed(() => mainStore.getTheme === 'dark');
  const themeMode = computed(() => mainStore.getTheme);
  const nameError = computed(() => validationErrors.value.find((obj) => obj.field === 'name'));
  const emailError = computed(() => validationErrors.value.find((obj) => obj.field === 'email'));
  const msgError = computed(() => validationErrors.value.find((obj) => obj.field === 'msg'));
  const formIsValid = computed(() => validationErrors.value.length <= 0);

  // Methods
  async function sendMsg() {
    if (validateForm()) {
      const newMsgData = { ...formData.value };
      console.log('newMsgData', newMsgData);
      const { data } = await useFetch('/api/sendgrid', {
        method: 'post',
        body: newMsgData
      });
      if (data.value.status === 200) {
        // console.log('Email Sent feedback');
        msgFeedBack.value.title = 'Email successfully sent!';
        msgFeedBack.value.h2 = 'Thank you for contacting me.';
        msgFeedBack.value.p = 'I will respond as soon as possible.';
      } else {
        console.error('Error sending Email');
        msgFeedBack.value.title = 'Error sending email!';
        msgFeedBack.value.h2 = 'Sorry, an unexpected error occurred.';
        msgFeedBack.value.p =
          'Please try again later. Or contact me directly at contact@giovannioda.dev';
      }
      showMsgModal.value = true;
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

  function toggleModal() {
    showCvModal.value = !showCvModal.value;
    mainStore.pageBlur = !mainStore.pageBlur;
  }

  // Client Side
  onMounted(async () => {
    // const docRef = doc(firestore, `animals`, 'dog');
    // onSnapshot(docRef, (snap) => {
    //   data.value = snap.data();
    // });
    // const querySnapshot = await getDocs(collection(db, 'projects'));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data());
    // });
  });
</script>

<style scoped>
  .light-hero {
    background-image: url('/imgs/Bg_hero_light.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .dark-hero {
    background-image: url('/imgs/Bg_hero_dark.jpg');
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
