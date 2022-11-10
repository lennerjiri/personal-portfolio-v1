<template>
  <div class="main__case-study-container">
    <div class="case-study-container__center-container">
      <div class="center-container__case-study-header">
        <p>Build in: {{ project.date }}</p>
        <h2>{{ project.name }}</h2>
        <div class="case-study-header__links">
          <a
            target="_blank"
            v-if="project.links.github"
            :href="project.links.github"
          >
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
          <a
            target="_blank"
            v-if="project.links.hosting"
            :href="project.links.hosting"
          >
            <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
          </a>
        </div>
      </div>
      <div class="center-container__case-study-project">
        <div
          class="case-study-project__project-heading case-study-project-heading"
        >
          <h3>
            <span>01 </span>
            The Project
          </h3>
        </div>
        <p
          v-for="projectDescription of project.projectDescription"
          :key="project.projectDescription.indexOf(projectDescription)"
        >
          {{ projectDescription }}
        </p>
      </div>
      <div class="center-container__case-study-solution">
        <div class="case-study-solution__solution-heading">
          <h3>
            <span>02 </span>
            The Solution
          </h3>
        </div>
        <p
          v-for="projectSolution of project.projectSolution"
          :key="project.projectSolution.indexOf(projectSolution)"
        >
          {{ projectSolution }}
        </p>
        <div class="case-study-solution__solution-tech">
          <p class="solution-tech__sign">Dev Stack:</p>
          <div class="solution-tech__dev-stack">
            <a
              v-for="technology of project.technologies"
              :key="project.technologies.indexOf(technology)"
              :href="technology.link"
              target="_blank"
            >
              {{ technology.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="center-container__case-study-gallery">
        <div class="case-study-gallery__gallery-heading">
          <h3>
            <span>03 </span>
            Gallery
          </h3>
        </div>
        <div class="case-study-gallery__image-grid">
          <div
            v-for="image of project.allImages"
            :key="project.allImages.indexOf(image)"
            class="image-grid__img-container"
          >
            <img
              :src="dynamicImages[project.allImages.indexOf(image)]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useDataStore } from "@/stores/data.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getConstantType } from "@vue/compiler-core";

const store = useDataStore();
const route = useRoute();

gsap.registerPlugin(ScrollTrigger);

const project = store.getProjectById(route.params.id);
// Images
const dynamicImages = computed(() => {
  const images = [];

  for (const image of project.allImages) {
    images.push(new URL(`/src/assets/img/projects/${image}`, import.meta.url));
  }
  return images;
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main__case-study-container",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
    })
    .from(".center-container__case-study-header p", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
    })
    .from(".center-container__case-study-header h2", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
    })
    .from(".center-container__case-study-header .case-study-header__links a", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
      stagger: 0.1,
    })
    .from(".case-study-project__project-heading h3", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
    })
    .from(".center-container__case-study-project p", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
      stagger: 0.1,
    })
    .from(".case-study-solution__solution-heading h3", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
    })
    .from(".center-container__case-study-solution p", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
      stagger: 0.1,
    })
    .from(".case-study-solution__solution-tech", {
      x: -50,
      autoAlpha: 0,
      duration: 0.25,
    });

  gsap.from(".case-study-gallery__gallery-heading h3", {
    scrollTrigger: {
      trigger: ".center-container__case-study-gallery",
      start: "top 75%",
      end: "top 25%",
      //markers: true,
    },
    x: -50,
    autoAlpha: 0,
    duration: 0.25,
  });

  gsap.utils.toArray(".image-grid__img-container").forEach((container) => {
    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
    });
  });
});
</script>

<style lang="scss" scoped>
@import "./caseStudyView.styles.scss";
</style>
