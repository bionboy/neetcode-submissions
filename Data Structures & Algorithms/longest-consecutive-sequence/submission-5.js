class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if (n === 0) return 0;

        const min = Math.min(...nums);
        const max = Math.max(...nums);
        const diff = max - min;

        let x = new Array(diff).fill(false);

        for (let i = 0; i < n; i++) {
            const num = nums[i];
            x[num + diff] = true;
        }

        let biggest = 0,
            count = 0;
        for (let i = 0; i < x.length; i++) {
            if (x[i]) count++;
            else count = 0;
            if (count > biggest) biggest = count;
        }

        return biggest;
    }
}
