function create_proyect(image_url, proyect_name, function_name) {
    return object({
        type: "a",
        class: "fade col-6 my-sm",
        onclick: function_name,
        children: [
            object({
            type: "div",
            class: "hover-to-show col-12 d-absolute front white-bg",
            child: object({
                type: "p",
                innerText: proyect_name,
                class: "center-a small-body"
            })
        }), object({
            type: "img",
            class: "image-cover col-12",
            src: image_url
        })]
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

function paragraph_with_image(title, body, img_src) {
    paragraph_obj = paragraph(title, body);
    paragraph_obj.appendChild(object({
        type: "img",
        src: img_src,
        class: "col-12 mt-sm"
    }))
    return paragraph_obj;
}