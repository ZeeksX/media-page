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
        <div class="channel-video">
            <div class="loader" v-if="loading">
                <img src="@/assets/loader.svg" alt="loading" />
            </div>
            <div class="mini-video-clip" v-if="!loading">
                <div class='video-item-other' v-for="video in videoArray.slice(1)" :key="video.title">
                    <a :href="`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`" target="_blank">
                        <img :src="video.snippet.thumbnails.high.url" alt="Video Thumbnail" />
                        <div class="video-info">
                            <img src="../assets/channelLogo.svg" alt="channel-logo"/>
                            <h3>{{ video.snippet.title }}</h3>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.mini-video-clip {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    border-radius: 5px;
    margin: 0 12.875rem;
    overflow: hidden;
}

.channel-video {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
}

.video-item-other img {
    height: 162px;
    width: 100%;
    border-radius: 5px;
}

.video-item-other a {
    color: black;
    text-decoration: none;
}

.video-item-other {
    width: 290px;
    background-color: lightgrey;
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
