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

// SVG emits
const emit = defineEmits(["onLoadingCompleted", "offLoadingCompleted"]);
const onLoadingCompleted = () => {
  emit("onLoadingCompleted");
};
const offLoadingCompleted = () => {
  emit("offLoadingCompleted");
};
</script>

<style lang="scss" scoped>
@import "./loadingScreen.styles.scss";
</style>
