function create_proyect(image_url, function_name) {
    return object({
        type: "a",
        class: "fade col-6",
        href: "javascript:" + function_name,
        child: object({
            type: "img",
            class: "image-cover col-12",
            style: "height: calc(3.5 * var(--col-2))",
            src: image_url
        })
    });
}

function paragraph(title, body) {
    return object({
        type: "div",
        class: "fade mt-sm",
        children: [object({
            type: "h2",
            innerText: title,
            class: "lh-lg"
        }), object({
            type: "p",
            innerText: body,
            class: "justify col-12"
        })]
    });
}