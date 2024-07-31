class SinglyLinkedListNode {
    constructor(val, next = null) {
        this._val = val;
        this._next = next;
    }

    get val() {
        return this._val;
    }

    set val(val) {
        this._val = val;
    }

    get next() {
        return this._next;
    }

    set next(val) {
        this._next = val;
    }

    toString() {
        return {
            val: this._val,
            next: this._next === null ? null : this._next.toString(),
        };
    }
}

class SinglyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    add(val) {
        if (this._head === null) {
            this._head = new SinglyLinkedListNode(val);
            this._tail = this._head;
        } else {
            this._tail.next = new SinglyLinkedListNode(val);
            this._tail = this._tail.next;
        }
    }

    isEmpty() {
        return this._head === null;
    }

    toString() {
        let str = "{";

        let cur = this._head;
        while (cur !== null) {
            str += ` ${cur.val} `;
            str += cur.next !== null ? "->" : "";
            cur = cur.next;
        }

        str += "}";

        return str;
    }
}

export { SinglyLinkedListNode, SinglyLinkedList };
