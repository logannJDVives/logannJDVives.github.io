const setup = () => {
    const belangrijkeElementen = document.getElementsByClassName('belangrijk');

    for (let i = 0; i < belangrijkeElementen.length; i++) {
        const element = belangrijkeElementen[i];
        element.classList.add('opvallend');
    }
}

window.addEventListener("load", setup);