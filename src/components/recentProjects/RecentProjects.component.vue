<template>
  <div class="projects-container__most-recent-container">
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
        <img :src="`/src/assets/img/projects/${project.frontImage}`" alt="" />
      </div>
      <div class="project__text-container">
        <div class="text-container__heading">
          <h3>{{ project.name }}</h3>
          <div>
            <!-- Links -->
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
        <p
          class="text-container__description"
          v-for="shortDescription of project.shortDescriptionRecent"
          :key="project.shortDescriptionRecent.indexOf(shortDescription)"
        >
          {{ shortDescription }}
        </p>
        <div class="text-container__footer">
          <div class="footer__technologies">
            <!-- technologies -->
            <a
              target="_blank"
              v-for="technology of project.technologies.slice(0, 3)"
              :key="project.technologies.indexOf(technology)"
              :href="technology.link"
              >{{ technology.name }}</a
            >
          </div>
          <!-- button -->
          <Button
            class="footer__button"
            :link="`/case-study/${project._id}`"
            text="Case study"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/button/LinkButton.component.vue";
import { gsap } from "gsap";
import { onMounted } from "vue";

// get data from props
const props = defineProps({
  projectsData: {
    type: Array,
    required: true,
  },
  firstLoad: {
    type: Boolean,
    required: true,
  },
});

onMounted(() => {
  if (!props.firstLoad) {
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
</script>

<style lang="scss" scoped>
@import "./recentProjects.styles.scss";
</style>
