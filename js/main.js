var inverted = false;
let home;
let proyects;
let webapps;
let contact;
let cv;

function Invert(){
    if(inverted){
        document.documentElement.style.setProperty('--bg', "#F0F0F0");
        document.documentElement.style.setProperty('--bg2', "#EAEAEA");
        document.documentElement.style.setProperty('--bg3', "#DEDEDE");
        document.documentElement.style.setProperty('--font', "#000");
        document.documentElement.style.setProperty('--accent', "#3875B7");
        document.documentElement.style.setProperty('--accent2', "#DF643A");
        inverted = false;
    }
    else{
        document.documentElement.style.setProperty('--bg', "#101010");
        document.documentElement.style.setProperty('--bg2', "#202020");
        document.documentElement.style.setProperty('--bg3', "#303030");
        document.documentElement.style.setProperty('--font', "#f0f0f0");
        document.documentElement.style.setProperty('--accent', "#3875B7");
        document.documentElement.style.setProperty('--accent2', "#DF643A");
        inverted = true;
    }
}

function create_proyect_basic(title, year, skills, descriptor){
    main_div = document.createElement("div");
    main_div.classList.add("proyect");

    title_tag = document.createElement("h2");
    title_tag.innerText = title ;
    
    year_tag = document.createElement("h6");
    year_tag.innerText = year;
    
    main_div.appendChild(title_tag);
    main_div.appendChild(year_tag);

    span = document.createElement("span");

    skills_tag = document.createElement("h5");
    skills_tag.innerText = skills;

    descriptor_tag = document.createElement("p");
    descriptor_tag.innerText = descriptor;

    span.appendChild(skills_tag);
    span.appendChild(descriptor_tag);
    main_div.appendChild(span);

    return main_div;
}

function create_proyect_download(title, year, skills, descriptor, link){
    base = create_proyect_basic(title, year, skills, descriptor);

    bottom_proyect = document.createElement("div");
    bottom_proyect.classList.add("bottom_proyect");

    download_tag = document.createElement("a");
    download_tag.innerText = "Download";
    download_tag.setAttribute("href", link);
    download_tag.setAttribute("target", "_blank");
    bottom_proyect.appendChild(download_tag);

    base.appendChild(bottom_proyect);

    return base;
}

function create_proyect_source(title, year, skills, descriptor, source_link){
    base = create_proyect_basic(title, year, skills, descriptor);

    bottom_proyect = document.createElement("div");
    bottom_proyect.classList.add("bottom_proyect");

    source_tag = document.createElement("a");
    source_tag.innerText = "Source";
    source_tag.setAttribute("href", source_link);
    source_tag.setAttribute("target", "_blank");
    bottom_proyect.appendChild(source_tag);

    base.appendChild(bottom_proyect);

    return base;
}


function create_proyect_full(title, year, skills, descriptor, source_link, view_link){
    base = create_proyect_basic(title, year, skills, descriptor);

    bottom_proyect = document.createElement("div");
    bottom_proyect.classList.add("bottom_proyect");

    source_tag = document.createElement("a");
    source_tag.innerText = "Source";
    source_tag.setAttribute("href", source_link);
    source_tag.setAttribute("target", "_blank");
    bottom_proyect.appendChild(source_tag);

    view_tag = document.createElement("a");
    view_tag.innerText = "View";
    view_tag.setAttribute("href", view_link);
    view_tag.setAttribute("target", "_blank");
    bottom_proyect.appendChild(view_tag);

    base.appendChild(bottom_proyect);

    return base;
}


function header(){
    topDiv = document.createElement("div");
    topDiv.classList.add("topDiv")

    logo = document.createElement("a");
    secondary = document.createElement("span");
    logo.innerText = "Diego";
    logo.classList.add("Logo");
    secondary.innerText = "Palmerín";
    secondary.classList.add("text-primary");
    logo.appendChild(secondary);
    topDiv.appendChild(logo);

    descriptors = document.createElement("h3");
    descriptors.innerText = "Front-End Developer | Student | Mexico City";
    topDiv.appendChild(descriptors);

    bottomDiv = document.createElement("div");
    bottomDiv.classList.add("navBar_2");

    home = document.createElement("a");
    proyects = document.createElement("a");
    webapps = document.createElement("a");
    contact = document.createElement("a");
    cv = document.createElement("a");

    home.setAttribute("onclick", "add_home()");
    home.innerText = "HOME";
    home.setAttribute("id", "Home");
    proyects.setAttribute("onclick", "add_proyects()");
    proyects.innerText = "PROYECTS";
    webapps.setAttribute("onclick", "add_web_apps()");
    webapps.innerText = "WEBAPPS";
    contact.setAttribute("onclick", "add_contact()");
    contact.innerText = "CONTACT";
    cv.setAttribute("onclick", "add_cv()");
    cv.innerText = "CV";

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


function add_home(){
    while (document.getElementById("content").firstChild) document.getElementById("content").removeChild(document.getElementById("content").firstChild);

    home.classList.add("selected");
    proyects.classList.remove("selected");
    webapps.classList.remove("selected");
    contact.classList.remove("selected");
    cv.classList.remove("selected");

    about = document.createElement("h2");
    about.innerHTML = "About"
    document.getElementById("content").appendChild(about);

    firstLine = document.createElement("p");
    firstLine.innerText = "I'm 20 years old and I'm currently enrolled in Computer Science at Instituto Tecnológico de Monterrey Campus Estado de México.";
    document.getElementById("content").appendChild(firstLine);

    secondLine = document.createElement("p");
    secondLine.innerText = "I'm interested in combining art and technology to create user experiences. My main focus is currently Web Development though I am well versed in Python, C# and Java.";
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

function add_proyects(){
    while (document.getElementById("content").firstChild) document.getElementById("content").removeChild(document.getElementById("content").firstChild);

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
    coll1.appendChild(create_proyect_full("Caesar Cypher", "2019", "HTML, CSS, JS, Python", "Using statistical analysis, this program decodes encoded messages that use the Caesar Cypher.", "https://github.com/Dpalme/CaesarCypher", "https://dpalme.github.io/CaesarCypher/"));
    coll1.appendChild(create_proyect_full("Brawlout Overlay", "2018", "Lua, Rainmeter", "Created a simple UI overlay to be used when streaming competitive Brawlout.", "https://github.com/Dpalme/Brawlout-Overlay", "https://refugiosangregorio.com"));
    coll1.appendChild(create_proyect_full("Compra Local", "2019", "HTML, CSS, JS", "Created a simple UI mockup using native js that replicates React behaviour.", "https://github.com/Dpalme/Compra-Local", "https://dpalme.github.io/Compra-Local/"));
    coll1.appendChild(create_proyect_download("Sisyphus", "2017", "Unity, C#", "A game about pushing a boulder up a mountain.", "https://drive.google.com/open?id=0B5xSt2wAJGz3Qk1xZGlrR2xOa0E"));
    row.appendChild(coll1);

    coll2 = document.createElement("div");
    coll2.classList.add("column");
    coll2.appendChild(create_proyect_source("Assembly 8086 Compiler", "2019", "Python", "It runs Asembly 8086 code using python.", "https://github.com/Dpalme/Assembly-8086"));
    coll2.appendChild(create_proyect_full("Refugio San Gregorio", "2019", "HTML, CSS", "A webpage made for a dog refuge located in Mexico City.", "https://github.com/DpalmeITESM/dpalmeitesm.github.io", "https://refugiosangregorio.com"));
    coll2.appendChild(create_proyect_download("The Getter", "2017", "Unity, C#", "A game about catching as many cubes before the timer runs out.", "https://drive.google.com/open?id=0B5xSt2wAJGz3VFBJemxVMWFvMlk"));
    coll2.appendChild(create_proyect_download("Running in the eighties", "2017", "Unity, C#", "A proceduraly generated game where you have to drive to the finish line.", "https://drive.google.com/open?id=0B5xSt2wAJGz3SDlkZjRCNkRCUWs"));
    row.appendChild(coll2);

    document.getElementById("content").appendChild(row);
}

function add_web_apps(){
    while (document.getElementById("content").firstChild) document.getElementById("content").removeChild(document.getElementById("content").firstChild);
    
    home.classList.remove("selected");
    proyects.classList.remove("selected");
    webapps.classList.add("selected");
    contact.classList.remove("selected");
    cv.classList.remove("selected");
}

function add_contact(){
    while (document.getElementById("content").firstChild) document.getElementById("content").removeChild(document.getElementById("content").firstChild);
    
    home.classList.remove("selected");
    proyects.classList.remove("selected");
    webapps.classList.remove("selected");
    contact.classList.add("selected");
    cv.classList.remove("selected");
}

function add_cv(){
    while (document.getElementById("content").firstChild) document.getElementById("content").removeChild(document.getElementById("content").firstChild);
    
    home.classList.remove("selected");
    proyects.classList.remove("selected");
    webapps.classList.remove("selected");
    contact.classList.remove("selected");
    cv.classList.add("selected");
}
