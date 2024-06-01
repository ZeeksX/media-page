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
        <div class="frame">
            <h3>Lending in Nigeria: Can Tech Make Borrowing from Family and Friends Sustainable?</h3>
            <button><i class="bi bi-download"></i>Download report</button>
        </div>
        <div class="press">
            <h3>Press Clippings <i class="bi bi-newspaper"></i></h3>
            <div id="carouselExample2" class="carousel slide">
                <div class="carousel-inner" id="carousel-inner">
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/businessday logo.png" class="card-img-top" alt="businessday logo">
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">businessday</h5>
                                <p class="card-text">Businesses, individuals in focus as Sycamore launches solution to
                                    financial freedom</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/techcabal logo.png" class="card-img-top" alt="techcabal logo">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">techcabal</h5>
                                <p class="card-text">Businesses, individuals in focus as Sycamore launches solution to
                                    financial freedom</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/distrupt africa logo.png" class="card-img-top"
                                    alt="distrupt africa logo">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">distrupt africa</h5>
                                <p class="card-text">Nigerian lending app Sycamore closes seed round to expand
                                    operations</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/thisday logo.png" class="card-img-top" alt="thisday logo">
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">thisday</h5>
                                <p class="card-text">Sycamore Presents Lending Platform for Businesses</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <img src="../assets/how we made it in africa logo.png" class="card-img-top"
                                alt="how we made it in africa logo">
                            <div class="card-body">
                                <h5 class="card-title">how we made it in africa</h5>
                                <p class="card-text">Nigeria: Start-up connects investors with SMEs that need funding
                                </p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/africa business communities logo.png" class="card-img-top"
                                    alt="africa business communities logo">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Africa Business Communities</h5>
                                <p class="card-text">Startup Interview with Babatunde Akin-Moses, CEO, Sycamore, Nigeria
                                </p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-image">
                                <img src="../assets/businessday logo.png" class="card-img-top" alt="businessday logo">
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">businessday</h5>
                                <p class="card-text">Businesses, individuals in focus as Sycamore launches solution to
                                    financial freedom</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <img src="../assets/the nigerian xpress logo.png" class="card-img-top"
                                alt="the nigerian xpress logo">
                            <div class="card-body">
                                <h5 class="card-title">the nigerian xpress</h5>
                                <p class="card-text">Entrepreneurship comes with hard work, sweat and tears -Onyinye
                                    Okonji, co-founder Sycamore.NG</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>

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
                <div class="card">
                    <img src="../assets/blog-image-1.png" class="card-img-top" alt="blog-image-one" />
                    <div class="card-body">
                        <h5 class="card-title">March 17, 2023</h5>
                        <p class="card-text">Sycamore 2.0 – A different lending experience</p>
                        <a href="#" class="btn btn-primary" id="mobile-app">Mobile app</a>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/blog-image-2.png" class="card-img-top" alt="blog-image-one" />
                    <div class="card-body">
                        <h5 class="card-title">October 21, 2022</h5>
                        <p class="card-text">Sycamore Obtains FCCPC Digital Lending Licence</p>
                        <a href="#" class="btn btn-primary" id="licensing">Licensing</a>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/blog-image-3.png" class="card-img-top" alt="blog-image-one" />
                    <div class="card-body">
                        <h5 class="card-title">January 27, 2023</h5>
                        <p class="card-text">Acheiving Financial Independence</p>
                        <a href="#" class="btn btn-primary" id="money">Money</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.blog-details .card-body p{
    margin-bottom: 0;
    width: 20.375rem;
}
.blog-details .card-body{
    display: flex;
    flex-direction: column;
    gap: 3.57px;
}
#licensing,
#money,
#mobile-app {
    color: #000;
    font-family: Poppins;
    font-size: 8.926px;
    font-style: normal;
    font-weight: 400;
    line-height: 21.423px;
    border-radius: 7.141px;
    display: flex;
    padding: 2.678px 7.141px 1px 7.141px;
    justify-content: center;
    align-items: center;
    gap: 8.926px;
    /* 240% */
}
#mobile-app{
    background-color: #DEF6E8;
}
#licensing{
    background-color: #CCF0FE;
}
#money{
    background-color: #FFE4CC;
}
.blog-details p {
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Poppins;
    font-size: 12.497px;
    font-style: normal;
    font-weight: 500;
    line-height: 28.563px;
    width: 20.375rem;
    /* 228.571% */
}

.blog-details img {
    width: 323px;
    height: 192px;
}

.blog-details .card {
    width: 338px;
    padding: 15px 7.5px;
    border: none;
    gap: 12px;
}

.blog-details {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: center;
    margin: 0 11.9375rem;
}

.blog h3 {
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 63.5px;
    /* 181.429% */
    letter-spacing: -1.4px;
    padding: 8.9375rem 11.9375rem 1.6875rem;
    margin: 0;
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
