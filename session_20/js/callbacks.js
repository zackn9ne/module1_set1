//;; This buffer is for notes you don't want to save, and for Lisp evaluation.
//;; If you want to create a file, visit that file with C-x C-f,
//;; then enter the text in that file's own buffer.




function greetMe(firstname, lastname, callback, cbParam) {

    console.log('hello nice to meet you: ' + 'Mr/Mrs ' + lastname + ', ' + firstname)

    callback(cbParam);    //invokes whatever function name we put when we run it

}

function rad(x) {
    console.log(x + ' things are rad');
}


function poem(x) {
    console.log('the quick brown' + x + ' jumps over the lazy dogs');
}

//call if it has param
greetMe('master');
