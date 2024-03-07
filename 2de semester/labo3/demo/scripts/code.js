const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //Event based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
}


    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);


const changeContent = () => {
    document.getElementById("textContent").textContent = <a href='https://www.vives.be'>VIVES</a>
    document.getElementById(innerHTML).innerHTML = <a href='https://www.vives.be'>VIVES</a>
}



const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered! <br/>"
}

const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked! <br/>";
}

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out <br/>";
}

const withoutBullets = () => { // meervoud bij get Elements = altijd array daje terugkrijgt
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        /*1ste manier
        listItems[i].style.listStyleType="none";
        listItems[i].style.listStyleType="red";
        listItems[i].className = "listItemsStyleNone colorRed";

         */
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("listItemStyleNone");
        listItems[i].classList.add("colorRed");
            console.log("output " + listItems[i].className);
    }
}

const withBullets =() => {
    let listItems = document.getElementsByTagName("li");
    for(let i =0; i < listItems.length; i++){
        /*
        listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";
        listItems[i].className = "listItemsStyleDisc colorWhite";
         */
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }
}

window.addEventListener("load", setup);