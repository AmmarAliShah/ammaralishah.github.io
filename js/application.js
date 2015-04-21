$(document).ready(function(){
  $('h1').on("mouseenter", function(){
    $('span').toggleClass('animated flash');
    $( 'span' ).css( "color", "red" );
  });
  $('h1').on("mouseleave", function(){
    $( 'span' ).css( "color", "black" );
  });
});
