import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({
		videoArray: [],
		loading: true,
		scrollPosition: 0,
		leftButtonColor: "lightgray",
		rightButtonColor: "#26C165",
	}),
	getters: {},
	actions: {
		async fetchData() {
			try {
				const data = await fetch(
					" https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=7&playlistId=UUzsMXDElPmWUht3mfQOJBkg&key=AIzaSyB6mPE6M8cF2DlZ1JPDd3Hag6Ybwlmnfmg"
				);
				const res = await data.json();
				this.videoArray = res.items;
			} catch (error) {
				console.warn(error);
			}
		},
		scrollRight(carouselBody) {
			if (!carouselBody) return;

			const maxScroll = carouselBody.scrollWidth - carouselBody.clientWidth;

			if (this.scrollPosition < maxScroll) {
				this.scrollPosition += 150;
				carouselBody.scrollLeft = this.scrollPosition;
				this.leftButtonColor = "#26C165";
			}

			if (this.scrollPosition >= maxScroll) {
				this.rightButtonColor = "lightgray";
			} else {
				this.rightButtonColor = "#26C165";
			}
		},
		scrollLeft(carouselBody) {
			if (!carouselBody) return; 

			if (this.scrollPosition > 0) {
				this.scrollPosition -= 150;
				carouselBody.scrollLeft = this.scrollPosition;
				this.leftButtonColor = "#26C165";
			}

			if (this.scrollPosition <= 0) {
				this.leftButtonColor = "lightgray";
			} else {
				this.rightButtonColor = "#26C165";
			}
		},
	},
});
