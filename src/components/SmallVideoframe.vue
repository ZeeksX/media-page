<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item" v-for="(video) in this.counterStore.videoArray.slice(1)" :key="video.snippet.resourceId.videoId">
                <iframe :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</template>
<script>
import { useCounterStore } from "@/store/index.js";
export default{
    data() {
        return {
            counterStore: useCounterStore()
        }
    },
}
</script>