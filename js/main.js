const categoryMenuToggleBtn = document.querySelector( "header button" );
const categoriesMenuDropdown = document.querySelector( ".categories-menyu" );
const cartTotal = document.querySelector( ".cart" );


let loginBtn = document.querySelector( ".login" );
let closeBtn = document.querySelector( ".modal-close" );
let modal = document.querySelector( ".modal" );
let modalcontent = document.querySelector( ".modal-cart" );



categoryMenuToggleBtn.addEventListener( "click", () => {
  categoriesMenuDropdown.classList.toggle( "categories-toggle" );
} );

let cartJson = localStorage.getItem( "cart" );

let cart = JSON.parse( cartJson ) || [];


function getCartTotal() {
  cartTotal.textContent = cart.length;
}

getCartTotal();

loginBtn.addEventListener( "click", () => {
  modal.classList.add( "modal-show" );
  modalcontent.classList.add("modal-cart-show")
  
} );

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show")
  modalcontent.classList.remove("modal-cart-show")
})



