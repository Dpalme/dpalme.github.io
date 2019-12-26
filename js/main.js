var inverted = false;


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

function header(){
    navBar = document.createElement("span");
    navBar.classList.add("navBar");

    topDiv = document.createElement("div");
    topDiv.style.property.margin = ".25vw 0vw 0vw 5vw;";
    
    logo = document.createElement("a");
    secondary = document.createElement("span");
    logo.innerText = "Diego";
    logo.classList.add("Logo");
    secondary.innerText = "Palmerín";
    secondary.classList.add("text-primary");
    logo.appendChild(secondary);
    topDiv.appendChild(logo);

    descriptors = document.createElement("h3");
    topDiv.style.property.margin = "2vw .3vw;";
    descriptors.innerText = "Front-End Developer | Student | Mexico City";
    topDiv.appendChild(descriptors);

    bottomDiv = document.createElement("div");
    bottomDiv.classList.add("navBar_2");

    invertLink = document.createElement("a");
    home = document.createElement("a");
    proyects = document.createElement("a");
    webapps = document.createElement("a");
    contact = document.createElement("a");
    cv = document.createElement("a");

    invertLink.innerText = "INVERT";
    invertLink.setProperty("onclick", "Invert()");
    home.setProperty("href", "index.html");
    home.innerText = "HOME";
    home.setProperty("id", "Home");
    proyects.setProperty("href", "index.html#proyects");
    proyects.innerText = "PROYECTS";
    webapps.setProperty("href", "WebApps.html");
    webapps.innerText = "WEBAPPS";
    contact.setProperty("href", "Contact.html");
    contact.innerText = "CONTACT";
    cv.setProperty("href", "CV.html");
    cv.innerText = "CV";

    if (document.title === "Dpalme") home.classList.add("selected");
    if (document.title === "WebApps") webapps.classList.add("selected");
    if (document.title === "CV") cv.classList.add("selected");
    if (document.title === "Contact") contact.classList.add("selected");

    navBar.appendChild(topDiv);
    navBar.appendChild(bottomDiv);
    document.body.appendChild(navBar);
}

Invert();