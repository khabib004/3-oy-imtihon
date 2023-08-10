const productsRow = document.querySelector( ".products-rosh" );
const searchInput = document.querySelector( ".search-input" );

let search = "";


function getProductCard(pr) {
  return `
  <div class="product-card">
    <div class="product-card-body">
      <img src="${pr.images[ 0 ]}" alt="${pr.name}">
    </div>
    <div class="product-card-footer">
      <h3><a href="product.html">${pr.name}</a></h3>
      <p><a href="/statiy.html">${pr.description}</a></p>
      <button><b> В корзину </b></button>
    </div>
  </div>
  `
}

function getProducts() {
  let results = products.filter( pr => pr.name.includes( search ) );
  results.map((pr) => {
    productsRow.innerHTML += getProductCard(pr);
  });
}
getProducts();



searchInput.addEventListener( 'keyup', function () {
  search = this.name;
  getProducts();
} );

