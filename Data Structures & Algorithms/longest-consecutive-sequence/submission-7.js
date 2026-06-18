class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if (n === 0) return 0;

        const set = new Set(nums);
        let longest = 0;
        for (const num of set) {
            // we want to start from smallest item in a sequence
            // so if there is a smaller one in the set, skip this one
            if (!set.has(num - 1)) {
                let length = 1,
                    pointer = num;
                while (set.has(pointer + 1)) {
                    ++pointer;
                    ++length;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;

        // const min = Math.min(...nums),
        //       max = Math.max(...nums),
        //       diff = max - min,
        //       x = new Array(diff).fill(false);
        // for (let i = 0; i < n; i++) {
        //     x[nums[i] + diff] = true;
        // }
        // let biggest = 0,
        //     count = 0;
        // for (let i = 0; i < x.length; i++) {
        //     if (x[i]) count++;
        //     else count = 0;
        //     if (count > biggest) biggest = count;
        // }
        // return biggest;
    }
}
