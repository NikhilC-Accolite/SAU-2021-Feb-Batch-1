let Birds=[ "Parrot", "Owl","KingFisher","Swift"];
let Animals=["Tiger","Cheetah"];
let sample_string = "aAbbbchhswxwbabbabccac";

console.log("Birds array:",Birds)

console.log("\npop() method")
console.log("Poping last element in Birds:",Birds.pop())
console.log("Modified array:",Birds)

console.log("\npush() method");
Birds.push("Sandpiper");
console.log("After pushing 'Sandpiper' into bird array",Birds)

console.log("\nconact() method");
Birds_animal=Birds.concat(Animals);
console.log("Bird and animal array combined:",Birds_animal);

console.log("\nforEach() method: Birds")
Birds.forEach((item) =>{
	console.log(item);
});

console.log("\nfilter() method");
let filtered_arr=Birds.filter((item) => {  return item.length % 3 ==0;  });
console.log(filtered_arr);

console.log("\njoin()  method")
let joined_array=Birds.join(", ");
console.log(joined_array);

console.log("\nindexOf()  method")
let index=Birds.indexOf("Owl");
console.log("Owl is present in position:",index+1)

console.log("\nlastIndexOf() method");
console.log("'ab' is present in position:",sample_string.lastIndexOf("ab"));

console.log("\nmap() method")
let plurals=Birds.map((item) =>{
	return item+"s";
});
console.log("Converting words to plural:",plurals);


console.log("\nreduce()  method")
let number_array=[50,100,150,200];
console.log("Sum using reduce:",number_array.reduce((item_1,item_2) => {  return item_1 + item_2; }));

console.log("\nreduceRight()  method")
console.log("difference using rightReduce:",number_array.reduceRight((item_1,item_2) => {  return item_1-item_2;  }));

console.log("\nreverse() method");
console.log("original:",Birds,"\n","reversed:",(Birds.slice()).reverse());

console.log("every() method")
let x=Birds.every((bird) =>{  return bird.length > 5;  })
console.log(x);

console.log("\nshift() method");
console.log("Animal name shifted:",Animals.shift());

console.log("\nunshift() method");
Birds.unshift("Woodpeckers");
console.log("Pushing new element to the front of bird array",Birds);

console.log("\nslice() method");
console.log(Birds.slice(1,4));

console.log("\ntoString() method");
console.log("Converting array to string:",Birds.toString());

console.log("\nsome() method");
console.log("There is a bird name whose length is less than 4 letter ? ->",Birds.some((item) =>{  return item.length<4;  }));

console.log("\nsplice() method");
Birds.splice(1,2, "Penguins", "Finches");
console.log("Removing 2 elements from index 1 and adding new two elemnts:",Birds);

console.log("\nsort() method");
console.log("Sorted Birds array:",Birds.sort());

// OUTPUT
/*
Birds array: [ 'Parrot', 'Owl', 'KingFisher', 'Swift' ]

pop() method
Poping last element in Birds: Swift
Modified array: [ 'Parrot', 'Owl', 'KingFisher' ]

push() method
After pushing 'Sandpiper' into bird array [ 'Parrot', 'Owl', 'KingFisher', 'Sandpiper' ]

conact() method
Bird and animal array combined: [ 'Parrot', 'Owl', 'KingFisher', 'Sandpiper', 'Tiger', 'Cheetah' ]

forEach() method: Birds
Parrot
Owl
KingFisher
Sandpiper

filter() method
[ 'Parrot', 'Owl', 'Sandpiper' ]

join()  method
Parrot, Owl, KingFisher, Sandpiper

indexOf()  method
Owl is present in position: 2

lastIndexOf() method
'ab' is present in position: 16

map() method
Converting words to plural: [ 'Parrots', 'Owls', 'KingFishers', 'Sandpipers' ]

reduce()  method
Sum using reduce: 500

reduceRight()  method
difference using rightReduce: -100

reverse() method
original: [ 'Parrot', 'Owl', 'KingFisher', 'Sandpiper' ] 
 reversed: [ 'Sandpiper', 'KingFisher', 'Owl', 'Parrot' ]
every() method
false

shift() method
Animal name shifted: Tiger

unshift() method
Pushing new element to the front of bird array [ 'Woodpeckers', 'Parrot', 'Owl', 'KingFisher', 'Sandpiper' ]

slice() method
[ 'Parrot', 'Owl', 'KingFisher' ]

toString() method
Converting array to string: Woodpeckers,Parrot,Owl,KingFisher,Sandpiper

some() method
There is a bird name whose length is less than 4 letter ? -> true

splice() method
Removing 2 elements from index 1 and adding new two elemnts: [ 'Woodpeckers', 'Penguins', 'Finches', 'KingFisher', 'Sandpiper' ]

sort() method
Sorted Birds array: [ 'Finches', 'KingFisher', 'Penguins', 'Sandpiper', 'Woodpeckers' ]
[Finished in 0.2s]

*/