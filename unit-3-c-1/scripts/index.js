//store the products array in localstorage as "products"
// var arr = JSON.parse(localStorage.getItem("products")) 
var arr = JSON.parse(localStorage.getItem("products")) || []
var form = document.querySelector("#products")
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var obj = {
        type: products.type.value,
        desc: products.desc.value,
        price: products.price.value,
        image: products.image.value,
    }
    arr.push(obj)
    localStorage.setItem("products", JSON.stringify(arr))
    window.location.reload();

})

function showpro() {
    window.location.href = "inventory.html"
}





//  { <input type="text" id="type" placeholder="type">
// <input type="text" id="desc" placeholder="Description">
// <input type="text" id="price" placeholder="price">
// <input type="text" id="image" placeholder="url">
// <input type="submit" id="add_product"> }