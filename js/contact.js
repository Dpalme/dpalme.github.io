function contact_start() {
    clearContent()

    document.getElementById("work").classList.remove("selected");
    document.getElementById("about").classList.remove("selected");
    document.getElementById("contact").classList.add("selected");

    objectToContent({
        type: "h2",
        innerText: "Contact",
        class: "col-12 my-sm fade"
    })
    objectToContent({
        type: "div",
        class: "col-12 mt-1 fade",
        children: [
            object({
                type: "h4",
                innerText: "Send me an email"
            }), object({
                type: "p",
                class: "justify d-inline",
                innerText: "You can reach me at "
            }), object({
                type: "a",
                href: "mailto:dpalme@me.com",
                target: "_blank",
                innerText: "dpalme@me.com",
                class: "blue"
            })
        ]
    });
    objectToContent({
        type: "div",
        class: "col-12 mt-sm fade",
        children: [
            object({
                type: "h4",
                innerText: "Social Media"
            }), object({
                type: "p",
                class: "justify d-inline",
                innerText: "You can find me at @diegoopb or @diegoo_pb2 on "
            }), object({
                type: "a",
                href: "https://www.instagram.com/diegoo_pb2/",
                target: "_blank",
                innerText: "INSTAGRAM",
                class: "blue"
            })
        ]
    });
}