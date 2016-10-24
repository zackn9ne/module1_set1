// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );



    $('.first-callout, a.btn').addClass('completed').fadeIn(1500);

    var content = $('.jumbotron').html();
    console.log( content );

    $('.jumbotron').html('asdf');

});
