/** Given an integer n, print all the divisors of N in the ascending order.

Examples:

Input : n = 20
Output: 1 2 4 5 10 20
Explanation: 20 is completely divisible by 1, 2, 4, 5, 10 and 20.

Input: n = 21191
Output: 1 21191
Explanation: As 21191 is a prime number, it has only 2 factors(1 and the number itself).

Constraints:
1 ≤ n ≤ 109 */

class Solution {
  print_divisors(n) {
    const divisors = [];
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (i * i !== n) {
          divisors.push(n / i);
        }
      }
    }
    divisors.sort((a, b) => a - b);
    for (let i = 0; i < divisors.length; i++) {
      process.stdout.write(String(divisors[i]));

      if (i < divisors.length - 1) {
        process.stdout.write(" ");
      }
    }
  }
}
