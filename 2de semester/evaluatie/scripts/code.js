const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change);
}

const change = () => {
    let img = document.getElementById("imgPhoto");
    img.src = "images/examen_meme1.png";
    img.alt = "examen_meme";
    img.className = "sizePhoto";

    document.getElementById("txtText").innerHTML = "examen meme";

}
window.addEventListener("load", setup);