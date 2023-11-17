document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.querySelector(".btn-outline-dark");
  const products = document.querySelectorAll(".card");

  let cartItems = [];

  products.forEach((product, index) => {
    const addToCartButton = product.querySelector(".btn-outline-dark");

    addToCartButton.addEventListener("click", function () {
      if (addToCartButton.textContent === "Add to cart") {
        addToCart(index);
      } else {
        removeFromCart(index);
      }
    });
  });

  function addToCart(index) {
    cartItems.push(index);
    updateCartUI();
  }

  function removeFromCart(index) {
    const itemIndex = cartItems.indexOf(index);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      updateCartUI();
    }
  }

  function updateCartUI() {
    const cartQuantity = document.querySelector(".badge");
    cartQuantity.textContent = cartItems.length;

    products.forEach((product, index) => {
      const addToCartButton = product.querySelector(".btn-outline-dark");

      if (cartItems.includes(index)) {
        addToCartButton.textContent = "Remove from cart";
      } else {
        addToCartButton.textContent = "Add to cart";
      }
    });
  }
});
