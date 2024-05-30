import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
	state: () => ({
		videoArray: [],
	}),
	getters: {},
	actions: {
		async fetchData() {
			try {
				const data = await fetch(
					"https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUzsMXDElPmWUht3mfQOJBkg&key=AIzaSyB6mPE6M8cF2DlZ1JPDd3Hag6Ybwlmnfmg"
				);
				const res = await data.json();
				this.videoArray = res.items;
			} catch (error) {
				console.warn(error);
			}
			console.log(this.videoArray);
		},
	},
});
