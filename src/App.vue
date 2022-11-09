<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, onMounted, provide, watch } from "vue";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen.component.vue";
import HeaderNav from "@/components/headerNav/HeaderNav.component.vue";
import { gsap } from "gsap";

// Router
const route = useRoute();

// SVG Loading Screen
const loading = ref(true);
let openAnimation = ref(false);
const closeAnimation = ref(false);

// Injection values to the SVG
provide("openAnimation", openAnimation);
provide("closeAnimation", closeAnimation);

// GSAP Timeline init
let TL;

// Loading system
const loadingFunction = () => {
  // opening animation runs on its own once the loading screen is mounted
  // set timeout waits until the animation plays and the page content is loaded
  setTimeout(() => {
    if (document.readyState === "complete" && openAnimation.value) {
      closeAnimation.value = true;
    } else {
      // for that we use recursion
      return loadingFunction();
    }
  }, 1000);
};

watch(
  () => loading.value,
  (val) => {
    if (val) {
      loadingFunction();
    }
  }
);

// Trigger loading system when app is mounted only at specific route

onMounted(() => {
  if (route.path === "/") {
    // loading screen is only shown on the home page

    TL = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "power4.inOut",
      },
    });

    TL.from(".container__logo", {
      y: -50,
      autoAlpha: 0,
    })
      .from(".link-container__link", {
        y: -50,
        autoAlpha: 0,
        stagger: 0.1,
      })
      .from(
        ".link-container__resume-button",
        {
          y: -50,
          autoAlpha: 0,
        },
        "-=0.4"
      )
      .from(".center-container__pre-intro", {
        y: 50,
        autoAlpha: 0,
      })
      .from(
        ".center-container__name",
        {
          y: 50,
          autoAlpha: 0,
        },
        "-=0.4"
      )
      .from(
        ".center-container__job",
        {
          y: 50,
          autoAlpha: 0,
        },
        "-=0.4"
      )
      .from(
        ".center-container__personal-description",
        {
          y: 50,
          autoAlpha: 0,
        },
        "-=0.4"
      )
      .from(
        ".center-container__learn-more-button",
        {
          y: 50,
          autoAlpha: 0,
        },
        "-=0.4"
      )
      .from(".social-networks__line", { height: 0 })
      .from(".social-networks__icon", {
        autoAlpha: 0,
        duration: 0.3,
        stagger: { each: 0.1, from: "end" },
      })
      .from(
        ".email__email-link",
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        "<"
      );

    document.onreadystatechange = () => {
      loadingFunction();
    };
  } else {
    loading.value = false;
  }
});

// onLoading animation played emit
const onLoadingCompleted = () => {
  openAnimation.value = true;
};

// offLoading animation played emit
const offLoadingCompleted = () => {
  // close the loading screen
  TL.play();
  loading.value = false;
};

// Scroll and top menu snap
</script>

<template>
  <div class="root" :class="{ 'root-scrollOff': loading }">
    <LoadingScreen
      v-if="loading"
      @onLoadingCompleted="onLoadingCompleted"
      @offLoadingCompleted="offLoadingCompleted"
    />
    <HeaderNav />
    <main>
      <!-- <div style="height: 500px"></div> -->
      <RouterView />
      <!-- <div style="height: 500px"></div> -->
    </main>
    <div class="root__social-networks">
      <font-awesome-icon
        icon="fa-brands fa-discord"
        class="social-networks__icon"
      />
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="social-networks__icon"
      />
      <font-awesome-icon
        icon="fa-brands fa-dribbble"
        class="social-networks__icon"
      />
      <font-awesome-icon
        icon="fa-brands fa-linkedin"
        class="social-networks__icon"
      />
      <font-awesome-icon
        icon="fa-brands fa-github"
        class="social-networks__icon"
      />
      <div class="social-networks__line"></div>
    </div>
    <div class="root__email">
      <a class="email__email-link" href="mailto:ji.lenner@outlook.com"
        >ji.lenner@outlook.com</a
      >
      <div class="social-networks__line"></div>
    </div>
    <footer></footer>
  </div>
</template>
