/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }

// type Pair = [number, string];
// type Pair = { key: number, value: string }

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        if (pairs.length === 0) return [];

        let steps: Pair[][] = [structuredClone(pairs)];
        // console.log(steps.map((pairs) => pairs.map((pair) => `${[pair.key, pair.value]},`)));

        for (let i = 1; i < pairs.length; i++) {
            const pair = pairs[i];
            let step: Pair[] = pairs;

            for (let j = 0; j < i; j++){
                //console.log(pair.key, pairs[j].key)
                const candidate = pairs[j]
                if (pair.key < candidate.key) {
                    pairs.splice(i, 1);
                    pairs.splice(j, 0, pair);
                    // console.log( `loop (${i}, ${j}): pair=${[pair.key, pair.value]}, candidate=${[candidate.key, candidate.value]}, step=${step}`, );
                    break;
                }
                // console.log( `loop (${i}, ${j}): pair=${[pair.key, pair.value]}, candidate=${[candidate.key, candidate.value]}`, );
            }
            steps.push(structuredClone(pairs));
        }

        // console.log(steps.map((pairs) => pairs.map((pair) => `${[pair.key, pair.value]},`)));
        return steps;
    }
}
