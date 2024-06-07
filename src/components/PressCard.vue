<template>
    <div class="carousel-item" v-for="item in carouselItem" :key="item">
        <div class="card">
            <div class="card-image">
                <img :src="item.src" class="card-img-top" :alt="item.alt">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.text }}</p>
                <a href="#" class="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
</template>
<script>
import businessLogo from "@/assets/businessday logo.png"
import techcabalLogo from "@/assets/techcabal logo.png"
import disruptLogo from "@/assets/distrupt africa logo.png"
import thisdayLogo from "@/assets/thisday logo.png"
import madeLogo from "@/assets/how we made it in africa logo.png"
import abcLogo from "@/assets/africa business communities logo.png"
import xpressLogo from "@/assets/the nigerian xpress logo.png"

export default {
    data() {
        return {
            carouselItem: [
                {
                    src: businessLogo,
                    alt: "businessday logo",
                    title: "businessday",
                    text: "Businesses, individuals in focus as Sycamore launches solution to financial freedom",
                },
                {
                    src: techcabalLogo,
                    alt: "techcabal logo",
                    title: "techcabal",
                    text: "Businesses, individuals in focus as Sycamore launches solution to financial freedom",
                },
                {
                    src: disruptLogo,
                    alt: "distrupt africa logo",
                    title: "distrupt africa",
                    text: "Nigerian lending app Sycamore closes seed round to expand operations",
                },
                {
                    src: thisdayLogo,
                    alt: "thisday logo",
                    title: "thisday",
                    text: "Sycamore Presents Lending Platform for Businesses",
                },
                {
                    src: madeLogo,
                    alt: "how we made it in africa logo",
                    title: "how we made it in africa",
                    text: "Nigeria: Start-up connects investors with SMEs that need funding",
                },
                {
                    src: abcLogo,
                    alt: "africa business communities logo",
                    title: "africa business communities",
                    text: "Startup Interview with Babatunde Akin-Moses, CEO, Sycamore, Nigeria",
                },
                {
                    src: businessLogo,
                    alt: "businessday logo",
                    title: "businessday",
                    text: "Businesses, individuals in focus as Sycamore launches solution to financial freedom",
                },
                {
                    src: xpressLogo,
                    alt: "the nigerian xpress logo",
                    title: "the nigerian xpress",
                    text: "Entrepreneurship comes with hard work, sweat and tears -Onyinye Okonji, co-founder Sycamore.NG",
                },
            ]
        }
    },
}
</script>