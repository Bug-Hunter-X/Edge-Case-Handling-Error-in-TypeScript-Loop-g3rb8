# TypeScript Edge Case Bug

This repository demonstrates a common error in TypeScript loop handling, specifically an edge case issue.  The `printEvenNumbers` function incorrectly handles odd input values, printing even numbers up to the largest even number less than the input instead of handling it gracefully (e.g. by printing nothing or returning early).

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file provides a corrected version demonstrating proper handling of the edge case. 

This example highlights the importance of considering edge cases and thoroughly testing code to avoid unexpected behavior.