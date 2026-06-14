class Solution {
    productExceptSelf(nums: number[]): number[] {
        // This naive approach takes too long
        // const result: number[] = [];
        // for (let i=0; i < nums.length && i < limit; i++){
        //     const product = nums.slice(0, i)
        //                   .concat(nums.slice(i+1))
        //                   .reduce((x,acc) => x * acc)
        //     result.push(product)
        // }

        // This is faster:
        // 1. no new array allocations needed
        // 2. and fixed size result array
        // ... but still not fast enough
        // const result: number[] = Array(nums.length);
        // for (let i = 0; i < nums.length && i < limit; i++) {
        //     let product = 1;
        //     for (let j = 0; j < nums.length && j < limit; j++) {
        //         if (j === i) continue;
        //         product *= nums[j];
        //     }
        //     result[i] = product
        // }

        // two arrays for lhs and rhs but we dont need all that memory
        // const result = Array<number>(nums.length);
        // const lhs = Array<number>(nums.length);
        // const rhs = Array<number>(nums.length);
        // let lhsProduct = 1, rhsProduct = 1;
        // for (let i = 0; i < nums.length && i < limit; i++) {
        //     lhs[i] = lhsProduct *= nums[i];
        //     rhs[nums.length - 1 - i] = rhsProduct *= nums[nums.length - 1 - i]
        // }
        // for (let i = 0; i < nums.length && i < limit; i++) {
        //     result[i] = (lhs[i - 1] ?? 1) * (rhs[i + 1] ?? 1)
        // }
        // console.log(lhs, rhs, result)

        const n = nums.length;
        const result = Array<number>(n);
        let prefix = 1,
            suffix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        // console.log(result)

        return result;
    }

    // function getProduct(nums: number[]): number { }

    // NOTES
    // this needs to be linear
    // naive approach is to get the product for each position one-by-one
    // but im thinking we can cache some stuff and maybe do a memoization approach
    // 
    // const limit = 10 ** 5;
    // 
    // example for designing
    // [1,2,3,4,5,6] for i=2
    // 1*2 * 4*5*6
    // [1,2,3,4,5,6] for i=3
    // 1*2*3 * 5*6
    // for these they share: 1*2*5*6 and we should not recalculate that
    // everything is yelling memoization to me
    //
    // if we just cache the two sides then there is going to be no over-lap
    // ie. dont cache 1*2*3, go more granular
    // do we need to try and break up the factors explicitly?
    // can we calculate it all before?
    //
    // for (let i = 0; i < nums.length && i < limit; i++) { }
    //    for (let j = 0; j < nums.length && j < limit; j++) { }
    //
    // [1,2,3,4,5,6] -> [,,,,,115]
    // [1,2,6,24,115,690]
    // [720,720,360,120,30,6]
    // [,,,,,115]
    // [,,,,24*6=144,115]
    // [,,,6*30=180,144,115]
    // [,,2*120=240,180,144,115]
    // [,1*360,240,180,144,115]
    // [720,360,240,180,144,115]
}
