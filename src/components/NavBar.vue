<template>
    <nav class="navbar" >
        <div class="list-content-one">
            <img id="logo" src="../assets/sycamorelogo.svg" alt="company-logo" tabindex="0" />
            <ul class="list-items">
                <li v-for="item in listItems" :key="item"><a href="#" target="_blank" >{{ item }}</a></li>
            </ul>
        </div>
        <div class="list-content-two">
            <button class="btn btn-primary me-md-2" type="button" id="signin">Sign in</button>
            <button class="btn btn-primary" type="button" id="signup">Sign up</button>
        </div>
        <div class="bars-icon">
            <span><i class="fa-solid fa-bars"></i></span>
        </div>
    </nav>
</template>
<style>
.bars-icon{
    display: none;
}
</style>
<script>
export default{
    data() {
        return {
            listItems: ["Company","Features", "Help", "Blog" ]
        }
    },
}
</script>