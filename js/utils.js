const indicators = document.querySelector( ".fixed-item" );
const showImg = document.querySelector( "#show img" );

indicators.addEventListener( "click", ( e ) => {
  e.target.src && ( showImg.src = e.target.src );
} );
