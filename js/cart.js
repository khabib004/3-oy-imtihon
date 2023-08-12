let cartRow = document.querySelector( ".cart-container-cart" );

function getCardCard( { id, images, name, price, description, quantity } ) {
  return `
  <div class="cart-cart">
    <div class="cart-cart-img">
      <img src="${images[ 0 ]}" alt="">
    <div class="cart-cart-name">
      <h3>${name}</h3>
      <p>${price} $</p>
      <p>${description}</p>
      </div>
    </div>
    <div class="cart-cart-content">
      <button class="cart-buton" onClick="decreaseQuantity(${id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
        </svg>
      </button>
      <span>${quantity}</span>
      <button class="cart-button" onClick="increaseQuantity(${id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  cart.map( ( pr ) => {
    cartRow.innerHTML += getCardCard( pr );
  } );
}

getCartProducts();

function increaseQuantity( id ) {
  cart = cart.map( ( pr ) => {
    if ( pr.id === id ) {
      pr.quantity++;
    }
    return pr;
  } );
  localStorage.setItem( "cart", JSON.stringify( cart ) );
  getCartProducts();
}

function decreaseQuantity( id ) {
  let product = cart.find( ( pr ) => pr.id === id );

  if ( product.quantity === 1 ) {
    let isDelete = confirm( "Do you want to delete this product ?" );
    if ( isDelete ) {
      cart = cart.filter( ( pr ) => pr.id !== id );
      getCartTotal();
    }
  } else {
    cart = cart.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity--;
      }
      return pr;
    } );
  }

  localStorage.setItem( "cart", JSON.stringify( cart ) );
  getCartProducts();
}