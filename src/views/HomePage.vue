<template>
    <div class="home">
        <nav class="navbar">
            <div class="list-content-one">
                <img id="logo" src="../assets/sycamorelogo.svg" alt="company-logo" tabindex="0" />
                <ul class="list-items">
                    <li><a href="#" target="_blank">Company</a></li>
                    <li><a href="#" target="_blank">Features</a></li>
                    <li><a href="#" target="_blank">Help</a></li>
                    <li><a href="#" target="_blank">Blog</a></li>
                </ul>
            </div>
            <div class="list-content-two">
                <button class="btn btn-primary me-md-2" type="button" id="signin">Sign in</button>
                <button class="btn btn-primary" type="button" id="signup">Sign up</button>
            </div>
        </nav>
        <div class="evolving">
            <h1>What we've been up to.</h1>
            <p>Check out our collection of videos and photos to have a glance at what's happening at Sycamore</p>
        </div>
        <div class="video-frame">
            <div class="loader" v-if="loading">
                <img src="@/assets/loader.svg" alt="loading" />
            </div>
            <div class="video-clip" v-if="!loading">
                <div class="video-item-one">
                    <a :href="`https://www.youtube.com/watch?v=${videoArray[0].snippet.resourceId.videoId}`"
                        target="_blank">
                        <img :src="videoArray[0].snippet.thumbnails.high.url" alt="Video Thumbnail" />
                        <h3>{{ videoArray[0].snippet.title }}</h3>
                    </a>
                </div>
            </div>
        </div>
        <div id="carouselExample" class="carousel slide">
            <div class="loader" v-if="loading">
                <img src="@/assets/loader.svg" alt="loading" />
            </div>
            <div class="carousel-inner" v-if="!loading">
                <div class="carousel-item " v-for="(video) in videoArray.slice(1)"
                    :key="video.snippet.resourceId.videoId">
                    <a :href="`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`" target="_blank">
                        <img :src="video.snippet.thumbnails.high.url" alt="Video Thumbnail" />
                        <div class="video-info">
                            <img src="../assets/channelLogo.svg" alt="channel-logo" />
                            <h3>{{ video.snippet.title }}</h3>
                        </div>
                        <div class="channel-details">
                            <h3>{{ video.snippet.videoOwnerChannelTitle }} <i class="bi bi-check-circle-fill"></i></h3>
                            <h3></h3>
                        </div>
                    </a>
                </div>
            </div>
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"> </span>
                <span class="visually-hidden">Next</span>
            </button> -->
        </div>
    </div>
</template>

<style>
.channel-details i{
    width: 10px;
    height: 10px;
    margin-left: 4px;
}
.channel-details h3{
    margin: 5px 2.625rem;
    color: #727272;
    font-family: Poppins;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.carousel-inner {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
}

.carousel-item {
    display: flex;
    flex-direction: row;
    width: 290px;
    margin: 0;
}

#carouselExample {
    width: 80%;
    margin: 0 auto;
}

.video-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: 10px;
    height: 54px;
}

.carousel-item .video-info h3 {
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-align: justify;
    margin: 0;
    /* 150% */
}

.carousel-item .video-info img {
    width: 30px;
    height: 30px;
}

.channel-video {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
}

.carousel-item img {
    height: 162px;
    width: 290px;
    border-radius: 5px;
}

.carousel-item a {
    color: black;
    text-decoration: none;
    width: 290px;
}

.video-item-one a {
    color: black;
    text-decoration: none;
}
</style>

<script>
import { useCounterStore } from "@/store/index.js";

export default {
    data() {
        return {
            loading: true,
            videoArray: []
        };
    },
    async mounted() {
        const counterStore = useCounterStore();
        await counterStore.fetchData();
        this.videoArray = counterStore.videoArray;
        setTimeout(this.showVideos, 3000);
    },
    methods: {
        showVideos() {
            this.loading = false;
        }
    }
};
</script>
