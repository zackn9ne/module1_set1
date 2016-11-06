var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var person = prompt("Enter a name to search for: ");

var position = names.indexOf(person);
if (position >= 0) {
print("Found " + person + " at position " + position);
}
else {
print(person + " not found in array.");
}