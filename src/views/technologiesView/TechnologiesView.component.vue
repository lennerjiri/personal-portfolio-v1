<template>
  <div class="main__page-container">
    <div class="page-container__center-container">
      <!-- Heading -->
      <div class="center-container__technologies-heading">
        <h2>TECHNOLOGY</h2>
        <p>I work with</p>
      </div>
      <!-- Tree -->
      <div class="center-container__tree-container">
        <!-- Root -->
        <div class="tree-container__tree-root">
          <div class="tree-root__infinity">∞</div>
        </div>

        <!-- Timeline -->
        <div class="tree-container__tree-branch--year--1">
          <p class="tree-text">HTML & CSS</p>
          <div></div>
          <p class="tree-year">2020</p>
        </div>
        <div class="tree-container__tree-branch--normal--1">
          <p class="tree-text">JavaScript</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--year--2">
          <p class="tree-text">SCSS</p>
          <div></div>
          <p class="tree-year">2020</p>
        </div>
        <div class="tree-container__tree-branch--normal--2">
          <p class="tree-text">Vue.js</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--normal--3">
          <p class="tree-text">C</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--normal--4">
          <p class="tree-text">Node.js & Express.js</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--year--3">
          <p class="tree-text">Vue.js 3</p>
          <div></div>
          <p class="tree-year">2020</p>
        </div>
        <div class="tree-container__tree-branch--normal--5">
          <p class="tree-text">TypeScript</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--normal--6">
          <p class="tree-text">Koa.js</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--normal--7">
          <p class="tree-text">Nuxt.js</p>
          <div></div>
        </div>
        <div class="tree-container__tree-branch--normal--8">
          <p class="tree-text">R</p>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { onMounted } from "vue";

onMounted(() => {
  // ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Tree animation

  const TL = gsap.timeline();

  // Title

  TL.from(".center-container__technologies-heading h2", {
    y: -50,
    autoAlpha: 0,
  }).from(
    ".center-container__technologies-heading p",
    {
      y: -50,
      autoAlpha: 0,
    },
    "-=0.4"
  );

  // Tree

  const TLTREE = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".main__page-container",
      start: "top top",
      end: "bottom bottom",
      //markers: true,
      scrub: true,
    },
  });

  TLTREE.from(".tree-container__tree-root", {
    height: 0,
  })
    .from(".tree-container__tree-branch--year--1 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--year--1 .tree-text ", {
      autoAlpha: 0,
      x: -50,
    })
    .from(
      ".tree-container__tree-branch--year--1 .tree-year ",
      {
        autoAlpha: 0,
        x: 50,
      },
      "<"
    )
    .from(".tree-container__tree-branch--normal--1 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--1 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })

    .from(".tree-container__tree-branch--year--2 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--year--2 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(
      ".tree-container__tree-branch--year--2 .tree-year",
      {
        x: 50,
        autoAlpha: 0,
      },
      "<"
    )
    .from(".tree-container__tree-branch--normal--2 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--2 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--3 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--3 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--4 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--4 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })

    .from(".tree-container__tree-branch--year--3 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--year--3 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(
      ".tree-container__tree-branch--year--3 .tree-year",
      {
        x: 50,
        autoAlpha: 0,
      },
      "<"
    )
    .from(".tree-container__tree-branch--normal--5 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--5 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--6 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--6 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--7 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--7 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--8 div", {
      width: 0,
      autoAlpha: 0,
    })
    .from(".tree-container__tree-branch--normal--8 .tree-text", {
      x: -50,
      autoAlpha: 0,
    })
    .from(".tree-root__infinity", {
      autoAlpha: 0,
      y: 50,
      scale: 0,
    });
});
</script>

<style lang="scss" scoped>
@import "./technologiesView.styles.scss";
</style>
