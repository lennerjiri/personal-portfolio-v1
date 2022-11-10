import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", () => {
  // State
  const projects = reactive([
    {
      _id: "kraslice-ecommerce",
      name: "Kraslice ecommerce",
      links: {
        github:
          "https://github.com/lennerjiri/kraslice-ecommerce-frontend-v1.git",
        hosting: "https://kraslicelennerova.cz/",
      },
      frontImage: "kraslice1.webp",
      shortDescriptionRecent: [
        "Ecommerce website for grandmothers business of selling easter eggs and art.",
        "My goal was to create a large and easy to use platform for her and her customers.",
      ],
      shortDescriptionArchive:
        "Ecommerce website for grandmothers business of selling easter eggs and art.",
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
        {
          name: "Express.js",
          link: "https://expressjs.com/",
        },
        {
          name: "Vuetify",
          link: "https://vuetifyjs.com/en/",
        },
      ],
    },
    {
      _id: "flowershop-frida",
      name: "Flowershop Frida",
      links: {
        github: "https://github.com/ssps-cajthaml/3-mvop-wbf-zp-1",
      },
      frontImage: "frida1.webp",
      shortDescriptionRecent: [
        "I designed and build a website for a local flower shop in collaboration with several of my friends.",
        "We needed to an artistic UI which would represent the flowershop atmosphere.",
      ],
      shortDescriptionArchive:
        "I designed and build a website for a local flower shop in collaboration with several of my friends.",
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
      ],
    },
    {
      _id: "portfolio-template",
      name: "Portfolio template",
      links: {
        github: "https://github.com/lennerjiri/portfolio-template.git",
      },
      frontImage: "template1.webp",
      shortDescriptionRecent: [
        "I build a Wordpress template for my math teacher to use to support his private lesson business.",
        "I wanted to make the page and especially the content management as easy to use as possible.",
      ],
      shortDescriptionArchive:
        "I build a Wordpress template for my math teacher to use to support his private lesson business.",
      technologies: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "Wordpress",
          link: "https://wordpress.com/",
        },
      ],
    },
    {
      _id: "monkey-clicker-game",
      name: "Monkey clicker game",
      links: {
        github: "https://github.com/lennerjiri/monkey-clicker.git",
      },
      frontImage: "monkey2.webp",
      shortDescriptionRecent: [
        "A fun project for my brothers birthday. My goal was to solidify my knowledge of Vue.js.",
        "Building something other than a website proved to be an interesting, but challenging venture.",
      ],
      shortDescriptionArchive:
        "A fun project for my brothers birthday. I wanted to solidify my newly gained knowledge of Vue.js and create a fun game for him.",
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
      ],
    },
  ]);

  // Getters
  const getProjectById = (id) => projects.find((project) => project._id === id);

  // Actions

  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);

  // function increment() {
  //   count.value++;
  // }

  return { projects, getProjectById };
});
