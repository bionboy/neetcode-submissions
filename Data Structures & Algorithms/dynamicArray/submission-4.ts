class DynamicArray<T> {
    private data: Array<T>;
    private size: number = 0;
    private capacity: number;

    constructor(capacity: number) {
        if (capacity === 0) {
            throw Error("Capcity must be greater than zero");
        }

        this.capacity = capacity;
        this.data = new Array<T>(capacity);

        console.log("new:  ", this.size, this.capacity, this.data)
    }

    get = (i: number): T => this.data[i];

    set(i: number, n: T): void {
        // if (i < this.size)  throw Error("idk");
        this.data[i] = n;
        console.log("set:  ", this.size, this.capacity, this.data, i, n)
    }

    pushback(n: T): void {
        this.data[this.size++] = n;

        if (this.size > this.capacity) {
            this.resize();
        };

        console.log("push: ", this.size, this.capacity, this.data, n)
    }

    popback(): T{
        --this.size;
        const value = this.data[this.size];
        delete this.data[this.size]

        console.log("pop:  ", this.size, this.capacity, this.data)
        return value;
    }

    resize = () => this.capacity *= 2;
    getSize = () => this.size;
    getCapacity = () => this.capacity;
}
