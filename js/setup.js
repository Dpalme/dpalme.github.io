function create_proyect(image_url, proyect_name, function_name) {
    return object({
        type: "a",
        classList: "fade eight columns one-top-margin",
        onclick: function_name,
        children: [object({
            type: "div",
            classList: "hover-to-show eight columns six-height absolute front white-bg",
            child: object({
                type: "p",
                innerText: proyect_name,
                classList: "absolute-center small-body"
            })
        }), object({
            type: "img",
            classList: "image-cover eight columns six-height",
            src: image_url
        })]
    });
}

function paragraph(title, body) {
    return object({
        type: "div",
        classList: "fade eight columns half-top-margin",
        children: [object({
            type: "h3",
            innerText: title,
            classList: "vertical-center-text"
        }), object({
            type: "p",
            innerText: body,
            classList: "justify"
        })]
    });
}

function paragraph_with_image(title, body, img_src) {
    paragraph_obj = paragraph(title, body);
    paragraph_obj.appendChild(object({
        type: "img",
        src: img_src,
        classList: "eight columns small-top-margin half-top-margin"
    }))
    return paragraph_obj;
}