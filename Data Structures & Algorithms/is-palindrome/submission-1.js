class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[\s\p{P}]+/gu, "");
        let i = 0,
            j = s.length - 1;
        while (i < j) if (s[i++] !== s[j--]) return false;
        return true;

        // const punc = new Set('.?!,;-')
        // for (let i=0, j=s.length-1; i<Math.floor(s.length/2); i++, j--){
        //     let l = s[i];
        //     let r = s[j];
        //     // while (punc.has(l)) l = s[++i]
        //     // while (punc.has(r)) r = s[--j]
        //     // console.log('<><><>')
        //     // console.log(l,r)
        //     if (l !== r)
        //         return false
        // }
        // return true
    }
}
