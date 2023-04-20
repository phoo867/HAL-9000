// The list of products.
let product_array = [
    item_1 = { "name": "1958 Plymouth Fury", "id": 1, "img": "../images/Products/1958 Plymouth Fury 1.jpg", "price": 20.99},
    item_2 = { "name": "Duck", "id": 2, "img": "../images/Products/duck 1.jpg", "price": 4.99 },
    item_3 = { "name": "Hello Kitty", "id": 3, "img": "../images/Products/hello-kitty 1.jpg", "price": 8.99 },
    item_4 = { "name": "Iron Man", "id": 4, "img": "../images/Product/iron-man 1.jpg", "price": 15.99 },
    item_5 = { "name": "Lego", "id": 5, "img": "../images/Products/lego 1.jpg", "price": 25.99 },
    item_6 = { "name": "Minion", "id": 6, "img": "../images/Products/minions 1.jpg", "price": 20.99 },
    item_7 = { "name": "Teddy Bears", "id": 7, "img": "../images/Products/teddybears 1.jpg", "price": 25.99 },
    item_8 = { "name": "Unicorn", "id": 8, "img": "../images/Products/unicorn 1.jpg", "price": 25.99 },
]

// Possible discount codes.
let discountCodes = [
    WELCOME = { "discount": 0.2 },
    BIRTHDAY = { "discount": 0.3 },
    SPRING2023 = { "discount": 0.25}
]

// A usually empty array for storing items, has some temp items for now.
let cart = [
    item_1,
    item_5,
    item_7,
    item_3
]

// Adds the items to the cart array.
function addItemToCart(item){
    // Loops through the product array.
    for (let i = 0, len = product_array.length; i < len; i++) {
        // checks if the item passed through matches.
        if(product_array[i].id = item){
            // if the item passed through matches it gets added to the product array.
            cart.push(product_array[i]);
            itemsInCart()
        }
    }
}

function populateCart(){
    var cartItems = ""
    
    if(cart.length != 0){
        for (let i = 0, len = cart.length; i < len; i++) {
            let item = cart[i]
            cartItems = '<div class="item"><img src="' + item.img + '" style="padding-right:400px;" style="padding-bottom: 200px;" style="width:200px;" style="height:200px" style="border-radius: 2%;"><div class="itemText"><p>' + item.name + '</p><h3>' + item.price + '</h3><button type="button" onclick="removeItemFromCart(' + item.id + ')">Remove</button></div></div>'
        }
    }
    else{
        cartItems = "Your cart is empty :("
    }

    document.getElementById(cart).innerHTML = cartItems
    itemsInCart();
}

//Removes an item from the cart, called when the remove button is pressed.
function removeItemFromCart(item){
    // loops through the cart to find the matching item.
    for (let i = 0, len = cart.length; i < len; i++) {
        if(cart[i].id = item){
            cart.splice(cart[i]);
            itemsInCart();
        }
    }

}

// changes the html to display the amount of items in the cart.
function itemsInCart(){
    if(cart.length != 0){
        document.getElementById(totalItems).innerHTML = cart.length.toString() + "Items in cart";
    }
    else{
        document.getElementById(totalItems).innerHTML = "0 Items in cart";
    }
    
}

// change added.