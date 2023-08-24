// Existing code

let cartItems = []; // Array to store cart items
let totalQuantity = 0; // Total quantity in the cart
let totalPrice = 0; // Total price in the cart

// Function to update product details
function updateProductDetails() {
  document.getElementById('price').textContent = price;
  document.getElementById('image').src = image;
  document.getElementById('name').textContent = Name;
}

// Function to update cart quantity and total price
// ... other code ...

// Function to update cart quantity and total price
function updateCart() {
  document.getElementById('quantity').getElementsByTagName('b')[0].textContent = totalQuantity;
  document.getElementById('totalPrice').textContent = totalPrice;
}

// ... other code ...
// Function to increment the quantity when "Add to Cart" button is clicked
function incrementQuantity() {
  totalQuantity++;
  updateCart();
}


// Function to create a new cart item
function createCartItem(productName, productPrice, productImage) {
  const li = document.createElement('li');
  li.innerHTML = `
    <p>Name: ${productName}</p>
    <p>Price: ${productPrice}</p>
    <img src="${productImage}" alt="">
    <hr>
  `;
  return li;
}

function addToCart(productName, productPrice, productImage) {
  Name = productName;
  price = productPrice;
  image = productImage;
  cartItems.push({ Name, price, image }); // Add item to cart array
  incrementQuantity(); // Increment the quantity
  totalPrice += price;
  updateProductDetails();
  
  // Update cart items display
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    cartItemsList.appendChild(createCartItem(item.Name, item.price, item.image));
  });
}

// Function to toggle cart sidebar
function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  cartSidebar.classList.toggle('active');
}

// Initialize product details on page load
updateProductDetails();
updateCart();
