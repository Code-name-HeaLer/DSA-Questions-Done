/**
Switch Case

Given the integer day denoting the day number, print on the screen which day of the week it is. Week starts from Monday and for values greater than 7 or less than 1, print Invalid.

Ensure only the 1st letter of the answer is capitalised.

For printing use:-
for Javascript : console.log()

Examples:
Input: day = 3

Output: Wednesday

Input: day = 8

Output: Invalid
 */

class Solution {
  whichWeekDay(day) {
    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      // The default case handles any input that is not 1-7.
      default:
        console.log("Invalid");
        break;
    }
  }
}
