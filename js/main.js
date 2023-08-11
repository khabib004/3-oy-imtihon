const categoryMenuToggleBtn = document.querySelector( "header button" );
const categoriesMenuDropdown = document.querySelector( ".categories-menyu" );
const cartTotal = document.querySelector(".cart");

categoryMenuToggleBtn.addEventListener( "click", () => {
  categoriesMenuDropdown.classList.toggle( "categories-toggle" );
} );

let cart = [];


function getCartTotal() {
  cartTotal.textContent = cart.length;
}

getCartTotal()


