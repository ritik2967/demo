document.addEventListener("DOMContentLoaded", function () {
  let data = [
    {
      id: 1,
      name: "Fortunata Window Hardware - Decorative Holdbacks - Mocha",
      image:
        "https://m.media-amazon.com/images/I/41x82UgMKGS._SY300_SX300_QL70_FMwebp_.jpg",
      quantity: 1,
      price: 29.99,
      subTotal: 29.99,
    },
    {
      id: 2,
      name: "Woven Trellis Window Hardware - Clip Rings - Bronze",
      image: "https://m.media-amazon.com/images/I/61d2QbDzDOL._SL1024_.jpg",
      quantity: 1,
      price: 12.99,
      subTotal: 12.99,
    },
  ];

  // Get elements
  const productList = document.getElementById("productList");
  const totalPriceElement = document.getElementById("totalPrice");

  // Display product details in the table
  function showProductDetails() {
    productList.innerHTML = "";

    data.forEach((product) => {
      const row = document.createElement("tr");

      // Product image and name
      row.innerHTML = `
          <td>
            <img src="${product.image}" alt="${
        product.name
      }" width="50" height="50">
            ${product.name}
          </td>
          <td><input type="number" min="1" value="${
            product.quantity
          }" data-id="${product.id}" class="quantity-input"></td>
          <td>$${product.price.toFixed(2)}</td>
          <td class="subtotal" data-id="${
            product.id
          }">$${product.subTotal.toFixed(2)}</td>
          <td><button class="remove-btn" data-id="${
            product.id
          }">Remove</button></td>
        `;
      productList.appendChild(row);
    });

    updateTotalPrice();
  }

  // Update subtotal for a product
  function updateSubtotal(productId, newQuantity) {
    const product = data.find((item) => item.id === productId);
    if (product) {
      product.quantity = newQuantity;
      product.subTotal = product.price * newQuantity;

      const subtotalCell = document.querySelector(
        `.subtotal[data-id="${productId}"]`
      );
      subtotalCell.textContent = `$${product.subTotal.toFixed(2)}`;
    }
    updateTotalPrice();
  }

  // Update the total price for all products
  function updateTotalPrice() {
    const total = data.reduce((acc, product) => acc + product.subTotal, 0);
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }

  // Add event listeners for quantity changes and remove buttons
  function addEventListeners() {
    // Listen for quantity change
    productList.addEventListener("change", (event) => {
      if (event.target.classList.contains("quantity-input")) {
        const newQuantity = parseInt(event.target.value);
        const productId = parseInt(event.target.getAttribute("data-id"));
        updateSubtotal(productId, newQuantity);
      }
    });

    // Listen for remove button clicks
    productList.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        removeProduct(productId);
      }
    });
  }

  // Remove a product from the cart
  function removeProduct(productId) {
    data = data.filter((item) => item.id !== productId);
    showProductDetails();
  }

  // Initial render and event listener setup
  showProductDetails();
  addEventListeners();
});
