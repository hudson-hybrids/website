const CONDENSED_MENU_WIDTH = 550;
var navbar = document.getElementById("main-navbar");

controlNavbar();
window.onresize = function() {controlNavbar();};

function dropdown(id) {
	if (id.classList.contains("expanded")) {
		id.classList.remove("expanded");
	}
	else {
		id.classList.add("expanded");
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
			file: "branches.html",
			subfiles: ["", "engineering.html", "programming.html"],
			num: 1
		},
		
		{
			file: "contact.html",
			subfiles: [],
			num: 5
		}
	];
	
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	//Menu button in navbar
	if (windowWidth < CONDENSED_MENU_WIDTH) {
		navbar.innerHTML = `
			<li class="navbar-item dropdown">
				<a href="JavaScript:void(0);">Menu</a>
				<div id="main-navbar-dropdown-contents" class="contents">
					<a id="home-button" href="index.html">Home</a>
					<div class="dropdown" onclick="dropdown(this)">
						<a id="branches-button" href="JavaScript:void(0);">Branches</a>
						<div class="contents">
							<a id="branches-overview-button" href="branches.html">Overview</a>
							<a id="engineering-button" href="engineering.html">Engineering</a>
							<a id="programming-button" href="programming.html">Programming</a>
						</div>
					</div>
					<a id="contact-button" href="contact.html">Contact</a>
				</div>
			</li>
		`;
	}
	//All pages in navbar
	else {
		navbar.innerHTML = `
			<li class="navbar-item">
				<a id="home-button" href="index.html">Home</a>
			</li>
			<li class="navbar-item dropdown">
				<a id="branches-button" href="JavaScript:void(0);">Branches</a>
				<div class="contents">
					<a id="branches-overview-button" href="branches.html">Overview</a>
					<a id="engineering-button" href="engineering.html">Engineering</a>
					<a id="programming-button" href="programming.html">Programming</a>
				</div>
			</li>
			<li class="navbar-item">
				<a id="contact-button" href="contact.html">Contact</a>
			</li>
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
	let navButtons = [document.getElementById("home-button"), document.getElementById("branches-button"), 
		document.getElementById("branches-overview-button"), document.getElementById("engineering-button"), 
		document.getElementById("programming-button"), document.getElementById("contact-button")];
	for (let i = 0; i < navButtons.length; i++) {
		if (i === fileIndex || i === subfileIndex) {
			navButtons[i].classList.add("active");
		}
		else {
			navButtons[i].classList.remove("active");
		}
	}
}
