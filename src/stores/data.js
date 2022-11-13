import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", () => {
  // State
  const projects = reactive([
    {
      _id: "kraslice-ecommerce",
      date: "2022",
      name: "Kraslice ecommerce",
      links: {
        github:
          "https://github.com/lennerjiri/kraslice-ecommerce-frontend-v1.git",
        hosting: "https://kraslicelennerova.cz/",
      },
      frontImage: "kraslice1.webp",
      shortDescriptionRecent: [
        "Ecommerce website for grandmother's business selling holiday goods and art.",
        "My goal was to create a large, easy to use platform for her and her customers.",
      ],
      shortDescriptionArchive:
        "Ecommerce website for grandmother's business selling holiday goods and art.",
      projectDescription: [
        "Originally started for school, this project soon turned into a large and complex solution I designed and built for my grandmother's business. The goal of this project was to build a simple user interface that would make it easy for her client segment (middle age/seniors) to use. The platform also looks artistic, since it is used to sell art.",
        "I was also tasked with integrating an online payment system with email systems. However, by far, the hardest task was to integrate a secure backend API. There, users can request and edit data with a content management system, so that the process is as easy as possible for someone who is not familiar with programming.",
      ],
      projectSolution: [
        "I solved this problem by designing the application's sketch in Figma, including both the web application and content management system. I then moved on to development, first creating a secure API for data storage and management. In addition, I built the ecommerce web app and the content management system.",
        "During the entire project I used Vue.js. For the content management system, I also included a simple Vue.js component library: Vuetify, which helped me make the building process significantly easier, faster, and more secure. My database of choice is the MongoDB, which works excellently with express.js on the backend.",
      ],
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
        {
          name: "Vuetify",
          link: "https://vuetifyjs.com/en/",
        },
        {
          name: "Express.js",
          link: "https://expressjs.com/",
        },
        {
          name: "Mongoose",
          link: "https://expressjs.com/",
        },
        {
          name: "MongoDB",
          link: "https://expressjs.com/",
        },
      ],
      allImages: [
        "kraslice1.webp",
        "kraslice2.webp",
        "kraslice3.webp",
        "kraslice4.webp",
        "kraslice5.webp",
      ],
    },
    {
      _id: "flowershop-frida",
      date: "2022",
      name: "Flowershop Frida",
      links: {
        github: "https://github.com/ssps-cajthaml/3-mvop-wbf-zp-1",
      },
      frontImage: "frida1.webp",
      shortDescriptionRecent: [
        "I designed and built a website for a local flower shop in collaboration with several of my friends.",
        "We needed an artistic UI that would represent the flower shop's atmosphere.",
      ],
      shortDescriptionArchive:
        "I designed and built a website for a local flower shop in collaboration with several of my friends.",
      projectDescription: [
        "One of my favorite projects I have worked on so far. The task was clear: build a frontend application which would represent our flower shop. As always, I started on a sketch board in Figma, trying to create a unique design, while also making sure that the shop owner was satisfied with everything. Flowers are considered a form of art and they express different feelings. I wanted to highlight this fact by creating a site where I could make the beautiful flowers really stand out.",
        "Ultimately, I managed to create the perfect color pallet that went well with all the unique flowers that appeared on the website. One of the things the client wanted me to incorporate was some sort of a game or functionality. I decided to create a flower quiz that would help customers decide on which flower to choose for their specific occasion.",
      ],
      projectSolution: [
        "The project did not required an extremely complicated system. For the most part, I worked with JavaScript animations, SCSS and Vue.js as my frontend library.",
        "In the end, I managed to satisfy the customer by delivering a visually appealing solution, which works well alongside her aesthetically pleasing store. The only complication I encountered was during the design of the quiz. Since I am not really familiar with which flower expresses what feeling and for which occasion each flower is perfect for, I decided to get help from local flower shops near by. This turned out to be an interesting endeavor outside of my regular developer schedule and I learned a lot from communication with the client and other shop owners.",
      ],
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
        {
          name: "SCSS",
          link: "https://sass-lang.com/",
        },
      ],
      allImages: [
        "frida1.webp",
        "frida2.webp",
        "frida3.webp",
        "frida4.webp",
        "frida5.webp",
      ],
    },
    {
      _id: "monkey-clicker-game",
      date: "2022",
      name: "Monkey clicker game",
      links: {
        github: "https://github.com/lennerjiri/monkey-clicker.git",
      },
      frontImage: "monkey2.webp",
      shortDescriptionRecent: [
        "A fun project for my brother's birthday. My goal was to solidify my knowledge of Vue.js.",
        "Building something other than a website proved to be an interesting, but challenging venture.",
      ],
      shortDescriptionArchive:
        "A fun project for my brother's birthday. I wanted to solidify my newly gained knowledge of Vue.js and create a fun game for him.",

      projectDescription: [
        "My brother's birthday was approaching and I wanted to create a gift like no other. The one thing that every kid of his age loves is a video game. I decided to create a game just for him, inspired by franchise he loves the most: BloonsTD. This was a departure from what I normally built, since I had never created a web based video game.",
        "The main problem for me was to design a game play system that would be attractive for a long period of time, functional, and also easy to use. I decided to stick to the classics.",
      ],
      projectSolution: [
        "The game play system consists of traditional elements such as, an HP and damage system, but also some new things such as, offline credit farming, time changes, and all sorts of attractive upgrades that the player can buy to make the game experience more enjoyable.",
        "In this project, I faced one major issue. I was still quite new to web development with reactive frameworks such as Vue.js., but most importantly, this project required me to build an extremely large number of game components. I really had to pay close attention to my coding style to write a clean, readable, and easy to navigate code. The second challenge was to effectively make exchange data between the individual components. That is something that can be quite challenging, with multiple layers of nested components. In the end, I managed to deliver a great game solution, on time, for my brothers birthday.",
      ],
      technologies: [
        {
          name: "Vue.js",
          link: "https://vuejs.org/",
        },
        {
          name: "SCSS",
          link: "https://sass-lang.com/",
        },
      ],
      allImages: ["monkey1.webp", "monkey2.webp", "monkey3.webp"],
    },
    {
      _id: "portfolio-template",
      date: "2021",
      name: "Portfolio template",
      links: {
        github: "https://github.com/lennerjiri/portfolio-template.git",
      },
      frontImage: "template1.webp",
      shortDescriptionRecent: [
        "I built a WordPress template for my math teacher to use to support his private lesson business.",
        "I wanted to make the page and especially the content management, as easy to use as possible.",
      ],
      shortDescriptionArchive:
        "I build a WordPress template for my math teacher to use to support her private lesson extracurricular club.",
      projectDescription: [
        "Among the first people to requested a webpage from me was my math teacher. She had a private extracurricular club for students who wanted to further broaden their knowledge of mathematics or simply for people who struggled with math and wanted to improve. Since I wanted to gain additional experience in working with real clients, I decided to accept this offer and build her a WordPress template that she could then use to edit and enter her personal information and images into.",
        "I wanted to create something which would focus on simplicity and clean line. Since she did not give me any design requirements, I was allowed to express myself in anyway I wanted to and I certainly took advantage of that.",
      ],
      projectSolution: [
        "The design process and communication with the client was quite simple. I made several designs that I offered. My client accepted one of them and gave me feedback on what I should improve and edit.",
        "The most difficult part, however, was the work with WordPress. This was the very first time I had to integrate WordPress into one of my projects. In the beginning, it was quite challenging for me, as I was unfamiliar with PHP. Only after I had acquired some fundamentals, did I managed to effectively integrate WordPress into the website and thus convert it into a WordPress template and deliver the requested solution.",
      ],
      technologies: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "WordPress",
          link: "https://wordpress.com/",
        },
      ],
      allImages: [
        "template1.webp",
        "template2.webp",
        "template3.webp",
        "template4.webp",
        "template5.webp",
        "template6.webp",
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
