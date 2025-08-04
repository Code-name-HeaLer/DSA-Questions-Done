/** Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples:

Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6

Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing) */

const printFibonacciSeries = (N) => {
    const fib = [0, 1]; // Start with first two numbers

    // Generate the series
    for (let i = 2; i <= N; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Print the series
    for (let i = 0; i <= N; i++) {
        console.log(fib[i]);
    }
}

printFibonacciSeries(5);
