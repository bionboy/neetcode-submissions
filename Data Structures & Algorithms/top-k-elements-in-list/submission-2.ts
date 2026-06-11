class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let counts = new Map<number, number>();

        for (let i=0; i<nums.length; i++) {
            const num = nums[i]
            counts.set(num, (counts.get(num) ?? 0)+1)
        }

        // [1] built in sort
        // const x = [...counts.entries()].sort((a,b) => b[1] - a[1])
        //                               .slice(0, k)
        //                               .map((count) => count[0])

        // [2] bucket sort (more optimal)
        const buckets: number[][] = Array.from({ length: nums.length + 1}, () => []);

        for (const [num, count] of counts) {
            buckets[count].push(num);
        }

        const result: number[] = []
        for (let i=buckets.length-1; i >= 0 && k > result.length; i--){
            result.push(...buckets[i])
        }

        const x = result.slice(0,k);

        // console.log(counts)
        // console.log(buckets)
        // console.log(result)
        // console.log(x);
        return x;
    }
}
