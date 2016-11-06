// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );

  
  var eatBar;
  var createBar;

  var el =  
    '<div class="holder">' +
     '<div class="crust edible"></div>' +
     '<div id="vanilla" class="edible"></div>' +
     '<div id="chocolate" class="edible"></div>' +
     '<div id="strawberry" class="edible"></div>' +
     '<div class="crust edible"></div>' +
     '</div>'
     ;



  var createBar = function (){

  $('.edible').on( "click", eatBar);
    $('.holder:last').after( el );
     console.log('curb served');



  }

     
  var eatBar = function () {
    // body...
      var edible = $('.edible').bind;

           console.log( "i ate this: " + $(this).prop("name") );
   //  $(this).css( "display", "none");
   //  $(this).fadeOut( "slow" );
           // $(this).addClass( 'hidden');
           edible.click(function(){console.log($this)});
   }




  $('button#vend').on( "click",  createBar);
 createBar();
  


});