<template>
  <div class="main__page-container">
    <div class="page-container__intro-container">
      <div class="intro-container__center-container">
        <p class="center-container__pre-intro">Hi, my name is</p>
        <h1 class="center-container__name"># Jiří Lenner</h1>
        <h2 class="center-container__job">## I am a web developer</h2>
        <p class="center-container__personal-description">
          I am a fullstack web developer focusing on delivering an
          innovative,world-class web experience. I care deeply about creating
          beautiful, and useful products that help people to make a difference.
        </p>
        <Button
          class="center-container__learn-more-button"
          text="Learn more!"
        />
      </div>
    </div>
    <div class="page-container__about-me-container" id="about">
      <div class="about-me-container__center-container">
        <div class="center-container__left-container">
          <div class="left-container__heading">
            <h2>
              <span>01.</span>
              About me
            </h2>
            <div class="heading__divider"></div>
          </div>
          <p>
            lormem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            <br />
            <br />
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            <br />
            <br />
            luctuslormem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,
            luctus
            <router-link to="/technologies"> Technologies I use </router-link>
          </p>
        </div>
        <div class="center-container__right-container">
          <div class="right-container__image-highlight">
            <img
              class="image-highlight__image"
              src="../../assets/img/IMG_1408 4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="page-container__experience" id="experience">
      <div class="experience__center-container">
        <div class="center-container__heading">
          <h2>
            <span>02.</span>
            Experience
          </h2>
          <div class="heading__divider"></div>
        </div>
        <div class="center-container__experience-container">
          <div class="experience-container__slider-container">
            <div class="slider-container__divider"></div>
            <div
              class="slider-container__select"
              v-for="job of jobs"
              :key="jobs.indexOf(job)"
              v-on:click="selectJob(jobs.indexOf(job))"
              :class="{
                'slider-container__select--selected':
                  selectedJob === jobs.indexOf(job),
              }"
            >
              <div></div>
              <p>{{ job.name }}</p>
            </div>
          </div>
          <div class="experience-container__content">
            <h3 class="content__job-position">
              {{ selectedJobInfo.position }} @ {{ selectedJobInfo.name }}
            </h3>
            <p class="content__job-date">{{ selectedJobInfo.date }}</p>

            <div
              class="content__job-description"
              v-for="description of selectedJobInfo.description"
              :key="selectedJobInfo.description.indexOf(description)"
            >
              <font-awesome-icon icon="fa-solid fa-caret-right" />
              <p>
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-container__projects" id="projects">
      <div class="projects__center-container">
        <div class="center-container__heading">
          <h2>
            <span>03.</span>
            Projects
          </h2>
        </div>
        <div class="center-container__switch">
          <div class="switch__divider"></div>
          <div
            class="switch__button"
            :class="{
              'switch__button--selected': selectedSwitch === 0,
            }"
            @click="selectSwitch(0)"
          >
            <p>Most recent</p>
            <div></div>
          </div>
          <div
            class="switch__button"
            :class="{
              'switch__button--selected': selectedSwitch === 1,
            }"
            @click="selectSwitch(1)"
          >
            <p>Archive</p>
            <div></div>
          </div>
        </div>
        <div class="center-container__projects-container"></div>
      </div>
    </div>
    <div class="page-container__contact"></div>
  </div>
</template>

<script setup>
import Button from "@/components/button/LinkButton.component.vue";
import { ref, computed } from "vue";
import { gsap } from "gsap";

const selectedJob = ref(0);
const jobs = [
  {
    name: "Actum Digital",
    position: "Frontend developer",
    date: "2020 - 2021",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu  asdfas fdasfasfsadf",
    ],
  },
  {
    name: "Uplaud",
    position: "Frontend developer",
    date: "2021 - 2021",
    description: [
      "Lorem nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. u,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor sit amet, , luctus nisl eu, luctus nisl eu, luctus nconsectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismodisl eu  asdfas fdasfasfsadf",
    ],
  },
  {
    name: "Whatever",
    position: "Frontend developer",
    date: "2021 - present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adi, luctus nisl eu, luctus nisl eu, luctus n euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu ",
      "Lorem ip, luctus nisl eu, luctus nisl eu, luctus n, consectetur adipiscing elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu asdf ",
      "Lorem ipsum dolor , luctus nisl eu, luctus nisl eu, luctus ning elit. Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu,Sed vel nisl euismod, luctus nisl eu, luctus nisl eu, luctus nisl eu  asdfas fdasfasfsadf",
    ],
  },
];

const selectedJobInfo = computed(() => {
  return jobs[selectedJob.value];
});

const selectJob = (jobIndex) => {
  if (selectedJob.value === jobIndex) return;

  const TL = gsap.timeline();

  // Decrease

  TL.to(".experience-container__content", {
    ease: "power1.none",
    y: 10,
    autoAlpha: 0,
    duration: 0.1,
  })
    .add(() => {
      selectedJob.value = jobIndex;
    })
    .to(".slider-container__divider", {
      ease: "power1.inOut",
      duration: 0.1,
      y: jobIndex * 52,
    })
    .to(".experience-container__content", {
      ease: "power1.none",
      y: -10,
      autoAlpha: 1,
      duration: 0.1,
    });
};
// Projects
const selectedSwitch = ref(0);
const selectSwitch = (switchIndex) => {
  selectedSwitch.value = switchIndex;

  const TL = gsap.timeline();

  TL.to(".switch__divider", {
    ease: "power1.inOut",
    duration: 0.1,
    x: switchIndex * 224,
  });
};
</script>

<style lang="scss" scoped>
@import "./homeView.styles.scss";
</style>
