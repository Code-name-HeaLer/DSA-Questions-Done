/** Given a number n, determine whether it is a prime number or not.
Note: A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

Examples :

Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered prime.

Constraints:
1 ≤ n ≤ 10^9 */

class Solution {
  isPrime(n) {
    // Check if n is 1 or 0
    if (n <= 1) return false;

    // Check if n is 2 or 3
    if (n === 2 || n === 3) return true;

    // Check whether n is divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i <= Math.sqrt(n); i += 6)
      if (n % i === 0 || n % (i + 2) === 0) return false;

    return true;
  }
}
