const setup = () => {
    document.getElementById("herberekenButton").addEventListener("click", function() {
        // Product 1
        var quantity1 = parseInt(document.getElementById("quantity1").value);
        var price1 = 10.00;
        var subtotal1 = quantity1 * price1;
        document.getElementById("subtotal1").innerText = "€" + subtotal1.toFixed(2);

        // Product 2
        var quantity2 = parseInt(document.getElementById("quantity2").value);
        var price2 = 15.00;
        var subtotal2 = quantity2 * price2;
        document.getElementById("subtotal2").innerText = "€" + subtotal2.toFixed(2);

        // Product 3
        var quantity3 = parseInt(document.getElementById("quantity3").value);
        var price3 = 12.20;
        var subtotal3 = quantity3 * price3;
        document.getElementById("subtotal3").innerText = "€" + subtotal3.toFixed(2);
    });

}
window.addEventListener("load", setup);