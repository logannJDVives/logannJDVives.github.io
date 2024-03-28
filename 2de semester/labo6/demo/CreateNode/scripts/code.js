const setup = () => {

    let element = document.createElement("p");// create an elementnode
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");

    console.log (element.getAttribute("class"));

    let textNode = document.createTextNode("Hello World"); // create a text node
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);
}
window.addEventListener("load", setup);