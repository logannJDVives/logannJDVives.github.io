const setup = () => {
    document.getElementById('btnToon').addEventListener('click', toonTekst);
}

const toonTekst = () => {
    let txtTekst = document.getElementById('txtTekst');
    let tekst = txtTekst.value;
    let result = getTekst(tekst);
    console.log(result);

}

/* MAKKELIJKE MANIER
const getTekst = (tekst) => {
    let result ="";
    result = tekst.replace(/de/g, "het");
    return result;
} */

const getTekst = (tekst) => {
    let result = "";
    let index = 0;
    let deAanwezig = false; 

    while (index < tekst.length) {
        if (tekst[index] === 'd' && tekst[index + 1] === 'e' && (index === 0 || tekst[index - 1] === ' ')) {
            result += "het";
            index += 2;
            deAanwezig = true;
        } else {
            result += tekst[index];
            index++;
        }
    }
    if (!deAanwezig) {
        return -1;
    }
    return result;
}





window.addEventListener("load", setup);