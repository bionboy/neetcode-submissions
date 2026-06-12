// [1] possibile chars are 256 ascii so lets find one not included to delimit them
// going to use a null byte as the safest out of bounds char to delimit the strings

// [2] other idea: we reserve a fixed amount in the front that holds the delimiter phrase
// ex. for ["hi. ", "what is up.. ", "bye!"]
// find a delimiter phrase not in the data
// -> "...0000000"
// then apply it
// -> "...0000000hi. ...what is up.. ...bye!"
// where we used ... to delimit and the 0's are padding for the

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const str = strs.map((s) => `${s.length}#${s}`).join('')
        console.log(`str: <${str}>`);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strs: string[] = [];
        for (let i=0; i < str.length && i < 100_000; i++){
            console.log('i: ', i)
            // get length: read until # 
            const start = i;
            while (i < str.length && str[i] !== '#') i++;
            const end = i;
            // convert
            const length = Number(str.slice(start, end));

            // grab sub string
            const sub = str.slice(i+1, i+1+length)
            strs.push(sub)

            i+=length;
            // console.log(start, end, 'length: ', length, 'sub: ', sub)
        }
        console.log(`strs: `, strs);
        return strs;
    }

    // // Null byte solution: doesn't work because null bytes can be in the string and also [] and [""] are hard to differentiate
    // const delimiter = "\u0000"; // Null byte
    // const delimiter = "[][][]"; 
    // encode(strs: string[]): string {
    //     const str = strs.join(delimiter);
    //     console.log(`str: <${str}>`);
    //     //console.log(strs);
    //     return str;
    // }
    // decode(str: string): string[] {
    //     const strs = str.split(delimiter); //.filter(Boolean);
    //     console.log(`strs: `, strs);
    //     return strs;
    // }
}
