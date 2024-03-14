const setup = () => {
}

const telVoorkomens = (tekst, zoekTekst) => {
    let result=0;
    let i = tekst.indexOf(zoekTekst);
    while(i != -1) {
        result++;
        i=tekst.indexOf(zoekTekst, i + zoekTekst.length);
    }
}
window.addEventListener("load", setup);