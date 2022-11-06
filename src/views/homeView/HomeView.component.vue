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
    <div class="page-container__about-me-container"></div>
    <div class="page-container__experience"></div>
    <div class="page-container__projects"></div>
    <div class="page-container__contact"></div>
  </div>
</template>

<script setup>
import Button from "@/components/button/LinkButton.component.vue";
</script>

<style lang="scss" scoped>
@import "./homeView.styles.scss";
</style>
