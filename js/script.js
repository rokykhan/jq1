
$(document).ready(function(){

  $(".hide").click(function(){
    $("h2").hide();
  })

  $(".show").click(function(){
    $("h2").show();
  })

   $(".togol").click(function(){
    $("h2").toggle();
  })

  
});

// fade

$(document).ready(function(){

  $(".FadeIn").click(function(){
    $("h1").fadeIn(1500);
  })

  $(".FadeOut").click(function(){
    $("h1").fadeOut(2000);
  })

   $(".Fadetoggle").click(function(){
    $("h1").fadeToggle(2500);
  })
   $(".Fadeto").click(function(){
    $("h1").fadeTo(1000, .5);
  })

  
});

$(document).ready(function(){

  $(".panal").click(function(){
    $(".content").slideToggle();
  })

  
  
});

$(document).ready(function(){

  $( "body" ).delegate( "p", "click", function() {
  $( this ).after( "<p>Another paragraph!</p>" ).after( "<p> paragraph!</p>" );
});
  
  
});

$(document).ready(function(){

 function aClick() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "#theone" )
    .bind( "click", aClick )
    .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "#theone" )
    .unbind( "click", aClick )
    .text( "Does nothing..." );
}); 
  
  
});

// end

$(document).ready(function(){

 $( "button" ).click(function( event ) {
  return "I'm joking";
});
$( ".sms" ).click(function( event ) {
  $( "#reply" ).html( event.result );
});
  
  
});

// end



$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});

// end
$(document).ready(function(){

 $( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".line" ).text( str );
  })
  .change();
  
  
});

// end
$(document).ready(function(){
$( "li" )
  .odd()
    .hide()
  .end()
  .even()
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });
 
  
  
});

// scrol

$( "div.demo" ).scrollTop( 300 );

// width



  

$(document).ready(function(){
    var pTags = $( "h5" );
$( ".border_btn" ).click(function() {
  if ( pTags.parent().is( "h6" ) ) {
    pTags.unwrap();
  } else {
    pTags.wrap( "<h6></h6>" );
  }
});
});
// toggleClass
$(document).ready(function(){

$( "h4" ).click(function() {
  $( this ).toggleClass( "highlight" );
});

});


// demoo




$(document).ready(function(){

 
  
  
});