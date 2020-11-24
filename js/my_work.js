function my_work_start() {
    clearContent()
    document.getElementById("work").classList.add("selected");
    document.getElementById("about").classList.remove("selected");
    document.getElementById("contact").classList.remove("selected");

    objectToContent({
        type: "h2",
        innerText: "Professional",
        class: "fade mb-sm lh-lg col-12"
    });

    addToContent(create_proyect("./img/GCP/Landing.png", "my_work_gcp()"));
    addToContent(create_proyect("./img/tecmun/Landing.png", "my_work_tecmun()"));
    addToContent(create_proyect("./img/refugio/landing.jpg", "my_work_refugio()"));

    objectToContent({
        type: "h2",
        innerText: "Personal",
        class: "fade my-sm mt-lg lh-lg col-12"
    });

    objectToContent({
        type: "a",
        class: "col-q h4 blue text-c fade mb-sm",
        href: "https://dpalmer.in/Peoria",
        target: "_blank",
        innerText: "Peoria",
        child: object({
            type: "p",
            innerText: "A custom CSS library."
        })
    });

    objectToContent({
        type: "a",
        class: "col-q h4 blue text-c fade mb-sm",
        href: "https://dpalmer.in/Random",
        target: "_blank",
        innerText: "Random",
        child: object({
            type: "p",
            innerText: "A collection of my favorite things."
        })
    });

    objectToContent({
        type: "a",
        class: "col-q h4 blue text-c fade mb-sm",
        href: "https://dpalmer.in/QuizDb",
        target: "_blank",
        innerText: "QuizDb",
        child: object({
            type: "p",
            innerText: "A study app built with IndexedDB."
        })
    });

    objectToContent({
        type: "a",
        class: "col-q h4 blue text-c fade mb-sm",
        href: "https://carlosmtz98.github.io/EerieSpace/",
        target: "_blank",
        innerText: "Eerie Space",
        child: object({
            type: "p",
            innerText: "A twin stick shooter mobile game."
        })
    });

    objectToContent({
        type: "a",
        class: "col-q h4 blue text-c fade mb-sm",
        href: "https://carlosmtz98.github.io/EerieSpace/",
        target: "_blank",
        innerText: "Eerie Space",
        child: object({
            type: "p",
            innerText: "A twin stick shooter mobile game."
        })
    });
}

function my_work_gcp() {
    clearContent();
    objectToContent({
        type: "div",
        class: "col-12 fade",
        children: [
            objectToContent({
                type: "h2",
                innerText: "GCP",
                class: "mx-sm d-inline lh-lg"
            }), objectToContent({
                type: "a",
                class: "blue lh-lg",
                target: "_blank",
                href: "https://dpalme.github.io/GCP",
                innerText: "LIVE VERSION"
            })
        ]
    })

    objectToContent({
        type: "div",
        class: "col-12 mt-1 fade",
        children: [
            object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/GCP/grid.jpg",
                alt: "GCP grid"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/GCP/Typography.png",
                alt: "GCP Typography"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/GCP/Landing.png",
                alt: "GCP Landing"
            })
        ]
    })

    addToContent(paragraph("The Client", "GCP is a mexican company with over 40 years of experience in construction and asphalt."));
    addToContent(paragraph("Context", "GCP was looking for a redesign that more closely spoke to their vision as a company. Taking this into account, I decided to go for a minimalist layout with a focus on an intuitive and dynamic grid system based on percentages."));
    addToContent(paragraph("Font", "GCP represents a tradition of inovation. Thus, a grotesque font with modern characteristics best suited the new identity for the brands webiste and worked well with the text from the logo."));
    addToContent(paragraph("Landing", "The landing page is the most important part of any webpage. It's simple, yet elegant, the title text fills the space naturally and the sizing accentuates the client's defining characteristics"));

    objectToContent({
        type: "a",
        innerText: "< BACK",
        href: "javascript:my_work_start()",
        class: "lh-lg orange"
    })
}

function my_work_tecmun() {
    clearContent();
    objectToContent({
        type: "div",
        class: "col-12 fade",
        children: [
            objectToContent({
                type: "h2",
                innerText: "Tecmun",
                class: "mx-sm d-inline lh-lg"
            }), objectToContent({
                type: "a",
                class: "blue lh-lg",
                target: "_blank",
                href: "https://dpalme.github.io/TecMun20",
                innerText: "LIVE VERSION"
            })
        ]
    })

    objectToContent({
        type: "div",
        class: "col-12 mt-1 fade",
        children: [
            object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/tecmun/Colors.png",
                alt: "GCP grid"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/tecmun/Type.png",
                alt: "GCP Typography"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/tecmun/Landing.png",
                alt: "GCP Landing"
            })
        ]
    })

    addToContent(paragraph("The Client", "TECMUN is a student association from the mexican university Tecnológico de Monterrey CEM. They needed a webpage with an intuitive interface and CMS to manage student registrations. We built the webpage with Django and while working on the proyect I created my own CSS library which I later named Peoria. You're seeing Peoria right now in this webpage."));
    addToContent(paragraph("Visual Identity", "The client needed an intuitive UI/UX that needed no explanation because the users for the page are mostly teachers and elementary school students. With this in mind, I created a color pallete and assigned a different color to each type of committe with variations that depended on the context the color was shown."));
    addToContent(paragraph("Font", "For TECMUN I chose Montserrat because it's availability with google font's and ubiquity allowed for a mixture between a serious look and a fun one."));
    addToContent(paragraph("Landing", "It's simple, important information about the event and a clear call to action."));

    objectToContent({
        type: "a",
        innerText: "< BACK",
        href: "javascript:my_work_start()",
        class: "lh-lg orange"
    })
}

function my_work_refugio() {
    clearContent();
    objectToContent({
        type: "div",
        class: "col-12 fade",
        children: [
            objectToContent({
                type: "h2",
                innerText: "Refugio San Gregorio",
                class: "mx-sm d-inline lh-lg"
            }), objectToContent({
                type: "a",
                class: "blue lh-lg",
                target: "_blank",
                href: "https://refugiosangregorio.com",
                innerText: "LIVE VERSION"
            })
        ]
    })

    objectToContent({
        type: "div",
        class: "col-12 mt-1 fade",
        children: [
            object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/refugio/colores.png",
                alt: "GCP grid"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/refugio/Iconografía.png",
                alt: "GCP Typography"
            }), object({
                type: "img",
                class: "col-4 mb-sm",
                src: "./img/refugio/Tipografía.png",
                alt: "GCP Landing"
            })
        ]
    })

    addToContent(paragraph("The Client", "Refugio San Gregorio is a dog refuge in Mexico City that I volunteer at. I help them with their website and branding."));
    addToContent(paragraph("Context", "Refugio San Gregorio didn't have a website when I joined them. All their online presence was mostly on facebook and we've been gaining tracktion there and on instagram with the website mostly being an oficial information outlet about adoptions."));
    addToContent(paragraph("UX", "It's very task oriented and as such it facilitates the use cases the website is built for. Donations, adoptions, social media links, this results in an increased click through rate."));

    objectToContent({
        type: "a",
        innerText: "< BACK",
        href: "javascript:my_work_start()",
        class: "lh-lg orange"
    })
}