// Must do Pattern Problems before starting DSA

/*
1.
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
 */

class Solution {
  printSquare(N) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        process.stdout.write("* ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution = new Solution();
const N = 5;
solution.printSquare(N);
