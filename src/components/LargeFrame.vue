<template>
    <div class="video-frame">
        <div class="video-clip" v-if="!this.counterStore.loading">
            <div class="video-item-one">
                <iframe
                    :src="`https://www.youtube.com/embed/${this.counterStore.videoArray[0].snippet.resourceId.videoId}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</template>
<script>
import { useCounterStore } from "@/store/index.js";
export default {
    data() {
        return {
            counterStore: useCounterStore()
        }
    },
}
</script>