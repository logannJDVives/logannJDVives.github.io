const setup = () => {
    const inputs = document.querySelectorAll('.picker input[type="range"]');

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            const red = document.getElementById("red").value;
            const green = document.getElementById("green").value;
            const blue = document.getElementById("blue").value;
            const display = document.getElementById("display");
            display.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    });
}

window.addEventListener("load", setup);
