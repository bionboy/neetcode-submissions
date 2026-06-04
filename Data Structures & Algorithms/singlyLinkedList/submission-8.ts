type Link = {
    value: number|null,
    next: Link|null,
}

class LinkedList {
    private empty: Link = {value: null, next: null} as const;
    private head: Link|null = null; // = this.empty;
    private tail: Link|null = null; // = this.empty;

    constructor() {
        this.head = this.tail = this.empty;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head;
        if (index === 0) {
            const x = this.head?.value ?? -1;
            // console.log(this.head, x)
            console.log('get: ', x)
            return x;
        }
        for(let i=0; i < index; i++) {
            if (curr.next === null) {
                console.log('get: ', -1)
                return -1
            }
            curr = curr.next;
        }

        console.log('get: ', curr.value)
        return curr.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const emptyHead = this.head === this.empty;
        let newLink: Link = {value: val, next: emptyHead ? null : this.head}
        // console.log(this.head, this.head === this.empty, newLink)
        this.head = newLink;
        if (emptyHead) {
            this.tail = newLink;
        }
        console.log('insertHead: ', this.getValues())
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        // console.log('||[h]||', this.head, '||[t]||', this.tail)
        const emptyTail = this.head === this.empty;
        let newLink: Link = {value: val, next: null}
        if (emptyTail){
            this.head = this.tail = newLink;
        } else {
        this.tail.next = newLink;
        this.tail = newLink;
        }
        // console.log('||[h]||', this.head, '||[t]||', this.tail)
        console.log('insertTail: ', this.getValues())
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let curr = this.head;
        let prev = curr;
        const emptyHead = this.head === this.empty;
        if (emptyHead) {
            return false;
        }

        if (index === 0){
            this.head = this.head.next;
            return true;
        }

        for(let i=0; i < index; i++) {
            if (curr?.next === null) {
                return false;
            }
            prev = curr;
            curr = curr.next;
        }

        prev.next = curr.next;
        
        if (curr.next === null) {
            this.tail = prev
        }

        console.log('remove: ', this.getValues())
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        // console.log('ht', this.head, this.tail)
        let curr = this.head;
        let result: Array<number> = [];
        if (this.head === this.tail) {
            return [this.head?.value];
        }
        while (curr !== null) { 
            result.push(curr.value);
            curr = curr.next; 
            if (curr === null){
                break;
            }
        }
        return result;
    }
}
