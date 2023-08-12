const productsRow = document.querySelector( ".products-rosh" );
const searchInput = document.querySelector( ".search-input" );

let search = "";


function getProductCard( { id, images, name, description, price } ) {
  return `
  <div class="product-card">
    <div class="product-card-body">
      <img 
        src="${images[ 0 ]}" 
        alt="${name}">
    </div>
    <div class="product-card-footer">
      <h3><a href="product.html">${name}</a></h3>
      <p><a href="/statiy.html">${description}</a></p>
      <button onClick="addToCart(${id})"><b> В корзину </b></button>
    </div>
  </div>
  `;
}

function getProducts() {
  let results = products.filter( pr => pr.name.toLowerCase().includes( search ) );
  productsRow.innerHTML = "";
  results.map( ( pr ) => {
    productsRow.innerHTML += getProductCard( pr );
  } );
}
getProducts();



searchInput.addEventListener( 'keyup', function () {
  search = this.name.trim().toLowerCase();
  getProducts();
} );


function addToCart( id ) {
  let product = products.find( ( pr ) => pr.id === id );
  let check = cart.find( ( pr ) => pr.id === id );

  if ( check ) {
    cart = cart.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity++;
      }
      return pr;
    } );
  } else {
    product.quantity = 1;
    cart.push( product );
  }
  localStorage.setItem( "cart", JSON.stringify( cart ) );
  getProducts();
  getCartTotal();
}

