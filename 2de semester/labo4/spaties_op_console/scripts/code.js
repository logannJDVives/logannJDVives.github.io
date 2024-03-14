const setup = () => {
    document.getElementById("btn").addEventListener("click", change);
}

const change = () => {
    let txtInput=document.getElementById("txtInput");
    let tekst = txtInput.value;
    let tekstMetSpaties="";

    for(let i=0; i<tekst.length; i++){
        tekstMetSpaties += tekst.charAt(i) + " ";
    }
    console.log(tekstMetSpaties);
}
window.addEventListener("load", setup);