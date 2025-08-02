/** Print GFG n times without the loop.

Example:

Input:
5
Output:
GFG GFG GFG GFG GFG

Your Task:
This is a function problem. You only need to complete the function printGfg() that takes N as parameter and prints N times GFG recursively. Don't print newline, it will be added by the driver code.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N) (Recursive).

Constraint:
1<=N<=1000 */

class Solution {
  printGfg(N) {
    // Base Case: If N is 0 or less, we've printed enough times, so stop.
    if (N <= 0) {
      return;
    }

    // Recursive Step: First, solve the subproblem for N-1.
    this.printGfg(N - 1);

    // After the N-1 prints are done, we handle the Nth print.
    // Add a space before printing, but only if it's not the very first one.
    // The first one is printed when N=1, so we add a space for all N > 1.
    if (N > 1) {
      process.stdout.write(" ");
    }

    // Print the current "GFG". We use process.stdout.write to avoid adding a newline.
    process.stdout.write("GFG");
  }
}
