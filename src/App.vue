<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, onMounted, provide, watch, nextTick } from "vue";
//import LoadingScreen from "@/components/loadingScreen/LoadingScreen.component.vue";
import HeaderNav from "@/components/headerNav/HeaderNav.component.vue";
import { gsap } from "gsap";

// Router
const route = useRoute();

// SVG Loading Screen
const loading = ref(true);

// GSAP Timeline init
let TL;

//Loading system
const loadingFunction = () => {
  setTimeout(() => {
    if (document.readyState === "complete") {
      loading.value = false;
      nextTick(() => {
        if (route.hash) {
          const el = document.getElementById(route.hash.slice(1));

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
        TL.play();
      });
    } else {
      // for that we use recursion
      return loadingFunction();
    }
  }, 5);
};

// Trigger loading system when app is mounted only at specific route
onMounted(() => {
  if (route.path === "/") {
    // loading screen is only shown on the home page

    TL = gsap.timeline({
      // paused: true,
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
</script>

<template>
  <div class="root" :class="{ 'root-scrollOff': loading }">
    <!-- <LoadingScreen
      v-if="loading"
      @onLoadingCompleted="onLoadingCompleted"
      @offLoadingCompleted="offLoadingCompleted"
    /> -->
    <HeaderNav />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="router" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <div class="root__social-networks">
      <a target="_blank" href="https://discord.com/users/426809360107307019/">
        <font-awesome-icon
          icon="fa-brands fa-discord"
          class="social-networks__icon"
        />
      </a>
      <a target="_blank" href="https://twitter.com/LennerJiri">
        <font-awesome-icon
          icon="fa-brands fa-twitter"
          class="social-networks__icon"
        />
      </a>
      <a target="_blank" v-if="false" href="">
        <font-awesome-icon
          icon="fa-brands fa-dribbble"
          class="social-networks__icon"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ji%C5%99%C3%AD-lenner-78a52520a/"
      >
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          class="social-networks__icon"
        />
      </a>
      <a target="_blank" href="https://github.com/lennerjiri">
        <font-awesome-icon
          icon="fa-brands fa-github"
          class="social-networks__icon"
        />
      </a>
      <div class="social-networks__line"></div>
    </div>
    <div class="root__email">
      <a class="email__email-link" href="mailto:ji.lenner@outlook.com"
        >ji.lenner@outlook.com</a
      >
      <div class="social-networks__line"></div>
    </div>
    <footer>
      <p class="footer__text">
        Made with <font-awesome-icon icon="fa-solid fa-heart" /> by Jiří Lenner
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.router-enter-from {
  opacity: 0;
}
.router-enter-active,
.router-leave-active {
  transition: 100ms ease-in-out;
}
.router-leave-to {
  opacity: 0;
}
</style>
