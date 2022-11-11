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
        "Ecommerce website for grandmothers business of selling easter eggs and art.",
        "My goal was to create a large and easy to use platform for her and her customers.",
      ],
      shortDescriptionArchive:
        "Ecommerce website for grandmothers business of selling easter eggs and art.",
      projectDescription: [
        "Originally a project I started in school, soon turned into a large and complex solution I designed and build for my grand mothers business. The goal of this project was to build a simple user interface which would make it easy for her client segment (middle age / seniors) to use. The platform should also look artistic since it is used to sell art.",
        "I was also tasked to integrate online payment system, with email systems, however, by far the hardest task was to integrate a secure backend API, where users can request and edit data with content management system, so that this process is as easy as possible for someone who is not familiar with programming.",
      ],
      projectSolution: [
        "I solved this problem by firstly designing the applications sketch in Figma, including both the web application and content  management system. After several days of discussion I moved on to development. Firstly creating a secure API for data storing and management. On top of that I build the ecommerce web app and the content management system.",
        "During the entire project I used Vue.js. For the content management system I also included a simple Vue.js component library: Vuetify, which helped me make the building process significantly easier, faster and more secure. My database of choice is no other than the MongoDB which works Excellently with express.js on the backend.",
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
        "I designed and build a website for a local flower shop in collaboration with several of my friends.",
        "We needed to an artistic UI which would represent the flowershop atmosphere.",
      ],
      shortDescriptionArchive:
        "I designed and build a website for a local flower shop in collaboration with several of my friends.",
      projectDescription: [
        "One of my favorite projects I have got to work on so far. The task was clear. Build us a frontend application which would represent our flowershop. As always, I started at a sketching board in Figma, trying to create a unique design, while also making sure that the shop owner is satisfied with everything. Flowers are considered as a form of art and they express a different feelings. Because of that, I wanted to create a place, which would highlight this fact, by making the beautiful  flowers really stand out.",
        "Ultimately, I managed to create the perfect colour pallet which goes well with all the unique colorful flowers that were going to appear on the website. One of the things the client wanted me to incorporate was some sort of a game or functionality. I decided to create a flower quiz which would help customers decide on what flower to choose for their specific occasion.",
      ],
      projectSolution: [
        "The project did not required an extremely complicated system. For most part I worked with JavaScript animations, SCSS and Vue.js as my frontend library.",
        "In the end, I managed to satisfy the customer by delivering a visually appealing solution, which works perfectly alongside her aesthetic physical store. The only complication I encountered was during the design of the quiz. Since I am not really familiar with which flower expresses what feeling and for which occasion each flower is perfect for, I decided to get help from local flowershops near by the location I live. This turned out to be an interesting endeavour outside of my regular developer schedule and I learned a lot from communication with the client and other shop owners.",
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
        "A fun project for my brothers birthday. My goal was to solidify my knowledge of Vue.js.",
        "Building something other than a website proved to be an interesting, but challenging venture.",
      ],
      shortDescriptionArchive:
        "A fun project for my brothers birthday. I wanted to solidify my newly gained knowledge of Vue.js and create a fun game for him.",

      projectDescription: [
        "My brothers birthday were approaching and I wanted to create a gift like no other. The one thing that every kid of his age loves are video games. Because of that, I decided to create him his own game inspired by the game franchise he loves the most: BloonsTD. This was a diversion from the things I normally build, since I have never before created a web based video game.",
        "The main problem for me was to design a gameplay system which would be attractive to play for a longer periods of time, functional and also easy to use. Because of that, I decided to stick to the classics.",
      ],
      projectSolution: [
        "The gameplay system consit of traditional elements such as HP and damage system, but also some new things such as offline credit farming, time speeding up and all sorts of attractive upgrades that the player can buy, to make his game experience more enjoyable.",
        "In this project, I faced one major issue. I was still quite new to web development with reactive frameworks such as Vue.js. But most importantly, this project required me to build and extremely large amount of game components, and because of that, I really had to pay close attention to my coding style to write a clean, readable and easy to navigate code. The second challenge was to effectively make exchange data between the individual components. That is something, which may sometimes turn to be quite challenging with multiple layers of nested components. In the end, I managed to deliver a great game solution, on time for my brothers birthday.",
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
        "I build a Wordpress template for my math teacher to use to support his private lesson business.",
        "I wanted to make the page and especially the content management as easy to use as possible.",
      ],
      shortDescriptionArchive:
        "I build a Wordpress template for my math teacher to use to support her private lesson extracurricular club.",
      projectDescription: [
        "Among the first people, who requested a webpage from me was my math teacher. She has a private lesson extracurricular club for students who want to further broaden their knowledge of mathematics of simply for people who struggle with math and want to improve. Since I wanted to gain an additional experience in working with real clients, I decided to accept this offer and build her a wordpress template, which she could then use to edit and supply her personal information and images into.",
        "I wanted to create something which would strogly focus on simplicity and clean line. Since she did not give me any design requirements, I was allowed to express myself as much as I wanted to and I certainly took advantage of that.",
      ],
      projectSolution: [
        "The design process and communication with the client was quite simple. I made several designs which I offered and my client had accepted one of them and gave me short feedback on what I should improve and edit.",
        "The most difficult part, however, was the work with Wordpress. This was the very first time I got to integrate Wordpress to one of my projects and in the beggining it was quite challenging for someone, who is unfamiliar with PHP. Only after I aquired some fundementals, I managed to effectively integrate the Wordpress to my website and thus convert the website into a Wordpress template and deliver the requested solution.",
      ],
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
