<template>
  <div class="page-container__experience" id="experience">
    <div class="experience__center-container">
      <div class="center-container__experience-heading">
        <h2>
          <span>02.</span>
          Experience
        </h2>
        <div class="experience-heading__divider"></div>
      </div>
      <div class="center-container__experience-container">
        <div class="experience-container__slider-container">
          <div class="slider-container__divider"></div>
          <div class="slider-container__divider-line"></div>
          <div
            class="slider-container__select"
            v-for="job of jobs"
            :key="jobs.indexOf(job)"
            v-on:click="selectJob(jobs.indexOf(job))"
            :class="{
              'slider-container__select--selected':
                selectedJob === jobs.indexOf(job) && !loadingJob,
            }"
          >
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
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const loadingJob = ref(true);
const selectedJob = ref(0);
const jobs = [
  {
    name: "Actum Digital",
    position: "Junior Frontend developer",
    date: "2020 - 2022",
    description: [
      "At Actum digital, I started as an Intern as a part of my high school education. After getting introduced to their culture and practices, I had to completely reevaluate the way I had worked until that moment, since this was the very first time experience I have had with the corporate environment.",
      "I was thought the way, projects are planned and how developers collaborate on large projects. My code quality has also improved since I received regular feedbacks form my work colleagues.",
      "The internship resulted in a job offer by my superiors. Since then, I have continued to build on top of my knowledge as part of my work activity. I learned and implemented many modern and complex techniques of building applications such as the headless architecture and server side rendering.",
    ],
  },
  {
    name: "STRV",
    position: "Student / Intern",
    date: "2022",
    description: [
      "During the summer of 2022, I was looking for a way to further enhance my skills. I found out about the STRV Academy, which is a 3 month long selective program, where I was able to work alongside STRV developers on real projects and learn from the best in the industry.",
      "The reason I joined this Academy, was because I needed to improve my backend development skills in Node.js and learn techniques from experts in this field for my upcoming projects this year. First, however, I had to pass a tech interview and prove my knowledge of Node.js and backend development before being accepted. At STRV I certainly learned a lot and acquired valuable experience and connections, that will last for a lifetime.",
    ],
  },
  {
    name: "Apploud Digital",
    position: "Intermediate Frontend developer",
    date: "2022 - present",
    description: [
      "In recent months, I have been looking for a way to further develop my skills. The best opportunity, so far, was a job offer from the company Applaud Digital. I find this company especially interesting, because compared to my previous work experiences, they, as a company, are significantly smaller, which allows them to be less conservative about the technology and work principles they use and stay open to new technologies on the market.",
      "At the moment, I am working on improving my skills of TypeScript language extension and also building on my SSR skills in Nuxt.js. The requirements for this job are high, however, I will soon be capable of accepting their offer and further continue my journey as a part-time developer.",
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

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page-container__experience",
        start: "top 75%",
        end: "top 25%",
        //markers: true,
      },
      defaults: { ease: "power1.inOut", duration: 0.5 },
    })
    .from(".center-container__experience-heading h2", {
      autoAlpha: 0,
      y: -10,
    })
    .from(
      ".center-container__experience-heading .experience-heading__divider",
      {
        autoAlpha: 0,
        flexGrow: 0,
      }
    )
    .from(".slider-container__divider-line", {
      autoAlpha: 0,
      height: 0,
    })
    .from(".slider-container__select", {
      autoAlpha: 0,
      y: -10,
      stagger: 0.25,
    })
    .from(".slider-container__divider", {
      autoAlpha: 0,
    })
    .add(() => {
      loadingJob.value = false;
    })
    .from(".experience-container__content", {
      autoAlpha: 0,
      y: -10,
    });
});
</script>

<style lang="scss" scoped>
@import "./experience.styles.scss";
</style>
