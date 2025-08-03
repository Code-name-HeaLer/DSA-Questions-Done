// Print from 1 to 5 using recursion


class Solution {
    print(count) {
        if (count > 5) {
            return
        } else {
            console.log(count);
            count++;
            this.print(count);
        }
    }
}

const print2 = new Solution;
print2.print(1)
