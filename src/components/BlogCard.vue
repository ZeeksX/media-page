<template>
    <div class="card" v-for="item in blogCard" :key="item">
        <img :src="item.src" class="card-img-top" :alt="item.alt" />
        <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.text }}</p>
            <a href="#" class="btn btn-primary" :id="item.id">{{ item.link }}</a>
        </div>
    </div>
</template>
<script>
import blogImage1 from "../assets/blog-image-1.png"
import blogImage2 from "../assets/blog-image-2.png"
import blogImage3 from "../assets/blog-image-3.png"

export default {
    data() {
        return {
            blogCard: [
                {
                    src: blogImage1,
                    alt: "blog-image-one",
                    title: "March 17, 2023",
                    text: "Sycamore 2.0 – A different lending experience",
                    link: "Mobile app",
                    id: "mobile-app"
                },
                {
                    src: blogImage2,
                    alt: "blog-image-two",
                    title: "October 21, 2022",
                    text: "Sycamore Obtains FCCPC Digital Lending Licence",
                    link: "Licensing",
                    id: "licensing"
                },
                {
                    src: blogImage3,
                    alt: "blog-image-three",
                    title: "January 27, 2023",
                    text: "Acheiving Financial Independence",
                    link: "Money",
                    id: "money"
                },
            ]
        }
    },
}
</script>