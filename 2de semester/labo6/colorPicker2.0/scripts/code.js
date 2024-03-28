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
        swatch.remove();
        saveColorsToLocalStorage();
    });

    swatch.appendChild(deleteButton);
    const picker = document.querySelector('.picker');
    picker.appendChild(swatch);

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
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.backgroundColor = color;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            swatch.remove();
            saveColorsToLocalStorage();
        });

        swatch.appendChild(deleteButton);
        const picker = document.querySelector('.picker');
        picker.appendChild(swatch);
    });
}

window.addEventListener("load", setup);
