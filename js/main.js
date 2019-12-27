var inverted = false;
let home;
let proyects;
let webapps;
let contact;
let cv;

function Invert() {
	if (inverted) {
		document.documentElement.style.setProperty("--bg", "#F0F0F0");
		document.documentElement.style.setProperty("--bg2", "#EAEAEA");
		document.documentElement.style.setProperty("--bg3", "#DEDEDE");
		document.documentElement.style.setProperty("--font", "#000");
		document.documentElement.style.setProperty("--accent", "#3875B7");
		document.documentElement.style.setProperty("--accent2", "#DF643A");
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

function create_element(type, text){
    element = document.createElement(type);
    element.innerText = text;
    return element
}

function create_button(link, text){
    button = create_element("a", text);
	button.setAttribute("href", link);
    button.setAttribute("target", "_blank");
    return button
}

function create_element_class(type, clas){
    element = document.createElement(type);
    element.classList.add(clas);
    return element
}

function create_element_class_text(type, text, clas){
    element = create_element(type, text);
    element.classList.add(clas);
    return element
}


function create_proyect_basic(title, year, skills, descriptor) {
	main_div = create_element_class("div", "proyect")

	main_div.appendChild(create_element("h2", title));
	main_div.appendChild(create_element("h6", year));

	span = document.createElement("span");

	span.appendChild(create_element("h5", skills));
	span.appendChild(create_element("p", descriptor));
	main_div.appendChild(span);

	return main_div;
}

function create_web_app(title, descriptor, link) {
	main_div = create_element_class("div", "proyect")
    main_div.appendChild(create_element("h2", title));
    
	span = document.createElement("span");
	span.appendChild(create_element("p", descriptor));
    
    main_div.appendChild(span);
    main_div.appendChild(create_bottom_proyect(link, "Open"));

	return main_div;
}

function create_bottom_proyect(link, text){
    bottom_proyect = create_element_class("div", "bottom_proyect");
    bottom_proyect.appendChild(create_button(link, text))
	return bottom_proyect
}

function create_proyect_download(title, year, skills, descriptor, link) {
	base = create_proyect_basic(title, year, skills, descriptor);
	base.appendChild(create_bottom_proyect(link, "Download"))

	return base;
}

function create_proyect_source(title, year, skills, descriptor, source_link) {
	base = create_proyect_basic(title, year, skills, descriptor);
	base.appendChild(create_bottom_proyect(source_link, "Source"))

	return base;
}

function create_proyect_full(
	title,
	year,
	skills,
	descriptor,
	source_link,
	view_link) {
	base = create_proyect_basic(title, year, skills, descriptor);
    bottom_proyect = create_bottom_proyect(source_link, "Source")
	bottom_proyect.appendChild(create_button(view_link, "View"))
	base.appendChild(bottom_proyect);

	return base;
}

function create_header_option(object, text, onclick){
    object = create_element("a", text.toUpperCase());
    object.setAttribute("onclick", onclick);
    return object
}

function header() {
    topDiv = create_element_class("div", "topDiv");

    logo = create_element_class_text("a", "Diego", "Logo")
	logo.appendChild(create_element_class_text("span", "Palmerín", "text-primary"));
	topDiv.appendChild(logo);

	topDiv.appendChild(create_element("h3", "Front-End Developer | Student | Mexico City"));

    bottomDiv = create_element_class("div", "navBar_2");

    home = create_header_option(home, "Home", "add_home()");
	proyects = create_header_option(proyects, "Proyects", "add_proyects()");
	webapps = create_header_option(webapps, "WebApps", "add_web_apps()");
	contact = create_header_option(contact, "Contact", "add_contact()");
	cv = create_header_option(cv, "CV", "add_cv()");

	bottomDiv.appendChild(home);
	bottomDiv.appendChild(proyects);
	bottomDiv.appendChild(webapps);
	bottomDiv.appendChild(contact);
	bottomDiv.appendChild(cv);

	document.getElementById("header").appendChild(topDiv);
	document.getElementById("header").appendChild(bottomDiv);
	home.classList.add("selected");
	Invert();
}

function add_home() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	home.classList.add("selected");
	proyects.classList.remove("selected");
	webapps.classList.remove("selected");
	contact.classList.remove("selected");
	cv.classList.remove("selected");

	about = document.createElement("h2");
	about.innerHTML = "About";
	document.getElementById("content").appendChild(about);

	firstLine = document.createElement("p");
	firstLine.innerText =
		"I'm 20 years old and I'm currently enrolled in Computer Science at Instituto Tecnológico de Monterrey Campus Estado de México.";
	document.getElementById("content").appendChild(firstLine);

	secondLine = document.createElement("p");
	secondLine.innerText =
		"I'm interested in combining art and technology to create user experiences. My main focus is currently Web Development though I am well versed in Python, C# and Java.";
	secondLine.classList.add("separation");
	document.getElementById("content").appendChild(secondLine);

	skills = document.createElement("h2");
	skills.innerText = "Skills";
	document.getElementById("content").appendChild(skills);

	thirdLine = document.createElement("p");
	thirdLine.innerText = "Python | HTML | CSS | JS | Java | C# | GIT | Scrum";
	thirdLine.classList.add("separation");
	document.getElementById("content").appendChild(thirdLine);
}

function add_proyects() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	home.classList.remove("selected");
	proyects.classList.add("selected");
	webapps.classList.remove("selected");
	contact.classList.remove("selected");
	cv.classList.remove("selected");

	title = document.createElement("h2");
	title.innerText = "Proyects";
	title.classList.add("separation");
	document.getElementById("content").appendChild(title);

	row = document.createElement("div");
	row.classList.add("row");

	coll1 = document.createElement("div");
	coll1.classList.add("column");
	coll1.appendChild(
		create_proyect_full(
			"Caesar Cypher",
			"2019",
			"HTML, CSS, JS, Python",
			"Using statistical analysis, this program decodes encoded messages that use the Caesar Cypher.",
			"https://github.com/Dpalme/CaesarCypher",
			"https://dpalme.github.io/CaesarCypher/"
		)
	);
	coll1.appendChild(
		create_proyect_full(
			"Brawlout Overlay",
			"2018",
			"Lua, Rainmeter",
			"Created a simple UI overlay to be used when streaming competitive Brawlout.",
			"https://github.com/Dpalme/Brawlout-Overlay",
			"https://refugiosangregorio.com"
		)
	);
	coll1.appendChild(
		create_proyect_full(
			"Compra Local",
			"2019",
			"HTML, CSS, JS",
			"Created a simple UI mockup using native js that replicates React behaviour.",
			"https://github.com/Dpalme/Compra-Local",
			"https://dpalme.github.io/Compra-Local/"
		)
	);
	coll1.appendChild(
		create_proyect_download(
			"Sisyphus",
			"2017",
			"Unity, C#",
			"A game about pushing a boulder up a mountain.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3Qk1xZGlrR2xOa0E"
		)
	);
	row.appendChild(coll1);

	coll2 = document.createElement("div");
	coll2.classList.add("column");
	coll2.appendChild(
		create_proyect_source(
			"Assembly 8086 Compiler",
			"2019",
			"Python",
			"It runs Asembly 8086 code using python.",
			"https://github.com/Dpalme/Assembly-8086"
		)
	);
	coll2.appendChild(
		create_proyect_full(
			"Refugio San Gregorio",
			"2019",
			"HTML, CSS",
			"A webpage made for a dog refuge located in Mexico City.",
			"https://github.com/DpalmeITESM/dpalmeitesm.github.io",
			"https://refugiosangregorio.com"
		)
	);
	coll2.appendChild(
		create_proyect_download(
			"The Getter",
			"2017",
			"Unity, C#",
			"A game about catching as many cubes before the timer runs out.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3VFBJemxVMWFvMlk"
		)
	);
	coll2.appendChild(
		create_proyect_download(
			"Running in the eighties",
			"2017",
			"Unity, C#",
			"A proceduraly generated game where you have to drive to the finish line.",
			"https://drive.google.com/open?id=0B5xSt2wAJGz3SDlkZjRCNkRCUWs"
		)
	);
	row.appendChild(coll2);

	document.getElementById("content").appendChild(row);
}

function add_web_apps() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	home.classList.remove("selected");
	proyects.classList.remove("selected");
	webapps.classList.add("selected");
	contact.classList.remove("selected");
	cv.classList.remove("selected");

	title = document.createElement("h2");
	title.innerText = "Web Apps";
	title.classList.add("separation");
	document.getElementById("content").appendChild(title);

	row = document.createElement("div");
	row.classList.add("row");

	coll1 = document.createElement("div");
	coll1.classList.add("column");
	coll1.appendChild(
		create_web_app(
			"Decision Maker",
			"Chooses a random option from up to 5 inputs.",
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
	row.appendChild(coll1);

	coll2 = document.createElement("div");
	coll2.classList.add("column");
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

	document.getElementById("content").appendChild(row);
}

function add_contact() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	home.classList.remove("selected");
	proyects.classList.remove("selected");
	webapps.classList.remove("selected");
	contact.classList.add("selected");
	cv.classList.remove("selected");
}

function add_cv() {
	while (document.getElementById("content").firstChild)
		document
			.getElementById("content")
			.removeChild(document.getElementById("content").firstChild);

	home.classList.remove("selected");
	proyects.classList.remove("selected");
	webapps.classList.remove("selected");
	contact.classList.remove("selected");
	cv.classList.add("selected");
}
