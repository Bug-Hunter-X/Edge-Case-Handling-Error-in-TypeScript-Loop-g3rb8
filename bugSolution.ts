function printEvenNumbers(n: number): void {
  if (n < 2) {
    return; // Handle cases where n is less than 2
  }
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

printEvenNumbers(10); // Prints even numbers up to 10
printEvenNumbers(7); // Prints nothing, correctly handling the odd input
printEvenNumbers(1); //Prints nothing