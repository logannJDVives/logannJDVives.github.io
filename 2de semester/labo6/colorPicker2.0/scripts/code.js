const setup = () => {
    const inputs = document.querySelectorAll('.picker input[type="range"]');
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', saveColor);

    const picker = document.querySelector('.picker');
    picker.appendChild(saveButton);

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            updateDisplay();
        });
    });

    loadSavedColors();
}

const updateDisplay = () => {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;
    const display = document.getElementById("display");
    display.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const saveColor = () => {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;

    const swatchContainer = document.createElement('div');
    swatchContainer.classList.add('swatch-container');

    const swatch = document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    swatch.addEventListener('click', () => {
        document.getElementById('red').value = red;
        document.getElementById('green').value = green;
        document.getElementById('blue').value = blue;
        updateDisplay();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        swatchContainer.remove();
        saveColorsToLocalStorage();
    });

    swatchContainer.appendChild(swatch);
    swatchContainer.appendChild(deleteButton);

    document.body.insertBefore(swatchContainer, document.querySelector('.picker').nextSibling);

    saveColorsToLocalStorage();
}

const saveColorsToLocalStorage = () => {
    const swatches = document.querySelectorAll('.swatch');
    const colors = [];

    swatches.forEach(swatch => {
        colors.push(swatch.style.backgroundColor);
    });

    localStorage.setItem('savedColors', JSON.stringify(colors));
}

const loadSavedColors = () => {
    const savedColors = JSON.parse(localStorage.getItem('savedColors')) || [];

    savedColors.forEach(color => {
        const swatchContainer = document.createElement('div');
        swatchContainer.classList.add('swatch-container');

        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.backgroundColor = color;

        swatch.addEventListener('click', () => {
            const rgb = color.substring(4, color.length - 1)
                .replace(/ /g, '')
                .split(',');
            document.getElementById('red').value = rgb[0];
            document.getElementById('green').value = rgb[1];
            document.getElementById('blue').value = rgb[2];
            updateDisplay();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            swatchContainer.remove();
            saveColorsToLocalStorage();
        });

        swatchContainer.appendChild(swatch);
        swatchContainer.appendChild(deleteButton);

        document.body.insertBefore(swatchContainer, document.querySelector('.picker').nextSibling);
    });
}

window.addEventListener("load", setup);
