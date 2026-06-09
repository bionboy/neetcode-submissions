class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i=0; i < nums.length; i++){
            const current = nums[i];
            const compliment = target - current;
            if (map.has(compliment)) {
                return [i, map.get(compliment)]
            }
            map.set(current, i);
        }

        throw new Error('NOT FOUND')
    }

    twoSumSorted(nums: number[], target: number): number[] {
        // 2. two pointers approach
        let front = 0, back = nums.length - 1;
        console.log(front, back)
        for (let i=0; i < nums.length; i++){
            const current = nums[front] + nums[back];
            console.log('f,b,current: ', nums[front], nums[back], current)

            if (current > target) {
                back--
            } else if (current < target) {
                front ++
            } else {
                return [front, back]
            }
        }
        throw new Error('NOT FOUND')
    }
}

