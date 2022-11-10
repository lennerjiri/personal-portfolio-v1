<template>
  <div class="page-container__projects" id="projects">
    <div class="projects__center-container">
      <div class="center-container__projects-heading">
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
            'switch__button--selected': selectedSwitch === 0 && !firstLoad,
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
        <RecentProjects
          v-if="selectedSwitch === 0"
          :projectsData="projectsData"
          :firstLoad="firstLoad"
        />
        <ArchiveProjects
          v-if="selectedSwitch === 1"
          :projectsData="projectsData"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ArchiveProjects from "@/components/archiveProjects/ArchiveProjects.component.vue";
import RecentProjects from "@/components/recentProjects/RecentProjects.component.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const firstLoad = ref(true);
const selectedSwitch = ref(0);
const projectsData = ref([
  {
    _id: 0,
    name: "Kraslice ecommerce",
    links: {
      github:
        "https://github.com/lennerjiri/kraslice-ecommerce-frontend-v1.git",
      hosting: "https://kraslicelennerova.cz/",
    },
    frontImage: "kraslice1.webp",
    shortDescriptionRecent: [
      "Ecommerce website for grandmothers business of selling easter eggs and art.",
      "My goal was to create a large and easy to use platform for her and her customers.",
    ],
    shortDescriptionArchive:
      "Ecommerce website for grandmothers business of selling easter eggs and art.",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
      {
        name: "Express.js",
        link: "https://expressjs.com/",
      },
      {
        name: "Vuetify",
        link: "https://vuetifyjs.com/en/",
      },
    ],
  },
  {
    _id: 1,
    name: "Flowershop Frida",
    links: {
      github: "https://github.com/ssps-cajthaml/3-mvop-wbf-zp-1",
    },
    frontImage: "frida1.webp",
    shortDescriptionRecent: [
      "I designed and build a website for a local flower shop in collaboration with several of my friends.",
      "We needed to an artistic UI which would represent the flowershop atmosphere.",
    ],
    shortDescriptionArchive:
      "I designed and build a website for a local flower shop in collaboration with several of my friends.",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
    ],
  },
  {
    _id: 2,
    name: "Portfolio template",
    links: {
      github: "https://github.com/lennerjiri/portfolio-template.git",
    },
    frontImage: "template1.webp",
    shortDescriptionRecent: [
      "I build a Wordpress template for my math teacher to use to support his private lesson business.",
      "I wanted to make the page and especially the content management as easy to use as possible.",
    ],
    shortDescriptionArchive:
      "I build a Wordpress template for my math teacher to use to support his private lesson business.",
    technologies: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Wordpress",
        link: "https://wordpress.com/",
      },
    ],
  },
  {
    _id: 2,
    name: "Monkey clicker game",
    links: {
      github: "https://github.com/lennerjiri/monkey-clicker.git",
    },
    frontImage: "monkey2.webp",
    shortDescriptionRecent: [
      "A fun project for my brothers birthday. My goal was to solidify my knowledge of Vue.js.",
      "Building something other than a website proved to be an interesting, but challenging venture.",
    ],
    shortDescriptionArchive:
      "A fun project for my brothers birthday. I wanted to solidify my newly gained knowledge of Vue.js and create a fun game for him.",
    technologies: [
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
    ],
  },
]);

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

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page-container__projects",
        start: "top 75%",
        end: "top 25%",
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".projects__center-container .center-container__projects-heading", {
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
      if (firstLoad.value) {
        firstLoad.value = false;

        const images = gsap.utils.toArray(".project__image-container");
        const texts = gsap.utils.toArray(".project__text-container");

        for (const image of images) {
          if (images.indexOf(image) % 2 === 0) {
            gsap.from(image, {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power1.inOut",
              x: -100,
              delay: 0.1 * images.indexOf(image),
            });
          } else {
            gsap.from(image, {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power1.inOut",
              x: 100,
              delay: 0.1 * images.indexOf(image),
            });
          }
        }

        for (const text of texts) {
          if (texts.indexOf(text) % 2 === 0) {
            gsap.from(text, {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power1.inOut",
              x: 100,
              delay: 0.1 * texts.indexOf(text),
            });
          } else {
            gsap.from(text, {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power1.inOut",
              x: -100,
              delay: 0.1 * texts.indexOf(text),
            });
          }
        }
      }
    });
});
</script>

<style lang="scss" scoped>
@import "./projects.styles.scss";
</style>
