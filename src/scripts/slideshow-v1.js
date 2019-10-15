var slideshow_2018_2019 = {
	imgSources: ["images/completed-drivetrain.jpg", "images/drive-team.jpg", "images/field.jpg"],
	imgCaptions: [
		"Our robot's completed drivetrain", 
		"Drive team members (from left to right): Emma Kanning, Jake Mitstifer, Boston Meeker, Matthew Taylor",
		"The competition field for last year's game, Destination: Deep Space"
	],
	currentImgIndex: 0,
	currentSlideImg: document.getElementById("2018-2019-current-slide-img"),
	currentSlideCaption: document.getElementById("2018-2019-current-slide-caption"),
	
	setImg: function() {
		this.currentSlideImg.src = this.imgSources[this.currentImgIndex];
		this.currentSlideCaption.innerHTML = this.imgCaptions[this.currentImgIndex];
	},
	
	increaseSlide: function() {
		this.currentImgIndex++;
		if (this.currentImgIndex >= this.imgSources.length) {
			this.currentImgIndex = 0;
		}
		this.setImg();
	},
	decreaseSlide: function() {
		this.currentImgIndex--;
		if (this.currentImgIndex < 0) {
			this.currentImgIndex = this.imgSources.length - 1;
		}
		this.setImg();
	}
};
slideshow_2018_2019.setImg();