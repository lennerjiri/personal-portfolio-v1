<template>
  <div class="main__page-container">
    <Introduction />
    <AboutMe />
    <Experience />
    <Projects />
    <ContactMe />
    <div class="page-container__contact"></div>
  </div>
</template>

<script setup>
import Introduction from "@/components/introduction/Introduction.component.vue";
import AboutMe from "@/components/aboutMe/AboutMe.component.vue";
import Experience from "@/components/experience/Experience.component.vue";
import Projects from "@/components/projects/Projects.component.vue";
import ContactMe from "@/components/contactMe/ContactMe.component.vue";
</script>

<style lang="scss" scoped>
@import "./homeView.styles.scss";
</style>
