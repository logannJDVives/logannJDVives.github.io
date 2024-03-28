const setup = () => {
    document.getElementById("letter").addEventListener("input", handleInput);
}

const addImage = (letter, state) => {
    const imgDiv = document.getElementById("img");
    imgDiv.innerHTML = "";

    let imgSrc = "";
    if (state === "metEi") {
        imgSrc = "../images/with-egg.png";
    } else if (state === "zonderEi") {
        imgSrc = "../images/without-egg.png";
    }

    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgDiv.appendChild(imgElement);
}

const handleInput = () => {
    const letter = document.getElementById("letter").value;
    const selectElement = document.getElementById("dropdown");
    const state = selectElement.value;

    if (state !== "KIES") {
        addImage(letter, state);
    } else {
        alert("Selecteer eerst de staat van de kip!");
    }
}



window.addEventListener("load", setup);
