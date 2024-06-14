<template>
    <div class="wrapper">
      <CustomParticles/>
    </div>
  <RouterView />
</template>
<script>
import CustomParticles from "@/components/CustomParticles.vue"
export default {
  components:{
    CustomParticles
  }
}
</script>