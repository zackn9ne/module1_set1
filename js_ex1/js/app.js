

// pre DOM loaded
document.write( "waiting around on platform looking at phone" );


// post DOM loaded
document.addEventListener('DOMContentLoaded', function(){ 
    
    alert('subway is here');
    
    document.getElementById('catchphrase').innerHTML = "did I do that" ;
    
    document.getElementsByClassName('iphone')[0].innerHTML = "plug in the charger" ;
    document.getElementsByClassName('iphone')[1].innerHTML = "put on the case" ;   document.getElementsByClassName('iphone')[2].innerHTML = "drop on floor" ;
  
    
    
}, false);

