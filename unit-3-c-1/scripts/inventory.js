var productdata = JSON.parse(localStorage.getItem("products")) || []

showproductsall(productdata)
    // console.log(productdata)
function showproductsall(productdata) {

    productdata.forEach(function(elem, index) {
        var allproducts = document.querySelector("#all_products")
        var div1 = document.createElement("div")
        var img1 = document.createElement("img")
        img1.src = elem.image
        var h1 = document.createElement("h1")
        h1.innerText = "Type :" + " " + elem.type
        var h2 = document.createElement("h2")
        h2.innerText = "Desc :" + " " + elem.desc
        var h3 = document.createElement("h3")
        h3.innerText = "Price :" + " " + elem.price
        var btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click", function() {
            remove(elem, index)
        })
        div1.append(img1, h1, h2, h3, btn)
        allproducts.append(div1)


    });

}

function remove(elem, index) {
    productdata.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productdata))
    window.location.reload();

}

function addmore() {
    window.location.href = "index.html"
}