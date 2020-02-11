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

var slideshow_2019_2020 = {
	imgElements: [
		document.getElementById("engineering-img"),
		document.getElementById("engineering-group-img"),
		document.getElementById("frank-boston-img"),
		document.getElementById("matthew-arshiq-img"),
		document.getElementById("programming-group-img"),
		document.getElementById("window-room-potato-img")
	],
	imgCaptions: [
		"A member of the engineering team works on the robot", 
		"Our engineers plan the design of our robot",
		"Two of our engineers prototype the intank, tank, and outtank",
		"Two of our programmers code the robot's camera system",
		"Our programmers code the shooter",
		"Our team has a dicussion about robot design"
	],
	currentImgIndex: 0,
	slideCaptionElement: document.getElementById("2019-2020-current-slide-caption"),
	
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
slideshow_2019_2020.setImg();