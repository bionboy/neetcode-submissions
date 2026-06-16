class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if (n === 0) return 0;

        //let map = new Map();

        const min = Math.min(...nums); 
        const max = Math.max(...nums);
        const diff = max - min;

        let x = new Array(diff).fill(false);


        for (let i=0; i<n; i++){
            const num = nums[i]
            //map.set(num, true)
            x[num+diff] = true;
        }

        console.log(min, max, diff, x)

        let biggest = 0,
            count = 0;
        for (let i=0; i<x.length; i++){
            if (x[i]) count++;
            else count = 0;
            if (count > biggest) biggest = count;
            //console.log(count, biggest)
        }
        
        // console.log(x)
        return biggest;

        //return map.size
    }
}
