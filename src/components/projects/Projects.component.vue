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
import { useDataStore } from "@/stores/data.js";
import ArchiveProjects from "@/components/archiveProjects/ArchiveProjects.component.vue";
import RecentProjects from "@/components/recentProjects/RecentProjects.component.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const store = useDataStore();

const firstLoad = ref(true);
const selectedSwitch = ref(0);
const projectsData = store.projects;

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
