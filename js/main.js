var inverted = false;

let hamburger;
let navLinks;
let links;

let home;
let projects;
let webapps;
let contact;
let cv;

function Invert() {
	if (inverted) {
		document.documentElement.style.setProperty("--bg", "#F0F0F0");
		document.documentElement.style.setProperty("--bg2", "#EAEAEA");
		document.documentElement.style.setProperty("--bg3", "#DEDEDE");
		document.documentElement.style.setProperty("--font", "#000");
		document.documentElement.style.setProperty("--accent", "#DF643A");
		document.documentElement.style.setProperty("--accent2", "#3875B7");
		inverted = false;
	} else {
		document.documentElement.style.setProperty("--bg", "#101010");
		document.documentElement.style.setProperty("--bg2", "#202020");
		document.documentElement.style.setProperty("--bg3", "#303030");
		document.documentElement.style.setProperty("--font", "#f0f0f0");
		document.documentElement.style.setProperty("--accent", "#3875B7");
		document.documentElement.style.setProperty("--accent2", "#DF643A");
		inverted = true;
	}
}

function create_element(type, text) {
	element = document.createElement(type);
	element.innerText = text;
	return element;
}

function create_button(link, text) {
	button = create_element("a", text);
	button.setAttribute("href", link);
	button.setAttribute("target", "_blank");
	return button;
}

function create_element_class(type, clas) {
	element = document.createElement(type);
	element.classList.add(clas);
	return element;
}

function create_element_class_text(type, text, clas) {
	element = create_element(type, text);
	element.classList.add(clas);
	return element;
}

function create_web_app(title, descriptor, link) {
	main_div = create_element_class("div", "web_app");
	main_div.appendChild(create_element("h2", title));

	span = document.createElement("span");
	span.appendChild(create_element("p", descriptor));

	main_div.appendChild(span);

	bottom = create_element_class("div", "web_bottom");
	bottom.appendChild(create_button(link, "Open"));
	main_div.appendChild(bottom);

	return main_div;
}

function create_project_basic(title, year, skills, descriptor) {
	main_div = create_element_class("div", "project");

	top_div = create_element_class("div", "project_title");

	top_div.appendChild(create_element("h2", title));
	top_div.appendChild(create_element("h6", year));

	main_div.appendChild(top_div);

	span = document.createElement("span");

	span.appendChild(create_element("h5", skills));
	span.appendChild(create_element("p", descriptor));
	top_div.appendChild(span);
	main_div.appendChild(top_div);

	return main_div;
}

function create_bottom_project(link, text) {
	bottom_project = create_element_class("div", "bottom_project");
	bottom_project.appendChild(create_button(link, text));
	return bottom_project;
}

function create_project_download(title, year, skills, descriptor, link) {
	base = create_project_basic(title, year, skills, descriptor);
	base.appendChild(create_bottom_project(link, "Download"));

	return base;
}

function create_project_source(title, year, skills, descriptor, source_link) {
	base = create_project_basic(title, year, skills, descriptor);
	base.appendChild(create_bottom_project(source_link, "Source"));

	return base;
}

function create_project_full(
	title,
	year,
	skills,
	descriptor,
	source_link,
	view_link
) {
	base = create_project_basic(title, year, skills, descriptor);
	bottom_project = create_bottom_project(source_link, "Source");
	bottom_project.appendChild(create_button(view_link, "View"));
	base.appendChild(bottom_project);

	return base;
}

function create_header_option(object, text, onclick) {
	object = create_element("a", text.toUpperCase());
	object.setAttribute("onclick", onclick);
	object.classList.add("header-link");
	return object;
}

function add_to_content(element) {
	document.getElementById("content").appendChild(element);
}

function header() {
	hamburger = create_element_class("div", "hamburger");
	hamburger.setAttribute("onclick", "navLinks.classList.toggle('open')");
	hamburger.appendChild(create_element_class("div", "line"));
	hamburger.appendChild(create_element_class("div", "line"));
	hamburger.appendChild(create_element_class("div", "line"));

	topDiv = create_element_class("div", "topDiv");
	logo = create_element_class_text("a", "Diego", "Logo");
	logo.appendChild(
		create_element_class_text("span", "Palmerín", "text-primary")
	);
	topDiv.appendChild(logo);
	topDiv.appendChild(
		create_element("h3", "Front-End Developer | Student | Mexico City")
	);
	topDiv.setAttribute("onclick", "Invert()");

	navLinks = create_element_class("ul", "nav-links");

	li1 = document.createElement("li");
	li2 = document.createElement("li");
	li3 = document.createElement("li");
	li4 = document.createElement("li");
	li5 = document.createElement("li");

	home = create_header_option(home, "Home", "add_home()");
	projects = create_header_option(projects, "Projects", "add_projects()");
	webapps = create_header_option(webapps, "WebApps", "add_web_apps()");
	contact = create_header_option(contact, "Contact", "add_contact()");
	cv = create_header_option(cv, "CV", "add_cv()");
	cv.classList.add("cv");

	li1.appendChild(home);
	li2.appendChild(projects);
	li3.appendChild(webapps);
	li4.appendChild(contact);
	li5.appendChild(cv);
	navLinks.appendChild(li1);
	navLinks.appendChild(li2);
	navLinks.appendChild(li3);
	navLinks.appendChild(li4);
	navLinks.appendChild(li5);

	document.getElementById("header").appendChild(hamburger);
	document.getElementById("header").appendChild(topDiv);
	document.getElementById("header").appendChild(navLinks);
	home.classList.add("selected");
	Invert();
	add_home();
}

function remove_selected() {
	navLinks.classList.remove("open");
	home.classList.remove("selected");
	projects.classList.remove("selected");
	webapps.classList.remove("selected");
	contact.classList.remove("selected");
	cv.classList.remove("selected");
}

function add_home() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	remove_selected();
	home.classList.add("selected");

	document.getElementById("content").appendChild(create_element("h2", "About"));
	add_to_content(
		create_element(
			"p",
			"I'm 20 years old and I'm currently enrolled in Computer Science at Instituto Tecnológico de Monterrey Campus Estado de México."
		)
	);
	add_to_content(
		create_element_class_text(
			"p",
			"I'm interested in combining art and technology to create user experiences. My main focus is currently Web Development though I am well versed in Python, C# and Java.",
			"separation"
		)
	);
	add_to_content(create_element("h2", "Skills"));
	add_to_content(
		create_element_class_text(
			"p",
			"Python | HTML | CSS | JS | Java | C# | GIT | Scrum",
			"separation"
		)
	);
}

function add_projects() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	remove_selected();
	projects.classList.add("selected");

	add_to_content(create_element_class_text("h2", "Projects", "separation"));

	coll1 = create_element_class("div", "collumn");
	coll1.appendChild(
		create_project_full(
			"Refugio San Gregorio",
			"2019",
			"HTML, CSS",
			"A webpage made for a dog refuge located in Mexico City.",
			"https://github.com/DpalmeITESM/dpalmeitesm.github.io",
			"https://refugiosangregorio.com"
		)
	);
	coll1.appendChild(
		create_project_source(
			"Assembly 8086 Compiler",
			"2019",
			"Python",
			"It runs Asembly 8086 code using python.",
			"https://github.com/Dpalme/Assembly-8086"
		)
	);
	coll1.appendChild(
		create_project_full(
			"Caesar Cypher",
			"2019",
			"HTML, CSS, JS, Python",
			"Using statistical analysis, this program decodes encoded messages that use the Caesar Cypher.",
			"https://github.com/Dpalme/CaesarCypher",
			"https://dpalme.github.io/CaesarCypher/"
		)
	);
	coll1.appendChild(
		create_project_full(
			"Compra Local",
			"2019",
			"HTML, CSS, JS",
			"Created a simple UI mockup using native js that replicates React behaviour.",
			"https://github.com/Dpalme/Compra-Local",
			"https://dpalme.github.io/Compra-Local/"
		)
	);
	coll1.appendChild(
		create_project_full(
			"Brawlout Overlay",
			"2018",
			"Lua, Rainmeter",
			"Created a simple UI overlay to be used when streaming competitive Brawlout.",
			"https://github.com/Dpalme/Brawlout-Overlay",
			"https://refugiosangregorio.com"
		)
	);
	coll1.appendChild(
		create_project_download(
			"Sisyphus",
			"2017",
			"Unity, C#",
			"A game about pushing a boulder up a mountain.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3Qk1xZGlrR2xOa0E"
		)
	);
	coll1.appendChild(
		create_project_download(
			"The Getter",
			"2017",
			"Unity, C#",
			"A game about catching as many cubes before the timer runs out.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3VFBJemxVMWFvMlk"
		)
	);
	coll1.appendChild(
		create_project_download(
			"Running in the eighties",
			"2017",
			"Unity, C#",
			"A proceduraly generated game where you have to drive to the finish line.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3SDlkZjRCNkRCUWs"
		)
	);

	add_to_content(coll1);
}

function add_web_apps() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	remove_selected();
	webapps.classList.add("selected");

	add_to_content(create_element_class_text("h2", "Web Apps", "separation"));

	row = create_element_class("div", "row");

	coll1 = create_element_class("div", "collumn");
	coll1.appendChild(
		create_web_app(
			"Decision Maker",
			"Chooses a random option.",
			"WebApps/DecisionMaker.html"
		)
	);
	coll1.appendChild(
		create_web_app(
			"Vector Calculator",
			"Calculates the resulting vector from the sum of n vectors.",
			"WebApps/VectorCalc.html"
		)
	);
	coll1.appendChild(
		create_web_app(
			"Slope Calculator",
			"Calculates the slope given 2 coordinates.",
			"WebApps/M.html"
		)
	);
	coll1.appendChild(
		create_web_app(
			"Cillisi",
			"Replaces all vowels on a text with i.",
			"WebApps/cillisi.html"
		)
	);
	coll1.appendChild(
		create_web_app(
			"Random Poem",
			"Collection of poems from different authors on different languages.",
			"https://dpalme.github.io/Random-Poem/"
		)
	);
	row.appendChild(coll1);

	coll2 = create_element_class("div", "collumn");
	coll2.appendChild(
		create_web_app(
			"Gravitational Attraction",
			"Calculates the Gravitational Attraction given the mass of 2 objects and their distance.",
			"WebApps/F=G.html"
		)
	);
	coll2.appendChild(
		create_web_app(
			"Time Dilation Calculator",
			"Calculates the time dilation for a given speed according to a static point of reference.",
			"WebApps/TDC.html"
		)
	);
	coll2.appendChild(
		create_web_app(
			"Length Contraction",
			"Calculates the apparent lenght contraction of an object given the relative speed to it.",
			"WebApps/LengthContraction.html"
		)
	);
	coll2.appendChild(
		create_web_app(
			"Caesar Cypher",
			"Decodes messages encrypted using the Caesar Cypher method. Spanish only",
			"https://dpalme.github.io/CaesarCypher/"
		)
	);
	row.appendChild(coll2);

	add_to_content(row);
}

function add_contact() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	remove_selected();
	contact.classList.add("selected");

	coll = create_element_class("div", "contact_form");

	coll.appendChild(
		create_button(
			"https://www.linkedin.com/in/diego-palmerin-b7510818a/",
			"LinkedIn"
		)
	);

	add_to_content(coll);
}

function add_cv() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	remove_selected();
	cv.classList.add("selected");
}
