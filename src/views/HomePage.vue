<template>
    <div class="home">
        <NavBar/>
        <div class="evolving">
            <h1>What we've been up to.</h1>
            <p>Check out our collection of videos and photos to have a glance at what's happening at Sycamore</p>
        </div>
        
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(video) in videoArray.slice(1)"
                    :key="video.snippet.resourceId.videoId">
                    <iframe :src="`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
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
                            <div class="card-image">
                                <img src="../assets/how we made it in africa logo.png" class="card-img-top"
                                    alt="how we made it in africa logo">
                            </div>
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
                            <div class="card-image">
                                <img src="../assets/the nigerian xpress logo.png" class="card-img-top"
                                    alt="the nigerian xpress logo">
                            </div>
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
            <div class="blog-link">
                <a class="btn btn-primary"><i class="bi bi-arrow-up-right"></i>See our blog</a>
            </div>

        </div>
        <div class="promotion">
            <div class="promotion-details">
                <h3>Download Sycamore</h3>
                <div class="promotion-link">
                    <a href="#">
                        <div>
                            <img src="../assets/Group.svg" />
                        </div>
                        <div class="promotion-text">
                            <span>Get it on </span>
                            <h5>App Store</h5>
                        </div>

                    </a>
                    <a href="#" target="_blank">
                        <div>
                            <img src="../assets/Vector.svg" />
                        </div>
                        <div class="promotion-text">
                            <span>Get it on </span>
                            <h5>Google Play</h5>
                        </div>
                    </a>
                </div>
            </div>
            <img class="image" src="../assets/phone.png" alt="phone-image" />
        </div>
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

<style>

</style>

<script>
import { useCounterStore } from "@/store/index.js";
import NavBar from "@/components/NavBar.vue"
export default {
    data() {
        return {
            counterStore: useCounterStore(),
            videoArray: [],
            
        };
    },
    components:{
        NavBar,
        
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
