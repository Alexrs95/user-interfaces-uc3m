function clickNav(element){
    var navigation = [
        document.getElementById("navItem1"),
        document.getElementById("navItem2"),
        document.getElementById("navItem3"),
        document.getElementById("navItem4"),
        document.getElementById("navItem5"),
    ]

    console.log(element);
    for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].id == element.id){
            navigation[i].style.color = "#73CCAF";
            navigation[i].style.borderBottom = "2px solid #73CCAF";
        }
        else {
            navigation[i].style.color = "#B0B5B8";
            navigation[i].style.borderBottom = "2px solid transparent";
        }
    }
}

function hoverNavOn(element){
    document.getElementById(element.id).style.fontWeight = "bold";
}

function hoverNavOff(element){
    document.getElementById(element.id).style.fontWeight = "normal";
}

function addToCart(element, inputId) {
    var section = element.parentNode.parentNode;
    var table = document.getElementById("cart-table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.id = 'cart-img';
    var cell2 = row.insertCell(1);
    cell2.id = 'cart-detail';
    cell1.innerHTML = "<img src=" + section.firstElementChild.src + ">";
    cell2.innerHTML = "<p>Quantity: " + document.getElementById(inputId).value + "</p><p>" 
    + section.firstElementChild.nextSibling.nextSibling.innerHTML + "</p>";
}

function emptyCart() {
    var table = document.getElementById("cart-table");
    table.innerHTML = "";
}
