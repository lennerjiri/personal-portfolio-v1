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
