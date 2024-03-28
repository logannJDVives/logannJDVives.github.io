const setup = () => {



    let p = document.getElementById("para");
    console.log(p.firstChild.nodeName, p.firstChild.nodeType);
    console.log(p.firstChild.nodeName, p.firstChild.nodeType);
}
window.addEventListener("load", setup);