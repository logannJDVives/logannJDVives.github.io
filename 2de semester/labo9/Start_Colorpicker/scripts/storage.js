const storeSliderValues = () => {
    localStorage.setItem('sliderValues', JSON.stringify({
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    }));
};

const restoreSliderValues = () => {
    const sliderValues = JSON.parse(localStorage.getItem('sliderValues'));
    if (sliderValues) {
        document.getElementById("sldRed").value = sliderValues.red;
        document.getElementById("lblRed").innerHTML = sliderValues.red;

        document.getElementById("sldGreen").value = sliderValues.green;
        document.getElementById("lblGreen").innerHTML = sliderValues.green;

        document.getElementById("sldBlue").value = sliderValues.blue;
        document.getElementById("lblBlue").innerHTML = sliderValues.blue;
    }
};

const storeSwatches = () => {
    let swatches = [];
    const swatchComponents = document.getElementById("swatchComponents").getElementsByClassName("swatch");
    for (let i = 1; i < swatchComponents.length; i++) {
        const swatch = swatchComponents[i];
        const rgb = swatch.style.backgroundColor.match(/\d+/g);
        swatches.push({
            red: rgb[0],
            green: rgb[1],
            blue: rgb[2]
        });
    }
    localStorage.setItem('swatches', JSON.stringify(swatches));
};

const restoreSwatches = () => {
    const swatches = JSON.parse(localStorage.getItem('swatches'));
    if (swatches) {
        for (let i = 0; i < swatches.length; i++) {
            addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
        }
    }
};