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
            <div class="loader">
             
            </div>
        </div>
    </div>
</template>
<style>
.video-frame {
    max-width: 64rem;
    margin: 0 auto 4.125rem;
    display: flex;
    justify-content: center;
    height: 36rem;
    border-radius: 21.114px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), url("../assets/loader.svg") lightgray 50% / cover no-repeat;
}
.loader{
    background-color: #bebebe;
}
.evolving {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.evolving h1 {
    width: 64.5%;
    padding: 0.25px;
    margin: 0 16rem 1rem;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 59.5px;
    letter-spacing: -1.92px;
    background: var(--Bg-1, linear-gradient(180deg, #1A2837 0%, #031A05 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.evolving p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    width: 40%;
    text-align: center;
    opacity: 0.7;
    background: var(--Bg-1, linear-gradient(180deg, #1A2837 0%, #031A05 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 auto 7.375rem;
}

.home {
    padding: 0;
    margin: 0;
}

#logo {
    width: 100%;
}

.navbar {
    margin: 5.125rem auto 8rem;
    display: flex;
    width: 70%;

}

#signin {
    border-radius: 5.41px;
    border: 0.815px solid rgba(7, 48, 66, 0.20);
    background: #FFF;
    color: #073042;
    width: 110px;
    height: 44px;
}

#signup {
    border-radius: 5.41px;
    background: #26C165;
    border-color: unset;
    width: 110px;
    height: 44px;
}

.list-content-one {
    display: flex;
    gap: 5rem;
    align-items: center;
}

.list-content-two {
    display: flex;
    align-items: center;

}

.list-items {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
    align-items: center;
}

li {
    list-style-type: none;
    font-size: 14.667px;
    font-style: normal;
    font-weight: 500;
    line-height: 80%;
    /* 11.733px */
    letter-spacing: -0.587px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    cursor: pointer;
}
</style>