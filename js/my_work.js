function my_work_start() {
    clearContent()

    document.getElementById("work").classList.add("active");
    document.getElementById("about").classList.remove("active");
    document.getElementById("contact").classList.remove("active");

    objectToContent({
        type: "h2",
        innerText: "My Work",
        class: "fade lh-lg col-12"
    });

    addToContent(create_proyect("../img/GCP/Landing.png", "GCP", "my_work_gcp()"));
    addToContent(create_proyect("../img/tecmun/Landing.png", "TECMUN", "my_work_tecmun()"));
}

function my_work_gcp() {
    clearContent();

    objectToContent({
        type: "h2",
        innerText: "GCP",
        class: "fade lh-lg"
    });

    objectToContent({
        type: "a",
        class: "blue col-12 text-c",
        href: "https://dpalme.github.io/GCP",
        innerText: "LIVE VERSION"
    })

    addToContent(paragraph_with_image("The Client", "GCP is a mexican company with over 40 years of experience in construction and asphalt.", "../img/GCP/Logo_GCP.png"));
    addToContent(paragraph_with_image("Context", "GCP was looking for a redesign that more closely spoke to their vision as a company. Taking this into account, I decided to go for a minimalist layout with a focus on an intuitive and dynamic grid system based on percentages.", "../img/GCP/grid.jpg"));
    addToContent(paragraph_with_image("Font", "GCP represents a tradition of inovation. Thus, a grotesque font with modern characteristics best suited the new identity for the brands webiste and worked well with the text from the logo.", "../img/GCP/Typography.png"));
    addToContent(paragraph_with_image("Landing", "The landing page is the most important part of any webpage. It's simple, yet elegant, the title text fills the space naturally and the sizing accentuates the client's defining characteristics", "../img/GCP/Landing.png"));

    objectToContent({
        type: "a",
        innerText: "< BACK",
        onclick: "my_work_start()",
        class: "lh-lg col-6"
    })

    
}

function my_work_tecmun() {
    clearContent();

    objectToContent({
        type: "h2",
        innerText: "TECMUN",
        class: "fade vertical-center-text"
    });

    addToContent(paragraph_with_image("The Client", "TECMUN is a student association from the mexican university Tecnológico de Monterrey CEM. They needed a webpage with an intuitive interface and CMS to manage student registrations. We built the webpage with Django and while working on the proyect I created my own CSS library which I later named Peoria. You're seeing Peoria right now in this webpage.", "../img/tecmun/Logo.png"));
    addToContent(paragraph_with_image("Visual Identity", "The client needed an intuitive UI/UX that needed no explanation because the users for the page are mostly teachers and elementary school students. With this in mind, I created a color pallete and assigned a different color to each type of committe with variations that depended on the context the color was shown.", "../img/tecmun/Colors.png"));
    addToContent(paragraph_with_image("Font", "For TECMUN I chose Montserrat because it's availability with google font's and ubiquity allowed for a mixture between a serious look and a fun one.", "../img/tecmun/Type.png"));
    addToContent(paragraph_with_image("Landing", "It's simple, important information about the event and a clear call to action.", "../img/tecmun/Landing.png"));

    objectToContent({
        type: "a",
        class: "block button four columns gutter-padding three-offset col-margin-top",
        href: "https://dpalme.github.io/TecMun20",
        innerText: "LIVE VERSION"
    })

    objectToContent({
        type: "a",
        innerText: "< BACK",
        onclick: "my_work_start()",
        class: "header-link vertical-center-text eight columns one-offset"
    })
}