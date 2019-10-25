var slideshow_2018_2019 = {
	imgElements: [
		document.getElementById("completed-drivetrain-img"),
		document.getElementById("drive-team-img"),
		document.getElementById("field-img"),
		document.getElementById("match-start-img"),
		document.getElementById("practice-field-cargo-img"),
		document.getElementById("practice-field-hatch-panel-img")
	],
	imgCaptions: [
		"Our robot's completed drivetrain", 
		"Drive team members (from left to right): Emma Kanning, Jake Mitstifer, Boston Meeker, Matthew Taylor",
		"The competition field for last year's game, Destination: Deep Space",
		"Our robot before a match",
		"Our robot scoring with a cargo element",
		"Our robot scoring with a hatch panel"
	],
	currentImgIndex: 0,
	slideCaptionElement: document.getElementById("2018-2019-current-slide-caption"),
	
	setImg: function() {
		this.imgElements[this.currentImgIndex].classList.add("current-slide");
		for (var i = 0; i < this.imgElements.length; i++) {
			if (i !== this.currentImgIndex) {
				this.imgElements[i].classList.remove("current-slide");
			}
		}
		this.slideCaptionElement.innerHTML = this.imgCaptions[this.currentImgIndex];
	},
	
	increaseSlide: function() {
		this.currentImgIndex++;
		if (this.currentImgIndex >= this.imgElements.length) {
			this.currentImgIndex = 0;
		}
		this.setImg();
	},
	decreaseSlide: function() {
		this.currentImgIndex--;
		if (this.currentImgIndex < 0) {
			this.currentImgIndex = this.imgElements.length - 1;
		}
		this.setImg();
	}
};
slideshow_2018_2019.setImg();