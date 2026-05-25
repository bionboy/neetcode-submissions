class DynamicArray<T> {
    private data: Array<T>;
    private size: number = 0;
    private capacity: number;
    private readonly DEBUG = false;

    constructor(capacity: number) {
        if (capacity === 0) {
            throw Error("Capcity must be greater than zero");
        }

        this.capacity = capacity;
        this.data = new Array<T>(capacity);

        if (this.DEBUG) console.log("new:  ", this.size, this.capacity, this.data);
    }

    get(i: number): T {
        return this.data[i];
    }

    set(i: number, n: T): void {
        // if (i < this.size)  throw Error("idk");
        this.data[i] = n;
        if (this.DEBUG) console.log("set:  ", this.size, this.capacity, this.data, i, n);
    }

    pushback(n: T): void {
        this.data[this.size++] = n;

        if (this.size > this.capacity) {
            this.resize();
        }

        if (this.DEBUG) console.log("push: ", this.size, this.capacity, this.data, n);
    }

    popback(): T {
        --this.size;
        const value = this.data[this.size];
        delete this.data[this.size];

        if (this.DEBUG) console.log("pop:  ", this.size, this.capacity, this.data);
        return value;
    }

    resize() {
        this.capacity *= 2;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}
