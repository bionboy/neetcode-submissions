class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(hs: number[]): number {
        const n = hs.length;

        let l = 0,
            r = n - 1,
            max = -Infinity;
        while (l < r) {
            const w = r - l;
            const h = Math.min(hs[l], hs[r]);
            max = Math.max(max, w * h);
            hs[l] < hs[r] ? ++l : --r;
        }
        return max;
    }
}
