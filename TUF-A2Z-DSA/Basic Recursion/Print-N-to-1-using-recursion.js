class Solution {
    printNto1(count) {
        if (count < 1) {
            return
        } else {
            console.log(count);
            count--
            this.printNto1(count)
        }
    }
}
const print = new Solution
print.printNto1(15)