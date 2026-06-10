class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams: Record<string, string[]> = {};

        for (const str of strs) {
            const count = Array(26).fill(0);

            const startOfCharSet = "a".charCodeAt(0);
            for (const char of str) {
                count[char.charCodeAt(0) - startOfCharSet]++;
            }

            const key = count.join();
            if (!anagrams[key]) {
                anagrams[key] = [];
            }
            anagrams[key].push(str);
        }

        // console.log(anagrams)
        return Object.values(anagrams);

        // let result: string[][] = []
        // // 1. naive approach
        // // 1.1 sort all strings
        // const sorted = strs.map((str) => str.split('').sort().join(''))
        // console.log(sorted)
        // // 1.2 compare all strings
        // let map = new Map<string, number[]>();
        // for (let i=0; i<sorted.length; i++){
        //     const str = sorted[i];
        //     let x = (map.get(str) ?? []);
        //     x.push(i)
        //     map.set(str, x);
        // }
        // console.log(map)
        // // 1.3 return pairs via index of original strings
        // result = [...map.entries()].map(([key, indices]) => indices.map((i) => strs[i]))
        // console.log(result)
        // return result;
    }
}
