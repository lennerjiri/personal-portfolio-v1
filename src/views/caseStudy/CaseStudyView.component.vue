<template>
  <div class="main__case-study-container">
    <div class="case-study-container__center-container">
      <div class="center-container__case-study-header">
        <p>Build in: 2022</p>
        <h2>Kraslice Ecommerce</h2>
        <div class="case-study-header__liks">
          <a target="_blank" v-if="true" href="/">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>

          <a target="_blank" v-if="true" href="/">
            <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
          </a>
        </div>
      </div>
      <div class="center-container__case-study-project">
        <div
          class="case-study-project__project-heading case-study-project-heading"
        >
          <h3>
            <span>01 </span>
            The Project
          </h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          nesciunt, nemo autem dolorem reiciendis ad animi laboriosam doloribus.
          Blanditiis soluta optio facilis! Inventore sed quo at, placeat
          perspiciatis nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          nesciunt, nemo autem dolorem reiciendis ad animi laboriosam doloribus.
          Blanditiis soluta optio facilis! Inventore sed quo at, placeat
          perspiciatis nesciunt.
        </p>
      </div>
      <div class="center-container__case-study-solution">
        <div class="case-study-solution__solution-heading">
          <h3>
            <span>02 </span>
            The Solution
          </h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          nesciunt, nemo autem dolorem reiciendis ad animi laboriosam doloribus.
          Blanditiis soluta optio facilis! Inventore sed quo at, placeat
          perspiciatis nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          nesciunt, nemo autem dolorem reiciendis ad animi laboriosam doloribus.
          Blanditiis soluta optio facilis! Inventore sed quo at, placeat
          perspiciatis nesciunt.
        </p>
        <div class="case-study-solution__solution-tech">
          <p>Dev Stack:</p>
          <div class="solution-tech__dev-stack">
            <a href="">Algolia</a>
            <a href="">Rust</a>
            <a href="">Nuxt</a>
          </div>
        </div>
      </div>
      <div class="center-container__case-study-gallery">
        <div class="case-study-gallery__gallery-heading">
          <h3>
            <span>03 </span>
            Gallery
          </h3>
        </div>
        <div class="case-study-gallery__image-grid">
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
          <div class="image-grid__img-container">
            <img src="../../../src/assets/img/projects/kraslice1.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "./caseStudyView.styles.scss";
</style>
