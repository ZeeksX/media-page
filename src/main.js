import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import "../public/index.css";
createApp(App)
	.use(router)
	.use(createPinia())
	.use(Particles, {
		init: async (engine) => {
			await loadFull(engine);
		},
	})
	.mount("#app");
