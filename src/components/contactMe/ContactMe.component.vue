<template>
  <div class="page-container__contact" id="contact">
    <div class="contact__center-container">
      <div class="center-container__form-heading">
        <h2>
          <span>04.</span>
          Contact me
        </h2>
        <p>
          Interested in working with me? <br />
          Feel free to drop me a message via my email, social media or by this
          form!
        </p>
      </div>
      <div class="center-container__form-container">
        <form class="formContainer__form">
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Subject" type="text" />
          <textarea
            placeholder="What is on your mind?"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div class="form__submit-container">
            <p v-if="false">Success!</p>
            <p v-if="false">Failed!</p>
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Button from "@/components/button/LinkButton.component.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page-container__contact",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.25 },
    })
    .from(".center-container__form-heading h2", {
      autoAlpha: 0,
      y: -10,
    })
    .from(".center-container__form-heading p", {
      autoAlpha: 0,
      y: -10,
    })
    .from(".formContainer__form input", {
      autoAlpha: 0,
      y: -10,
      stagger: 0.25,
    })
    .from(".formContainer__form textarea", {
      autoAlpha: 0,
      y: -10,
    })
    .from(".form__submit-container div", {
      autoAlpha: 0,
      x: -10,
    });
});
</script>

<style lang="scss" scoped>
@import "./contactMe.styles.scss";
</style>
