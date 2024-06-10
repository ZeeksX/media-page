<template>
    <div class="home">
        <NavBar />
        <div class="evolving">
            <h1>What we've been up to.</h1>
            <p>Check out our collection of videos and photos to have a glance at what's happening at Sycamore</p>
        </div>
        <LargeVideoframe />
        <SmallVideoframe />
        <div class="frame">
            <h3>Lending in Nigeria: Can Tech Make Borrowing from Family and Friends Sustainable?</h3>
            <button><i class="bi bi-download"></i>Download report</button>
        </div>
        <div class="press">
            <h3>Press Clippings <i class="bi bi-newspaper"></i></h3>
            <div id="carouselExample2" class="carousel slide">
                <div id="carousel-body">
                    <button id="left" :style="{ backgroundColor: counterStore.leftButtonColor }" @click="scrollLeft"><i
                            class="bi bi-chevron-left"></i></button>
                    <div class="carousel-inner" id="carousel-inner" ref="carouselBody">
                        <PressCard />
                    </div>
                    <button id="right" :style="{ backgroundColor: counterStore.rightButtonColor }"
                        @click="scrollRight"><i class="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <div class="blog">
            <h3>Latest from our Blog</h3>
            <div class="blog-details">
                <BlogCard />
            </div>
            <div class="blog-link">
                <a class="btn btn-primary"><i class="bi bi-arrow-up-right"></i>See our blog</a>
            </div>

        </div>
        <PromotionDetails />
        <FooterBody />
    </div>
</template>

<style></style>

<script>
import { useCounterStore } from "@/store/index.js";
import NavBar from "@/components/NavBar.vue"
import LargeVideoframe from "@/components/LargeVideoframe.vue";
import SmallVideoframe from "@/components/SmallVideoframe.vue";
import PressCard from "@/components/PressCard.vue";
import BlogCard from "@/components/BlogCard.vue";
import PromotionDetails from "@/components/PromotionDetails.vue"
import FooterBody from "@/components/FooterBody.vue"
export default {
    data() {
        return {
            counterStore: useCounterStore(),
            videoArray: [],
        };
    },
    components: {
        NavBar,
        LargeVideoframe,
        SmallVideoframe,
        PressCard,
        BlogCard,
        PromotionDetails,
        FooterBody
    },
    async mounted() {
        await this.counterStore.fetchData();
        this.videoArray = this.counterStore.videoArray;
        setTimeout(this.showVideos, 10);
        this.$nextTick(() => {
            const carouselBody = this.$refs.carouselBody;
            if (carouselBody) {
                carouselBody.scrollLeft = this.counterStore.scrollPosition;
            }
        });
    },
    methods: {
        showVideos() {
            this.counterStore.loading = false;
        },
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
