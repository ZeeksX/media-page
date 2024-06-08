<template>
    <div id="carouselExample" class="carousel slide">
        <div id="carousel-body">
            <button id="left"><i class="bi bi-chevron-left"></i></button>
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(video) in this.counterStore.videoArray.slice(1)"
                    :key="video.snippet.resourceId.videoId">
                    <iframe :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <button id="right"><i class="bi bi-chevron-right"></i></button>
        </div>
    </div>
</template>
<style>
#carousel-body{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
#carouselExample button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
}

button i {
    color: white;
}
#left{
    margin-right: -15px;
    z-index: 1;
}
#right {
    background-color: #26C165;
    margin-left: -15px;
    z-index: 1;
}
</style>
<script>
import { useCounterStore } from "@/store/index.js";
export default {
    data() {
        return {
            counterStore: useCounterStore()
        }
    },
}
</script>