document.write('blah');

// Variables
var message;
var testing;
var sandwich = 'bacon lettuce tomato';

// Arrays
var cars = new Array();
//      -- or --
// var cars = [];


// Define Variables
message = '<a href="sale.html" class="promo">25% offl</a>' ; 

// Define Arrays
var cars = [ 'spiraly symbol', sandwich, 3.14, 'cilantro', 'solange knowles' ];

cars[0] = 'vigo';
cars[5] = 'benz';

// DCL
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("mainpromo").className += " mystyle";
    document.getElementById("saleitem").innerHTML += " blah " + message;
    document.getElementById("cars").innerHTML = cars;

}, false);
