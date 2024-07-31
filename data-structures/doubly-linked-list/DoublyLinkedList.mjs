import { SinglyLinkedListNode } from "../singly-linked-list/SinglyLinkedList.mjs";

class DoublyLinkedListNode extends SinglyLinkedListNode {
    constructor(val, prev = null, next = null) {
        super(val, next);

        this._prev = prev;
    }

    get prev() {
        return this._prev;
    }

    set prev(val) {
        this._prev = val;
    }

    toString() {
        return {
            val: this._val,
            prev: this._prev === null ? null : this._prev.toString(),
            next: this._next === null ? null : this._next.toString(),
        };
    }
}

class DoublyLinkedList {
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
            this._head = new DoublyLinkedListNode(val);
            this._tail = this._head;
        } else {
            const node = new DoublyLinkedListNode(val);
            node.prev = this._tail;

            this._tail.next = node;
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
            str += cur.next !== null ? "<->" : "";
            cur = cur.next;
        }

        str += "}";

        return str;
    }
}

export {  DoublyLinkedListNode, DoublyLinkedList };
