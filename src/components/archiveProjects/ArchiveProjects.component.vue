<template>
  <div class="projects-container__project-archive-container">
    <div
      class="project-archive-container__archive-project"
      v-for="project of projectsData"
      :key="project._id"
      @click="$router.push(`/case-study/${project._id}`)"
    >
      <div class="archive-project__links-container">
        <font-awesome-icon icon="fa-regular fa-folder" />
        <div>
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
      <h3 class="archive-project__heading">{{ project.name }}</h3>
      <p class="archive-project__description">
        {{ project.shortDescriptionArchive }}
      </p>
      <div class="archive-project__technologies">
        <p
          v-for="technology of project.technologies.slice(0, 3)"
          :key="project.technologies.indexOf(technology)"
        >
          {{ technology.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

// projectdata
const props = defineProps({
  projectsData: {
    type: Array,
    required: true,
  },
});

// animations

onMounted(() => {
  gsap.from(".project-archive-container__archive-project", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.1,
  });
});
</script>

<style lang="scss" scoped>
@import "./archiveProjects.styles.scss";
</style>
