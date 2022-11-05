<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, provide } from "vue";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen.component.vue";
import HeaderNav from "@/components/headerNav/HeaderNav.component.vue";

// SVG Loading Screen
const loading = ref(true);
let openAnimation = false;
const closeAnimation = ref(false);

// Injection values to the SVG
provide("closeAnimation", closeAnimation);
provide("openAnimation", openAnimation);

// Loading system
const loadingFunction = () => {
  // opening animation runs on its own once the loading screen is mounted
  // set timeout waits until the animation plays and the page content is loaded
  setTimeout(() => {
    if (document.readyState === "complete" && openAnimation) {
      closeAnimation.value = true;
    } else {
      // for that we use recursion

      return loadingFunction();
    }
  }, 1000);
};

// Trigger loading system when app is mounted
onMounted(() => {
  document.onreadystatechange = () => {
    loadingFunction();
  };
});

// onLoading animation played emit
const onLoadingCompleted = () => {
  openAnimation = true;
};

// offLoading animation played emit
const offLoadingCompleted = () => {
  // close the loading screen
  console.log("offLoadingCompleted");

  loading.value = false;
};
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
      <RouterView />
    </main>
    <div class="root__social-networks">
      <div class="social-networks__line">
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </div>
    </div>
    <div class="root__email"></div>
    <footer></footer>
  </div>
</template>
