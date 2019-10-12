const CONDENSED_MENU_WIDTH = 1330;
var navbar = document.getElementById("main-navbar-container");

function addFooter() {
	var footer = document.getElementById("footer");
	footer.innerHTML = `
		<div id="footer-text">
			<a href="privacy-policy.html">Privacy Policy</a>
			<a href="contact.html">Contact</a>
			<p id="copyright-text">Copyright © 2019 Hudson Hybrids Robotics. All rights reserved.</p>
		</div>
	`;
}
addFooter();

function dropdown(id) {
	if (id.parentNode.classList.contains("expanded")) {
		id.parentNode.classList.remove("expanded");
	}
	else {
		id.parentNode.classList.add("expanded");
	}
}

function controlNavbar() {
	const pages = [
		{
			file: "index.html",
			subfiles: [],
			num: 0
		},
		
		{
			file: "our-team.html",
			subfiles: [],
			num: 1
		},
		
		{
			file: "branches.html",
			subfiles: ["engineering.html", "programming.html", "business.html"],
			num: 2
		},
		
		{
			file: "media.html",
			subfiles: [],
			num: 6
		},
		
		{
			file: "contact.html",
			subfiles: [],
			num: 7
		},
		
		{
			file: "donate.html",
			subfiles: [],
			num: 8
		},
		
		{
			file: "sponsors.html",
			subfiles: [],
			num: 9
		}
	];
	
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	//Menu button in navbar
	if (windowWidth < CONDENSED_MENU_WIDTH) {
		navbar.innerHTML = `
			<ul id="main-navbar">
				<li class="navbar-item dropdown">
					<a href="JavaScript:void(0);" onclick="dropdown(this)">Menu</a>
					<div id="main-navbar-dropdown-contents" class="contents">
						<a id="home-button" href="index.html">Home</a>
						<a id="our-team-button" href="our-team.html">Our Team</a>
						<div class="dropdown">
							<a id="branches-button" href="JavaScript:void(0);" onclick="dropdown(this)">Branches</a>
							<div class="contents">
								<a id="engineering-button" href="engineering.html">Engineering</a>
								<a id="programming-button" href="programming.html">Programming</a>
								<a id="business-button" href="business.html">Business</a>
							</div>
						</div>
						<a id="media-button" href="media.html">Media</a>
						<a id="contact-button" href="contact.html">Contact</a>
						<a id="donate-button" href="donate.html">Donate</a>
						<a id="sponsors-button" href="sponsors.html">Sponsors</a>
					</div>
				</li>
			</ul>
		`;
	}
	//All pages in navbar
	else {
		navbar.innerHTML = `
			<ul id="main-navbar">
				<li class="navbar-item">
					<a id="home-button" href="index.html">Home</a>
				</li>
				<li class="navbar-item">
					<a id="our-team-button" href="our-team.html">Our Team</a>
				</li>
				<li class="navbar-item dropdown">
					<a id="branches-button" href="JavaScript:void(0);" onclick="dropdown(this)">Branches</a>
					<div class="contents">
						<a id="engineering-button" href="engineering.html">Engineering</a>
						<a id="programming-button" href="programming.html">Programming</a>
						<a id="business-button" href="business.html">Business</a>
					</div>
				</li>
				<li class="navbar-item">
					<a id="media-button" href="media.html">Media</a>
				</li>
				<li class="navbar-item">
					<a id="contact-button" href="contact.html">Contact</a>
				</li>
				<li class="navbar-item">
					<a id="donate-button" href="donate.html">Donate</a>
				</li>
				<li class="navbar-item">
					<a id="sponsors-button" href="sponsors.html">Sponsors</a>
				</li>
			</ul>
		`;
	}
	
	//Determine current page
	let currentPage = location.pathname.split("/").pop();
	
	//Determine what button to set active
	let fileIndex = -1;
	let subfileIndex = -1;
	if (!currentPage.includes("html")) {
		fileIndex = 0;
	}
	else {
		for (var i = 0; i < pages.length; i++) {
			if (pages[i].file === currentPage) {
				fileIndex = pages[i].num;
				if (pages[i].subfiles.length > 0) {
					subfileIndex = pages[i].num + 1;
				}
				break;
			}
			else {
				for (var j = 0; j < pages[i].subfiles.length; j++) {
					if (pages[i].subfiles[j] === currentPage) {
						fileIndex = pages[i].num;
						subfileIndex = pages[i].num + j + 1;
						break;
					}
				}
			}
			
			if (fileIndex !== -1) {
				break;
			}
		}
	}
	
	//Set active page
	let navButtons = [document.getElementById("home-button"), document.getElementById("our-team-button"),
		document.getElementById("branches-button"), document.getElementById("engineering-button"), 
		document.getElementById("programming-button"), document.getElementById("business-button"),
		document.getElementById("media-button"), document.getElementById("contact-button"),
		document.getElementById("donate-button"), document.getElementById("sponsors-button")];
	for (let i = 0; i < navButtons.length; i++) {
		if (i === fileIndex || i === subfileIndex) {
			navButtons[i].classList.add("active");
		}
		else {
			navButtons[i].classList.remove("active");
		}
	}
}
controlNavbar();
window.onresize = function() {controlNavbar();};