// we are going to pass an object to a function,
// then destruce it.

function tipCalc( { total, tip = 0.15, tax = 0.13 } ){
	return total + (tip * total) + (tax * total);
}

const bill = {
	total: 50,
	tip: 0.20,
	tax: 0.18
};

console.log( tipCalc(bill) );

// if we don't pass any value
// like this

// tipCalc();
// we got an error
// lets fix it

// if nothing passed create an empty instance
// off course with default values
function tipCalcFixed( { total = 100, tip = 0.15, tax = 0.13 } = {}){
	return total + (tip * total) + (tax * total);
}

console.log( tipCalcFixed() );