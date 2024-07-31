import { SinglyLinkedListNode } from "../singly-linked-list/SinglyLinkedList.mjs";

class Stack {
    constructor() {
        this._top = null;
    }

    push(val) {
        if (this._top === null) {
            this._top = new SinglyLinkedListNode(val);
        } else {
            this._top = new SinglyLinkedListNode(val, this._top);
        }
    }

    peek() {
        return this._top === null ? null : this._top.val;
    }

    pop() {
        if (this._top === null) {
            return null;
        }

        const val = this._top.val;
        const next = this._top.next;

        // remove current top node next pointer
        this._top.next = null;

        // update top node to next node in stack
        this._top = next;

        return val;
    }

    isEmpty() {
        return this._top === null;
    }

    toString() {
        let str = "{";

        let cur = this._top;
        while (cur !== null) {
            str += ` ${cur.val} `;
            str += cur.next !== null ? "->" : "";
            cur = cur.next;
        }

        str += "}";

        return str;
    }
}

export default Stack;
