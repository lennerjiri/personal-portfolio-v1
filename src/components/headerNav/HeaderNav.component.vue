<template>
  <header>
    <div class="header__container">
      <!-- logo -->
      <div class="container__logo">
        <router-link to="/">
          <img src="@/assets/img/staticLogo.svg" alt="logo" />
        </router-link>
      </div>
      <!-- text -->
      <div class="container__linkContainer">
        <ul>
          <li>
            <router-link to="/">
              <span>01.</span>
              About
            </router-link>
          </li>
          <li class="li--selected-nav-link">
            <router-link to="/experience">
              <span>02.</span>
              Experience
            </router-link>
          </li>
          <li>
            <router-link to="/projects">
              <span>03.</span>
              Projects
            </router-link>
          </li>
          <li>
            <router-link to="/blog">
              <span>04.</span>
              Blog
            </router-link>
          </li>
          <li>
            <router-link to="/#contact">
              <span>05.</span>
              Contact
            </router-link>
          </li>
          <div class="linkContainer__ul__resumeButton">Resume</div>
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
import { gsap } from "gsap";

let previousScroll = null;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    gsap.to("header", {
      y: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  } else if (scrollPosition < previousScroll) {
    gsap.to("header", {
      y: 0,
      duration: 0.5,
      ease: "power4.out",
    });
    previousScroll = scrollPosition;
  } else {
    gsap.to("header", {
      y: -80,
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
