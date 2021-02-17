var add = (function() {
	var cnt=0;
	return function() {return cnt+=1;};
})();

console.log(add());
console.log(add());
console.log(add());