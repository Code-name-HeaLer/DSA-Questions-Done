// Must do Pattern Problems before starting DSA

// Q1:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

class Solution1 {
  printSquare(N1) {
    for (let i = 0; i < N1; i++) {
      for (let j = 0; j < N1; j++) {
        process.stdout.write("* ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution1 = new Solution1();
const N1 = 5;
solution1.printSquare(N1);

// Q2:
// *
// * *
// * * *
// * * * *
// * * * * *

class Solution2 {
  // Function to check whether the list is palindrome.
  printTriangle(N2) {
    // your code here
    for (let i = 0; i < N2; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write("* ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution2 = new Solution2();
const N2 = 5;
solution2.printTriangle(N2);

// Q3:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

class Solution3 {
  printTriangle2(n3) {
    // code here
    for (let i = 1; i <= n3; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString() + " ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution3 = new Solution3();
const n3 = 5;
solution3.printTriangle2(n3);

// Q4.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

class Solution4 {
  printTriangle3(n4) {
    // code here
    for (let i = 1; i <= n4; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(i.toString() + " ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution4 = new Solution4();
const n4 = 5;
solution4.printTriangle3(n4);

// Q5.
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
class Solution5 {
  // Function to print triangle pattern with N lines.
  printTriangle4(n5) {
    // your code here
    for (let i = n5; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        process.stdout.write("* ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution5 = new Solution5();
const n5 = 5;
solution5.printTriangle4(n5);

// Q6.
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
class Solution6 {
  // Function to print the pattern.
  printTriangle5(n6) {
    // your code here
    for (let i = 0; i < n6; i++) {
      for (let j = n6; j > i; j--) {
        process.stdout.write((n6 - j + 1).toString() + " ");
      }
      process.stdout.write("\n");
    }
  }
}
const solution6 = new Solution6();
const n6 = 5;
solution6.printTriangle5(n5);
