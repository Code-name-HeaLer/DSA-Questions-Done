/** Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

Examples:

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string. */


const isPalindrome = (str, start = 0, end = str.length - 1) => {
    // Base case: if we've checked all characters
    if (start >= end) {
        return true;
    }

    // If characters don't match, it's not a palindrome
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursively check the next pair of characters
    return isPalindrome(str, start + 1, end - 1);
}

let str = "ABCDCBA";
if (isPalindrome(str)) {
    console.log(`${str} is a Palindrome`);
} else {
    console.log(`${str} is not a Palindrome`);
}