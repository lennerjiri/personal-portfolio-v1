<template>
  <div class="root__loading">
    <svgLoading
      @onLoadingCompleted="onLoadingCompleted"
      @offLoadingCompleted="offLoadingCompleted"
    />
  </div>
</template>

<script setup>
// SVG component
import svgLoading from "@/assets/img/svgLoading.component.vue";
import { gsap } from "gsap";

// SVG emits
const emit = defineEmits(["onLoadingCompleted", "offLoadingCompleted"]);
const onLoadingCompleted = () => {
  emit("onLoadingCompleted");
};
const offLoadingCompleted = () => {
  // Animation
  gsap.to(".root__loading", {
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    onComplete: () => {
      emit("offLoadingCompleted");
    },
  });
};
</script>

<style lang="scss" scoped>
@import "./loadingScreen.styles.scss";
</style>
