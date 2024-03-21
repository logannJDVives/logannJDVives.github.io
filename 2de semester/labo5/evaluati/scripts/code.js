const setup = () => {

    tree();


}

const tree = () => {
    let limit = 6;
    let drawing = "";
    for (let i = 0; i < limit; i++) {
        drawing += "*";
        console.log(drawing);
    }

    // iets 2 dimensioneel tekenen = 2 for lussen hebben. 1 voor hoogte en 1 voor breedte
    /*VOORBEELD
    *let x,y
    *let chr ="";
    * for(x = 1; x <= hoogte; x++){
    *   for(y = 1; y <= hoogte; y++){
    *   chr +="*";
    *   }
    *   console.log(chr);
    *   chr="";
    * }*/
}
window.addEventListener("load", setup);