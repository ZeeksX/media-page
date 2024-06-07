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
                <div class="carousel-inner" id="carousel-inner">
                    <PressCard />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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
        <div class="footer">
            <div class="footer-images">
                <img src="../assets/sycamorelogodark.svg" alt="sycamore-logo" />
                <img id='ndpr' src="../assets/ndpraudit.svg" alt="ndpraudit" />
            </div>
            <div class="footer-text">
                <ul class="footer-list">
                    <li>Company</li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
            <div class="footer-text">
                <ul class="footer-list">
                    <li>Resources</li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
            <div class="footer-text">
                <ul class="footer-list">
                    <li>Get in touch</li>
                    <li><img src="../assets/phone-icon.svg" /><a href="#">01 700 2021</a></li>
                    <li><img src="../assets/mail-icon.svg" /><a href="#">info@sycamore.ng</a></li>
                    <li><img src="../assets/address-logo.svg" /><a href="#">53b Oduduwa way, Ikeja, Lagos</a></li>
                </ul>
                <div class="footer-socials">
                    <h3>Socials</h3>
                    <ul class="socials-list">
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i class="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
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
        PromotionDetails
    },
    async mounted() {
        await this.counterStore.fetchData();
        this.videoArray = this.counterStore.videoArray;
        setTimeout(this.showVideos, 10);
    },
    methods: {
        showVideos() {
            this.counterStore.loading = false;
        }
    }
};
</script>
