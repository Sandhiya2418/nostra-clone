var productContainer = document.getElementById("products");
var productlist = productContainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});