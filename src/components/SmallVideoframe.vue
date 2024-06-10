<template>
  <div id="carouselExample" class="carousel slide">
    <div id="carousel-body">
      <button id="left" :style="{ backgroundColor: counterStore.leftButtonColor }" @click="scrollLeft">
        <i class="bi bi-chevron-left"></i>
      </button>
      <div class="carousel-inner" ref="carouselBody">
        <div class="carousel-item" v-for="(video, index) in counterStore.videoArray.slice(1)"
          :key="video.snippet.resourceId.videoId" :ref="`item-${index}`">
          <iframe :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <button id="right" :style="{ backgroundColor: counterStore.rightButtonColor }" @click="scrollRight">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style></style>

<script>
import { useCounterStore } from "@/store/index.js";

export default {
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
  mounted() {
    this.$nextTick(() => {
      const carouselBody = this.$refs.carouselBody;
      if (carouselBody) {
        carouselBody.scrollLeft = this.counterStore.scrollPosition;
      }
    });
  },
  methods: {
    scrollRight() {
      const carouselBody = this.$refs.carouselBody;
      this.counterStore.scrollRight(carouselBody);
    },
    scrollLeft() {
      const carouselBody = this.$refs.carouselBody;
      this.counterStore.scrollLeft(carouselBody);
    },
  },
};
</script>
