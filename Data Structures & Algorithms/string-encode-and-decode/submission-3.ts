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
    encode(strs: string[]): string {
        const str = strs.map((s) => `${s.length}#${s}`).join('')
        //console.log(`str: <${str}>`);
        return str;
    }

    decode(str: string): string[] {
        let strs: string[] = [];
        let i =0;
        while (i < str.length) {
            // get length: read until # 
            const endOfLength = str.indexOf('#', i)
            // convert
            const length = Number(str.slice(i, endOfLength));
            // grab sub string
            const start = endOfLength + 1;
            const end = start + length;
            const sub = str.slice(start, end)
            
            strs.push(sub)
            i = end;
            // console.log(start, end, 'length: ', length, 'sub: ', sub)
        }
        //console.log(`strs: `, strs);
        return strs;
    }

    // // Null byte solution: doesn't work because null bytes can be in the string and also [] and [""] are hard to differentiate
    // const delimiter = "\u0000"; // Null byte
    // const delimiter = "[][][]"; 
    // encode(strs: string[]): string {
    //     const str = strs.join(delimiter);
    //     // console.log(`str: <${str}>`);
    //     return str;
    // }
    // decode(str: string): string[] {
    //     const strs = str.split(delimiter); //.filter(Boolean);
    //     // console.log(`strs: `, strs);
    //     return strs;
    // }
}
