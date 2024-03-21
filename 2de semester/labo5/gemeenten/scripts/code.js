const setup = () => {
    sorteerGemeentes();
}
const sorteerGemeentes = () => {
    var gemeentes = [];
    var input = prompt("Voer de naam van een gemeente in (typ 'stop' om te stoppen):");
    while (input !== "stop") {
        gemeentes.push(input);
        input = prompt("Voer de naam van een gemeente in (typ 'stop' om te stoppen):");
    }
    gemeentes.sort();
    var dropdown = document.getElementById("gemeentesDropdown");
    gemeentes.forEach(function(gemeente) {
        var option = document.createElement("option");
        option.text = gemeente;
        dropdown.add(option);
    });
}
window.addEventListener("load", setup);