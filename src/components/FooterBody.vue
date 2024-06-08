<template>
  <div class="footer">
    <div class="footer-one">
      <div class="footer-images">
        <img src="../assets/sycamorelogodark.svg" alt="sycamore-logo" />
        <img id='ndpr' src="../assets/ndpraudit.svg" alt="ndpraudit" />
      </div>
      <div class="footer-text" v-for="section in footerSections" :key="section.title">
        <ul class="footer-list">
          <li>{{ section.title }}</li>
          <li v-for="item in section.items" :key="item.text">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-text">
        <ul class="footer-list">
          <li>Get in touch</li>
          <li v-for="contact in contacts" :key="contact.text">
            <img :src="contact.icon" />
            <a :href="contact.link">{{ contact.text }}</a>
          </li>
        </ul>
        <div class="footer-socials">
          <h3>Socials</h3>
          <ul class="socials-list">
            <li v-for="social in socials" :key="social.icon">
              <a :href="social.link"><i :class="social.icon"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-two">
      <h3>All rights reserved. © 2021 Sycamore Integrated Solutions Limited</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerSections: [
        {
          title: "Company",
          items: [
            { text: "About us", link: "#" },
            { text: "Careers", link: "#" },
            { text: "Privacy Policy", link: "#" },
            { text: "Terms & Conditions", link: "#" }
          ]
        },
        {
          title: "Resources",
          items: [
            { text: "FAQs", link: "#" },
            { text: "Blog", link: "#" },
            { text: "Help Center", link: "#" }
          ]
        }
      ],
      contacts: [
        { icon: "../assets/phone-icon.svg", text: "01 700 2021", link: "#" },
        { icon: "../assets/mail-icon.svg", text: "info@sycamore.ng", link: "#" },
        { icon: "../assets/address-logo.svg", text: "53b Oduduwa way, Ikeja, Lagos", link: "#" }
      ],
      socials: [
        { icon: "bi bi-instagram", link: "#" },
        { icon: "bi bi-linkedin", link: "#" },
        { icon: "bi bi-twitter", link: "#" },
        { icon: "bi bi-youtube", link: "#" },
        { icon: "bi bi-facebook", link: "#" }
      ]
    };
  }
};
</script>