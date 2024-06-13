<template>
    <nav class="navbar">
        <div class="list-content-one">
            <img id="logo" src="../assets/sycamorelogo.svg" alt="company-logo" tabindex="0" />
            <ul class="list-items" :class="{ 'hover-enabled': clicked }">
                <li v-for="item in listItems" :key="item"><a href="#" target="_blank">{{ item }}</a></li>
            </ul>
        </div>
        <div class="list-content-two">
            <button class="btn btn-primary me-md-2" type="button" id="signin">Sign in</button>
            <button class="btn btn-primary" type="button" id="signup">Sign up</button>
        </div>
        <div class="bars-icon" @click="handleClick">
            <span><i class="fa-solid " :class="{ 'fa-bars': !clicked, 'fa-xmark': clicked }"></i></span>
        </div>
    </nav>
</template>
<style>
.bars-icon {
    display: none;
}

@media (min-width: 280px) and (max-width: 767px) {

    .list-items,
    .list-content-two {
        display: none;
    }

    .list-items.hover-enabled {
        gap: 1rem;
    }

    .list-items.list-items.hover-enabled li {
        padding: 2rem;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .list-items.hover-enabled li:hover {
        background-color: red;
        color: #333;
        cursor: pointer;
    }

    .list-items.hover-enabled li a:hover {
        text-decoration: underline;
    }

}
</style>
<script>
export default {
    data() {
        return {
            listItems: ["Company", "Features", "Help", "Blog"],
            clicked: false,
        }
    },
    methods: {
        handleClick() {
            this.clicked = !this.clicked;
            this.toggleNavStyles();
            this.toggleListStyles();
            this.toggleBarStyles();
        },
        toggleNavStyles() {
            const navBar = document.querySelector(".navbar");
            navBar.style.backgroundColor = this.clicked ? 'white' : '';
            navBar.style.width = this.clicked ? '100%' : "90vw";
            navBar.style.height = this.clicked ? "100vh" : "auto";
            navBar.style.top = this.clicked ? "0" : "2rem";
            navBar.style.left = this.clicked ? "0" : "2.5%";
        },
        toggleListStyles() {
            const navList = document.querySelector(".list-items");
            const navButtons = document.querySelector(".list-content-two");
            navList.style.display = this.clicked ? 'flex' : 'none';
            navList.style.flexDirection = this.clicked ? "column" : "row";
            navButtons.style.display = this.clicked ? "flex" : "none";
            navButtons.style.justifyContent = this.clicked ? "center" : "";
            navButtons.style.alignItems = this.clicked ? "center" : "";
            navButtons.style.width = this.clicked ? "100%" : "";
            navButtons.style.gap = this.clicked ? "2rem" : "";
        },
        toggleBarStyles() {
            const bar = document.querySelector(".bars-icon");
            const navRow = document.querySelector(".list-content-one");
            const navLogo = document.querySelector(".list-content-one img");
            bar.style.top = this.clicked ? "3rem" : "";
            bar.style.justifyContent = this.clicked ? "flex-start" : "";
            navRow.style.flexDirection = this.clicked ? "column" : "";
            navRow.style.width = this.clicked ? "100%" : "";
            navLogo.style.width = this.clicked ? "50%" : "";
        }
    },
}

</script>
