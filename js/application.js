$(document).ready(function(){
  $('h1').on("mouseenter", function(){
    $( '.red' ).css( "color", "red" );
  });
  $('h1').on("mouseleave", function(){
    $( '.red' ).css( "color", "black" );
  });
});
