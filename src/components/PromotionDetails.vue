<template>
    <div class="promotion">
        <div class="promotion-details">
            <h3>Download Sycamore</h3>
            <div class="promotion-link">
                <a href="#" target="_blank" v-for="item in buttonList" :key="item">
                    <div>
                        <img :src="item.src" :alt="item.alt" />
                    </div>
                    <div class="promotion-text">
                        <span>{{ item.text }}</span>
                        <h5>{{ item.title }}</h5>
                    </div>

                </a>
            </div>
        </div>
        <img class="image" src="../assets/phone.png" alt="phone-image" />
    </div>
</template>
<script>
import image1 from "../assets/Group.svg"
import image2 from "../assets/Vector.svg"
export default {
    data() {
        return {
            buttonList: [
                {
                    src: image1,
                    alt: "App store logo",
                    text: "Get it on",
                    title: "App Store",
                },
                {
                    src: image2,
                    alt: "App store logo",
                    text: "Get it on",
                    title: "Google Play",
                },
            ]
        }
    },
}
</script>