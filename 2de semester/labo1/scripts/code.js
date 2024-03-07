const setup = () => {
    let lblCursus = document.getElementById("lblCursus"); /*Zoekt element met id lblCursus
    en wordt in variabele lblCursus (hier opgeslaan)*/
    lblCursus.addEventListener("mouseover", change);
/*
    let btnSend = document.getElementById("btnSend");
    addEventListener("click", show); */
    document.getElementById("btnSend").addEventListener("click", show);

}


const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}


const show =() => {
    let txtName = document.getElementById("txtName");

    if (txtName.value !== "") {
        alert("Jouw naam is " + txtName.value);
    }
    else {
        alert("gelieve naam in te vullen");
    }
}
window.addEventListener("load", setup);