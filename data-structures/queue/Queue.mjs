import { SinglyLinkedListNode } from "../singly-linked-list/SinglyLinkedList.mjs";

class Queue {
    constructor() {
        this._start = null;
        this._end = null;
    }

    enqueue(val) {
        if (this._start === null) {
            this._start = new SinglyLinkedListNode(val);
            this._end = this._start;
        } else {
            this._end.next = new SinglyLinkedListNode(val);
            this._end = this._end.next;
        }
    }

    front() {
        return this._start === null ? null : this._start.val;
    }

    dequeue() {
        if (this._start === null) {
            return null;
        }

        const val = this._start.val;
        const next = this._start.next;

        // remove current start node next pointer
        this._start.next = null;

        // update start node to next node in queue
        this._start = next;

        return val;
    }

    isEmpty() {
        return this._start === null;
    }

    toString() {
        let str = "{";

        let cur = this._start;
        while (cur !== null) {
            str += ` ${cur.val} `;
            str += cur.next !== null ? "->" : "";
            cur = cur.next;
        }

        str += "}";

        return str;
    }
}

export default Queue;
