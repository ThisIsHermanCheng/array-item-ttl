class autoRemoveItemArr {
    timeouts = new Map(); // Store timeouts for each item in a map
    arr = []
    constructor(defaultTimeout = 5000) {
        this.defaultTimeout = defaultTimeout;
    }
    push(item, timeout) {
        // Check if item already exists in list; If item already exists, clear previous timeout
        this.arr.indexOf(item) === -1 ? this.arr.push(item) : clearTimeout(this.timeouts.get(item));
        const removalTimeout = setTimeout(() => {
            const index = this.arr.indexOf(item);
            if (index !== -1) {
                this.arr.splice(index, 1);
                this.timeouts.delete(item);
            }
        }, timeout ?? this.defaultTimeout);
        this.timeouts.set(item, removalTimeout);
    }
    get list() {
        return this.arr;
    }
}

module.exports = autoRemoveItemArr