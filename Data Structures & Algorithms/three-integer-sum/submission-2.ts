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

        // const result = new Map<string, Array<number>>();
        // // lets scan the sorted list LTR
        // for (let i = 0; i < n - 2; i++) {
        //     for (let j = i + 1; j < n - 1; j++) {
        //         for (let k = j + 1; k < n; k++) {
        //             const sum = nums[i] + nums[j] + nums[k];
        //             if (sum === 0) {
        //                 const triplet = [nums[i], nums[j], nums[k]];
        //                 result.set(triplet.join(","), triplet);
        //                 console.log([i, j, k], [nums[i], nums[j], nums[k]], sum, "hit!");
        //             } else if (sum > 0) {
        //                 break;
        //             } else {
        //                 // console.log([i,j,k], [nums[i], nums[j], nums[k]],  sum)
        //             }
        //         }
        //     }
        // }
        // console.log(result);
        // return Array.from(result.values());

        const result: number[][] = [];
        // lets scan the sorted list LTR
        for (let i = 0; i < n - 2; i++) {
            // skip duplicates
            if (nums[i] === nums[i - 1]) continue;

            let left = i + 1,
                right = n - 1;
            while (left < right) {
                // console.log(i, left, right);
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    const triplet = [nums[i], nums[left], nums[right]];
                    result.push(triplet);

                    ++left;
                    --right;

                    // skip duplicates
                    while (left < right && nums[left] === nums[left - 1]) ++left;
                    while (left < right && nums[right] === nums[right + 1]) --right;
                } else if (sum < 0) {
                    ++left;
                } else {
                    --right;
                }
            }
        }
        //console.log(result);
        return result;
    }
}

/*
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++; // skip dupes
                while (left < right && nums[right] === nums[right + 1]) right--; // skip dupes
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
*/
