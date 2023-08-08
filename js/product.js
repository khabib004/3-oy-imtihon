const productsRow = document.querySelector( ".products-row" );
const searchInput = document.querySelector( ".search-input" );
const totalProducts = document.querySelector( ".total-products" );

let search = "";

function getProducts() {
  let results = products.filter(
    ( pr ) =>
      pr.name.toLowerCase().includes( search ) ||
      pr.description.toLowerCase().includes( search )
  );

  totalProducts.textContent = results.length;

  productsRow.innerHTML = "";

  if ( results.length !== 0 ) {
    results.map( ( pr ) => {
      productsRow.innerHTML += getProductCard( pr );
    } );
  } else {
    productsRow.innerHTML = `<div>
      No products
    </div>`;
  }
}

getProducts();

searchInput.addEventListener( "keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
} );
