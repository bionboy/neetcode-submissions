class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        /*
        - first thought is to sort it and move inward from the two ends.
          - this would work for 2sum for sure
        - naive solution is to create all triplets and check each one
          - ignoring duplicates by order of course
          - we can work from this backwards to see if we can skip any triplets from brute force
        - 
        */

        const n = nums.length;
        nums.sort((a, b) => a - b);
        console.log(nums);
        const result = new Map<string, Array<number>>();
        // lets scan the sorted list LTR
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    const sum = nums[i] + nums[j] + nums[k];
                    if (sum === 0) {
                        const triplet = [nums[i], nums[j], nums[k]];
                        result.set(triplet.join(","), triplet);
                        console.log([i, j, k], [nums[i], nums[j], nums[k]], sum, "hit!");
                    } else if (sum > 0) {
                        break;
                    } else {
                        // console.log([i,j,k], [nums[i], nums[j], nums[k]],  sum)
                    }
                }
            }
        }
        console.log(result);

        return Array.from(result.values());
    }
}
