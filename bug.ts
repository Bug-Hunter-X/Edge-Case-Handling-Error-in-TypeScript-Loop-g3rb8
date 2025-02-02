function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

// The following function has a bug
function printEvenNumbers(n: number): void {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}
printEvenNumbers(10); // This works fine too
printEvenNumbers(7); //This only prints even numbers up to 6; it should print nothing because there are no even numbers up to 7. 
//Instead, it prints 2,4,6. It should not print any numbers since there are no even numbers less than 7.