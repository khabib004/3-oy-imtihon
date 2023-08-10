const categoryMenuToggleBtn = document.querySelector( "header button" );
const categoriesMenuDropdown = document.querySelector( ".categories-menyu" );
const searchInput = document.querySelector( ".search-input" );

let search = "";


categoryMenuToggleBtn.addEventListener( "click", () => {
  categoriesMenuDropdown.classList.toggle( "categories-toggle" );
} );

