<template>
  <header>
    <div class="header__container">
      <!-- logo -->
      <div class="container__logo">
        <a href="/">
          <img src="@/assets/img/staticLogo.svg" alt="logo" />
        </a>
      </div>
      <!-- text -->
      <div class="container__link-container">
        <ul>
          <li class="link-container__link">
            <a href="/#about">
              <span>01.</span>
              About
            </a>
          </li>
          <li class="link-container__link">
            <a href="/#experience">
              <span>02.</span>
              Experience
            </a>
          </li>
          <li class="link-container__link">
            <a href="/#projects">
              <span>03.</span>
              Projects
            </a>
          </li>
          <!-- <li class="link-container__link">
            <router-link to="/blog">
              <span>04.</span>
              Blog
            </router-link>
          </li> -->
          <li class="link-container__link">
            <a href="/#contact">
              <span>04.</span>
              Contact
            </a>
          </li>
          <Button
            @click="openPdf"
            class="link-container__resume-button"
            text="Resume"
          />
        </ul>
      </div>
      <!-- hamburger -->
      <div class="container__hamburgerMenu" v-if="false">
        <HamburgerMenu />
      </div>
    </div>
  </header>
</template>

<script setup>
import HamburgerMenu from "@/assets/img/svgHamburgerMenu.component.vue";
import Button from "@/components/button/LinkButton.component.vue";

import { gsap } from "gsap";

let previousScroll = null;

const openPdf = () => {
  window.open("/src/assets/other/resume-lenner-jiri.pdf", "fullscreen=yes");
};

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition <= 100) {
    gsap.to("header", {
      y: 0,
      boxShadow:
        "rgba(255, 255, 255, 0) 0px 0px 0px 0px,rgba(255, 255, 255, 0) 0px 0px 0px 0px",
      height: "6rem",
      duration: 0.5,
      ease: "power4.out",
    });
  } else if (scrollPosition < previousScroll) {
    gsap.to("header", {
      y: 0,
      height: "5rem",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      duration: 0.5,
      ease: "power4.out",
    });
    previousScroll = scrollPosition;
  } else {
    gsap.to("header", {
      y: -80,
      height: "5rem",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      duration: 0.5,
      ease: "power4.out",
    });
    previousScroll = scrollPosition;
  }
});
</script>

<style lang="scss" scoped>
@import "./headerNav.styles.scss";
</style>
