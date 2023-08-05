const categoryMenuToggleBtn = document.querySelector( "header button" );
const categoriesMenuDropdown = document.querySelector( ".categories-menyu" );

categoryMenuToggleBtn.addEventListener( "click", () => {
  categoriesMenuDropdown.classList.toggle( "categories-toggle" );
} );