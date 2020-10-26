function about_start() {
    clearContent()

    document.getElementById("work").classList.remove("active");
    document.getElementById("about").classList.add("active");
    document.getElementById("contact").classList.remove("active");

    addToContent(paragraph("About Me", "I'm A 21 year old living in Mexico and studying a B.S. on Computer Science."));
    addToContent(paragraph("Music", "I play the piano, drums and I'm starting to learn guitar. I've been music for years but mostly just beats and sample flips. I'm currently working on a post-rock album under the name FORMAS MENORES."));
    objectToContent({
        type: "div",
        children: [object({
            type: "a",
            href: "https://soundcloud.com/diego_pb",
            innerText: "SOUNDCLOUD",
            classList: "header-link vertical-center-text four columns text-center"
        }), object({
            type: "a",
            href: "https://formasmenores.bandcamp.com/",
            innerText: "BANDCAMP",
            classList: "header-link vertical-center-text four columns text-center"
        })]
    });
    addToContent(paragraph("Illustration", "I love making playlists and because of that I picked up the hobby of illustration to make cover art for them. I've made album covers for friends as well as portraits. You can find some of my work here:"));
    objectToContent({
        type: "div",
        children: [object({
            type: "a",
            href: "https://www.instagram.com/diegoo_pb2/",
            innerText: "INSTAGRAM",
            classList: "header-link vertical-center-text four columns text-center"
        }), object({
            type: "a",
            href: "https://www.behance.net/dpalme",
            innerText: "BEHANCE",
            classList: "header-link vertical-center-text four columns text-center"
        })]
    });
}