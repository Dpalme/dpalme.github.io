function about_start() {
    clearContent()

    document.getElementById("work").classList.remove("selected");
    document.getElementById("about").classList.add("selected");
    document.getElementById("contact").classList.remove("selected");

    objectToContent({
        type: "h2",
        innerText: "About Me",
        class: "fade my-sm lh-lg col-12"
    });
    objectToContent({
        type: "p",
        innerText: "I'm A 21 year old living in Mexico and studying a B.S. on Computer Science.",
        class: "justify col-12 fade"
    })

    var music = paragraph("Music", "I play the piano, drums and I'm starting to learn guitar. I've been making music for years but mostly just beats and sample flips. I'm currently working on a post-rock album under the name FORMAS MENORES.");
    music.appendChild(object({
        type: "div",
        class: "col-12 my-sm fade",
        children: [
            object({
                type: "a",
                href: "https://soundcloud.com/diego_pb",
                target: "_blank",
                innerText: "SOUNDCLOUD",
                class: "lh-1 col-6 text-c blue"
            }), object({
                type: "a",
                href: "https://formasmenores.bandcamp.com/",
                target: "_blank",
                innerText: "FORMAS MENORES",
                class: "lh-1 col-6 text-c blue"
            })
        ]
    }))
    addToContent(music);

    var illust = paragraph("Illustration", "I love making playlists and because of that I picked up the hobby of illustration to make cover art for them. I've made album covers for friends as well as portraits. You can find some of my work here:");
    illust.appendChild(object({
        type: "div",
        class: "col-12 my-sm fade",
        children: [,
            object({
                type: "a",
                href: "https://www.instagram.com/diegoo_pb2/",
                target: "_blank",
                innerText: "INSTAGRAM",
                class: "lh-1 col-6 text-c blue"
            }), object({
                type: "a",
                href: "https://www.behance.net/dpalme",
                target: "_blank",
                innerText: "BEHANCE",
                class: "lh-1 col-6 text-c blue"
            })
        ]
    }))
    addToContent(illust);
}