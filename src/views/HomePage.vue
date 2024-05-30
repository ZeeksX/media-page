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
            <div class="loader">
                <img v-show="loading" src="@/assets/loader.svg" alt="loading" />
                <div class="video-clip"></div>
            </div>
        </div>
        <div class="related-videos">
            <div class="other"></div>
        </div>
    </div>
</template>
<style></style>
<script>
import { useCounterStore } from "@/store/index.js"
export default {
    data() {
        return {
            loading: true,
            counterStore: useCounterStore(),
            videoArray: useCounterStore().snippet
        }
    },
    async mounted() {
        await this.counterStore.fetchData();
        setTimeout(this.showVideos, 3000);
    },
    methods: {
        showVideos() {
            this.playVideo();
            this.loading = false;
        },
        playVideo() {
            const video = document.querySelector(".video-clip")
            this.videoArray.forEach(element => {
                video.innerHTML += `
                <a href="https://www.youtube.com/watch?v=${element.resourceId.videoId}">
                 <img src=${element.thumbnails.maxres.url}/>
                </a> 
            `
            });
        },
    }

}
</script>