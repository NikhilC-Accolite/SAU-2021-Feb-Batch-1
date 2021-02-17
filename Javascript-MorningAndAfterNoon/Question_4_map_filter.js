const readline = require('readline');


const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question('Enter elements : ', (elements) => { 
		let arr = elements.split(',')
		let num_arr = arr.map(item => parseInt(item));
		console.log("Input array : ",num_arr) 

		let sorted_arr = num_arr.sort()
		console.log("\nSorted array : ",sorted_arr)

		let mul_arr = arr.map(item => item*10);
		console.log("\nMultiplied by 10 array : ",mul_arr)

		let divBy3 = arr.filter(item => item % 3 === 0);
		console.log("\nElements divisible by 3 are : ",divBy3)
		r2.close();
});






