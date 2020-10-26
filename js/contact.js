function contact_start() {
    clearContent()

    document.getElementById("work").classList.remove("active");
    document.getElementById("about").classList.remove("active");
    document.getElementById("contact").classList.add("active");

    objectToContent({
        type: "h2",
        innerText: "Contact"
    })
    objectToContent({
        type: "div",
        classList: "five columns",
        children: [paragraph("Send me an email", "You can reach me at dpalme@me.com"),
            object({
                type: "a",
                href: "mailto:dpalme@me.com",
                innerText: "MAIL",
                classList: "header-link vertical-center-text five columns text-center"
            })
        ]
    });
    objectToContent({
        type: "div",
        classList: "five columns",
        children: [paragraph("Social Media", "You can find me at @diegoopb or @diegoo_pb2 on instagram"),
            object({
                type: "a",
                href: "https://www.instagram.com/diegoo_pb2/",
                innerText: "INSTAGRAM",
                classList: "header-link vertical-center-text five columns text-center"
            })
        ]
    });
}