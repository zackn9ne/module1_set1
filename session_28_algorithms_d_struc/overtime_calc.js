var hours = prompt("Enter your hours ");

var rate = prompt("Enter your rate ");

var otRate = rate * 1.5;

var otAmount = (rate - 40) * otRate;

var regAmount = hours * rate;

var checkAmount = otAmount + regAmount;

alert( checkAmount );

function payCheckPrinter(hours, rate) {
	// body...
	if ( hours < 40 ) {
		console.log( hours * rate );
	}
	else if ( hours < 0) {
		console.log( 'gimmie a break');
	}
	else {
		console.log(checkAmount)
	}
}
payCheckPrinter(hours, rate);