// Write your solution here!
//Array functions
//      destructivelyAppendCat(name)
//        1) appends a cat to the end of the cats array, Ralph
//      destructivelyPrependCat(name)
//        2) prepends a cat to the beginning of the cats array, Bob
//      destructivelyRemoveLastCat()
//        3) removes the last cat from the cats array, Garfield
//      destructivelyRemoveFirstCat()
//        4) removes the first cat from the cats array, Milo
//      appendCat(name)
//        5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged, Broom, appendCat
//      prependCat(name)
//        6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged, Arnold, prependCat
//      removeLastCat()
//        7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged, Garfield, removeLastCat
//      removeFirstCat()
//        8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged, Milo, removeFirstCat

let cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat() {
	cats.push("Ralph");
	return cats;
}

function destructivelyPrependCat() {
	cats.unshift("Bob");
	return cats;
}

function destructivelyRemoveLastCat() {
	cats.pop();
	return cats;
}

function destructivelyRemoveFirstCat() {
	cats.shift();
	return cats;
}

function appendCat() {
	let appendCat = [...cats,"Broom"];
	return appendCat;
	return cats;

}

function prependCat() {
	let prependCat = ["Arnold",...cats];
	return prependCat;
	return cats;
}

function removeLastCat() {
	let removeLastCat = [...cats];
	removeLastCat.pop();
	return removeLastCat;
	return cats;
}

function removeFirstCat() {
	let removeFirstCat = [...cats];
	removeFirstCat.shift();
	return removeFirstCat;
	return cats;
}
