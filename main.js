var sumOfSquares = 0;
var sum = 0;

for (var i = 1; i <= 10; i++) {
	sumOfSquares += i * i;
	sum += i;
}
var squareOfSum = sum * sum;
console.log(squareOfSum - sumOfSquares);