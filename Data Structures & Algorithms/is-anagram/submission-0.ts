class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let count: Record<string, number> = {};

        for (const char of s) {
            count[char] = (count[char] ?? 0) + 1;
        }

        for (const char of t) {
            if (!count[char]) return false;
            count[char] = (count[char] ?? 0) - 1;
        }

        return true;
    }
}
