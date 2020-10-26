function create_proyect(image_url, proyect_name, function_name) {
    return object({
        type: "a",
        classList: "fade four columns one-top-margin one-offset",
        onclick: function_name,
        children: [object({
            type: "div",
            classList: "hover-to-show four columns three-height absolute front white-bg",
            child: object({
                type: "p",
                innerText: proyect_name,
                classList: "absolute-center small-body"
            })
        }), object({
            type: "img",
            classList: "image-cover four columns three-height",
            src: image_url
        })]
    });
}

function paragraph(title, body) {
    return object({
        type: "div",
        classList: "fade four columns half-top-margin one-offset",
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
        classList: "four columns small-top-margin half-top-margin"
    }))
    return paragraph_obj;
}