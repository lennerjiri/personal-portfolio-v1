<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, provide } from "vue";
import LoadingScreen from "@/components/loadingScreen/loadingScreen.component.vue";

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
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>
