    let image = document.getElementById("image1");
image.onmouseover = function () {mouseover()};

let mouseover = () => {
    image.style.border = '#00F 10px solid'
}

image.onmouseleave = function () {mouseleave()};

let mouseleave = () => {
    image.style.border = '0'
}

