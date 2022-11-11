<template>
  <div class="link-button" @click="click">{{ text }}</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const click = () => {
  if (props.link) {
    router.push(props.link);
  }
};
</script>

<style lang="scss" scoped>
@import "./linkButton.styles.scss";
</style>
