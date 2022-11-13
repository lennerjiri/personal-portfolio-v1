<template>
  <div class="page-container__about-me-container" id="about">
    <div class="about-me-container__center-container">
      <div class="center-container__left-container">
        <div class="left-container__about-heading">
          <h2>
            <span>01.</span>
            About me
          </h2>
          <div class="about-heading__divider"></div>
        </div>
        <p>
          I am a student working as a fullstack web developer and user interface
          designer aside.
          <br />
          <br />
          My job is to develop Web applications. I am responsible for the
          coding, design, and layout of web applications. My goal is to deliver
          my clients a solution that they will want to print and hang on wall.
          <br />
          <br />
          As you can guess, I am an admirer of art, but a web developer can also
          be a web programmer or a web application developer. Apart from
          building client-side user interfaces, I also specialize in building
          custom backend systems for data storage and manipulation. Combining
          these two worlds can create the very best user experience. Find out
          more about the
          <router-link to="/technologies"> technologies I use! </router-link>
        </p>
      </div>
      <div class="center-container__right-container">
        <div class="right-container__image-highlight">
          <img class="image-highlight__image" :src="imageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const imageUrl = new URL("/src/assets/img/profilePhoto.jpg", import.meta.url);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page-container__about-me-container",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".left-container__about-heading h2", {
      y: 100,
      autoAlpha: 0,
    })
    .from(".left-container__about-heading .about-heading__divider", {
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
});
</script>

<style lang="scss" scoped>
@import "./aboutMe.styles.scss";
</style>
