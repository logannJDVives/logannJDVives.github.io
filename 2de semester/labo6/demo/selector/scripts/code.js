const setup = () => {
    let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    // selecteert alle elementen met class color die als parrent een div hebben

    for(let i=0; i<lstPar.length; i++) {
        lstPar[i].addEventListener("click", change);
    }
    for(let i=0; i<lstPar.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv);
    }
}



const change = (e) => {
    e.target.className = "colorPar";
}

const changeDiv = (event)=> {
    event.target.className = "colorParDiv";
}
window.addEventListener("load", setup);