function create_proyect(image_url, proyect_name, function_name) {
    return object({
        type: "a",
        class: "fade col-4 my-sm",
        onclick: function_name,
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
        class: "fade col-12 mt-sm",
        children: [object({
            type: "h3",
            innerText: title,
            class: "lh-lg col-12"
        }), object({
            type: "p",
            innerText: body,
            class: "justify col-12"
        })]
    });
}