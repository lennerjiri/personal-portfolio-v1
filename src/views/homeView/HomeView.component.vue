<template>
  <div class="main__page-container">
    <div class="page-container__intro-container">
      <div class="intro-container__center-container">
        <p class="center-container__pre-intro">Hi, my name is</p>
        <h1 class="center-container__name"># Jiří Lenner</h1>
        <h2 class="center-container__job">## I am a web developer</h2>
        <p class="center-container__personal-description">
          I am a fullstack web developer focusing on delivering an
          innovative,world-class web experience. I care deeply about creating
          beautiful, and useful products that help people to make a difference.
        </p>
        <Button
          class="center-container__learn-more-button"
          text="Learn more!"
        />
      </div>
    </div>
    <div class="page-container__about-me-container" id="about">
      <div class="about-me-container__center-container">
        <div class="center-container__left-container">
          <div class="left-container__heading">
            <h2>
              <span>01.</span>
              About me
            </h2>
            <div class="heading__divider"></div>
          </div>
          <p>
            lormem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            <br />
            <br />
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            <br />
            <br />
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctus
            <router-link to="/technologies"> Technologies I use </router-link>
          </p>
        </div>
        <div class="center-container__right-container">
          <div class="right-container__image-highlight">
            <img
              class="image-highlight__image"
              src="../../assets/img/IMG_1408 4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="page-container__experience" id="experience">
      <div class="experience__center-container">
        <div class="center-container__heading">
          <h2>
            <span>02.</span>
            Experience
          </h2>
          <div class="heading__divider"></div>
        </div>
        <div class="center-container__experience-container">
          <div class="experience-container__slider-container">
            <div class="slider-container__divider"></div>
            <div class="slider-container__divider-line"></div>
            <div
              class="slider-container__select"
              v-for="job of jobs"
              :key="jobs.indexOf(job)"
              v-on:click="selectJob(jobs.indexOf(job))"
              :class="{
                'slider-container__select--selected':
                  selectedJob === jobs.indexOf(job) && !loadingJob,
              }"
            >
              <p>{{ job.name }}</p>
            </div>
          </div>
          <div class="experience-container__content">
            <h3 class="content__job-position">
              {{ selectedJobInfo.position }} @ {{ selectedJobInfo.name }}
            </h3>
            <p class="content__job-date">{{ selectedJobInfo.date }}</p>

            <div
              class="content__job-description"
              v-for="description of selectedJobInfo.description"
              :key="selectedJobInfo.description.indexOf(description)"
            >
              <font-awesome-icon icon="fa-solid fa-caret-right" />
              <p>
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-container__projects" id="projects">
      <div class="projects__center-container">
        <div class="center-container__heading">
          <h2>
            <span>03.</span>
            Projects
          </h2>
        </div>
        <div class="center-container__switch">
          <div class="switch__divider"></div>
          <div class="switch__divider-line"></div>
          <div
            class="switch__button"
            :class="{
              'switch__button--selected':
                selectedSwitch === 0 && !loadingProject,
            }"
            @click="selectSwitch(0)"
          >
            <p>Most recent</p>
          </div>
          <div
            class="switch__button"
            :class="{
              'switch__button--selected': selectedSwitch === 1,
            }"
            @click="selectSwitch(1)"
          >
            <p>Archive</p>
          </div>
        </div>
        <div class="center-container__projects-container">
          <div
            class="projects-container__most-recent-container"
            v-if="selectedSwitch === 0"
          >
            <div
              class="most-recent-container__project"
              v-for="project of projectsData"
              :key="project._id"
            >
              <div
                class="project__image-container"
                :style="{
                  order: projectsData.indexOf(project) % 2 === 0 ? 0 : 1,
                }"
              >
                <img
                  :src="`/src/assets/img/projects/${project.frontImage}`"
                  alt=""
                />
              </div>
              <div class="project__text-container">
                <div class="text-container__heading">
                  <h3>{{ project.name }}</h3>
                  <div>
                    <!-- Links -->
                    <a v-if="project.links.github" :href="project.links.github">
                      <font-awesome-icon icon="fa-brands fa-github" />
                    </a>

                    <a
                      v-if="project.links.hosting"
                      :href="project.links.hosting"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                      />
                    </a>
                  </div>
                </div>
                <p
                  class="text-container__description"
                  v-for="shortDescription of project.shortDescriptionRecent"
                  :key="
                    project.shortDescriptionRecent.indexOf(shortDescription)
                  "
                >
                  {{ shortDescription }}
                </p>
                <div class="text-container__footer">
                  <div class="footer__technologies">
                    <!-- technologies -->
                    <a
                      v-for="technology of project.technologies"
                      :key="project.technologies.indexOf(technology)"
                      :href="technology.link"
                      >{{ technology.name }}</a
                    >
                  </div>
                  <!-- button -->
                  <Button class="footer__button" text="Case study" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="projects-container__project-archive-container"
            v-if="selectedSwitch === 1"
          >
            <div
              class="project-archive-container__archive-project"
              v-for="project of projectsData"
              :key="project._id"
            >
              <div class="archive-project__links-container">
                <font-awesome-icon icon="fa-regular fa-folder" />
                <div>
                  <a v-if="project.links.github" :href="project.links.github">
                    <font-awesome-icon icon="fa-brands fa-github" />
                  </a>

                  <a v-if="project.links.hosting" :href="project.links.hosting">
                    <font-awesome-icon
                      icon="fa-solid fa-up-right-from-square"
                    />
                  </a>
                </div>
              </div>
              <h3 class="archive-project__heading">{{ project.name }}</h3>
              <p class="archive-project__description">
                {{ project.shortDescriptionArchive }}
              </p>
              <div class="archive-project__technologies">
                <p>Vue.js</p>
                <p>nuxtjs</p>
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-container__contact"></div>
  </div>
</template>

<script setup>
import Button from "@/components/button/LinkButton.component.vue";
import { ref, computed, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loadingJob = ref(true);
const loadingProject = ref(true);

onMounted(() => {
  const TLABOUT = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-me-container__center-container",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".left-container__heading h2", {
      y: 100,
      autoAlpha: 0,
    })
    .from(".left-container__heading .heading__divider", {
      flexGrow: 0,
      autoAlpha: 0,
    })
    .from(".right-container__image-highlight", {
      autoAlpha: 0,
      y: 100,
    })
    .from(".center-container__left-container p", {
      autoAlpha: 0,
      y: 100,
    });

  const TLEXP = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".experience__center-container",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".center-container__heading h2", {
      autoAlpha: 0,
      y: -10,
    })
    .from(".center-container__heading .heading__divider", {
      autoAlpha: 0,
      flexGrow: 0,
    })
    .from(".slider-container__divider-line", {
      autoAlpha: 0,
      height: 0,
    })
    .from(".slider-container__select", {
      autoAlpha: 0,
      y: -10,
      stagger: 0.25,
    })
    .from(".slider-container__divider", {
      autoAlpha: 0,
    })
    .add(() => {
      loadingJob.value = false;
    })
    .from(".experience-container__content", {
      autoAlpha: 0,
      y: -10,
    });

  const TLPROJECTS = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".projects__center-container",
        start: "top 75%",
        end: "top 25%",
        markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".projects__center-container .center-container__heading", {
      autoAlpha: 0,
      y: -10,
    })
    .from(".switch__divider-line", {
      width: 0,
    })
    .from(".switch__button", {
      autoAlpha: 0,
      y: 10,
      stagger: 0.25,
    })
    .from(".switch__divider", {
      autoAlpha: 0,
    })
    .add(() => {
      loadingProject.value = false;
    });
});

// About me animation
const selectedJob = ref(0);
const jobs = [
  {
    name: "Actum Digital",
    position: "Frontend developer",
    date: "2020 - 2021",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu  asdfas fdasfasfsadf",
    ],
  },
  {
    name: "Uplaud",
    position: "Frontend developer",
    date: "2021 - 2021",
    description: [
      "Lorem nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. u,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor sit amet, , luctus nisl eu, luctus nisl eu, luctus nconsectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismodisl eu  asdfas fdasfasfsadf",
    ],
  },
  {
    name: "Whatever",
    position: "Frontend developer",
    date: "2021 - present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adi, luctus nisl eu, luctus nisl eu, luctus n euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ",
      "Lorem ip, luctus nisl eu, luctus nisl eu, luctus n, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor , luctus nisl eu, luctus nisl eu, luctus ning elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu  asdfas fdasfasfsadf",
    ],
  },
];

const selectedJobInfo = computed(() => {
  return jobs[selectedJob.value];
});

const selectJob = (jobIndex) => {
  if (selectedJob.value === jobIndex) return;

  const TL = gsap.timeline();

  // Decrease

  TL.to(".experience-container__content", {
    ease: "power1.none",
    y: 10,
    autoAlpha: 0,
    duration: 0.1,
  })
    .add(() => {
      selectedJob.value = jobIndex;
    })
    .to(".slider-container__divider", {
      ease: "power1.inOut",
      duration: 0.1,
      y: jobIndex * 52,
    })
    .to(".experience-container__content", {
      ease: "power1.none",
      y: -10,
      autoAlpha: 1,
      duration: 0.1,
    });
};
// Projects
const selectedSwitch = ref(0);
const selectSwitch = (switchIndex) => {
  const TL = gsap.timeline();

  TL.to(".center-container__projects-container", {
    ease: "power1.inOut",
    autoAlpha: 0,
    duration: 0.1,
  })
    .to(".switch__divider", {
      ease: "power1.inOut",
      duration: 0.1,
      x: switchIndex * 224,
    })
    .add(() => {
      selectedSwitch.value = switchIndex;
    })
    .to(".center-container__projects-container", {
      ease: "power1.inOut",
      autoAlpha: 1,
      duration: 0.1,
    });
};
const projectsData = ref([
  {
    _id: 0,
    name: "Knedkliky",
    links: {
      github: "https://github.com/lennerjiri/projekt_vejce_frontend",
      hosting: "https://kraslicelennerova.cz/",
    },
    frontImage: "kraslice1.webp",
    shortDescriptionRecent: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, ",
    ],
    shortDescriptionArchive:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel asdf nisl euismo sssdd as fas dfasdfasdfs ed vel nisl euismo, ",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
      {
        name: "Nuxt.js",
        link: "https://nuxtjs.org/",
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/",
      },
    ],
  },
  {
    _id: 1,
    name: "Kraslice Ecommerce",
    links: {
      github: "https://github.com/lennerjiri/projekt_vejce_frontend",
      hosting: "https://kraslicelennerova.cz/",
    },
    frontImage: "kraslice1.webp",
    shortDescriptionRecent: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, ",
    ],
    shortDescriptionArchive:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel asdf nisl euismo sssdd as fas dfasdfasdfs ed vel nisl euismo,  ",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
      {
        name: "Nuxt.js",
        link: "https://nuxtjs.org/",
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/",
      },
    ],
  },
  {
    _id: 2,
    name: "Pantofle Ecommerce",
    links: {
      github: "https://github.com/lennerjiri/projekt_vejce_frontend",
      hosting: "https://kraslicelennerova.cz/",
    },
    frontImage: "kraslice1.webp",
    shortDescriptionRecent: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, ",
    ],
    shortDescriptionArchive:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel asdf nisl euismo sssdd as fas dfasdfasdfs ed vel nisl euismo, ",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
      {
        name: "Nuxt.js",
        link: "https://nuxtjs.org/",
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
@import "./homeView.styles.scss";
</style>
