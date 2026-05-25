class DynamicArray<T> {
    private data: Array<T>;
    private size: number = 0;
    private capacity: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        if (capacity === 0) {
            throw Error("Capcity must be greater than zero");
        }
        this.capacity = capacity;
        this.data = new Array<T>(capacity);

        console.log("new:  ", this.size, this.capacity, this.data)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): T {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: T): void {
        // if (i < this.size)  throw Error("idk");

        this.data[i] = n;

        console.log("set:  ", this.size, this.capacity, this.data, i, n)
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: T): void {
        this.data[this.size++] = n;

        if (this.size > this.capacity) {
            this.resize();
        };

        console.log("push: ", this.size, this.capacity, this.data, n)
    }

    /**
     * @returns {number}
     */
    popback(): T{
        --this.size;
        const value = this.data[this.size];
        delete this.data[this.size]

        console.log("pop:  ", this.size, this.capacity, this.data)
        return value;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        // this.capacity = this.size;
        this.capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}



/**
 * array 2
 * 0 2 [,]
 * push 0
 * 1 2 [0,]
 * push 1
 * 2 2 [0,1]
 * push 2
 * 3 3 [0,1,2]
 * size
 * 3 
 * cap
 * 3
 */