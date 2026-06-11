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
        const x = [...counts.entries()].sort((a,b) => b[1] - a[1])
                                      .slice(0, k)
                                      .map((count) => count[0])
        console.log(x);
        return x;
    }
}
