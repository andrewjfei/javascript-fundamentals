import Queue from "../queue/Queue.mjs";
import { SinglyLinkedListNode } from "../singly-linked-list/SinglyLinkedList.mjs";

class PriorityQueueNode extends SinglyLinkedListNode {
    constructor(val, priority = 0, next = null) {
        super(val, next);

        this._priority = priority;
        this._val = val;
        this._next = next;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    toString() {
        return {
            val: this._val,
            priority: this._priority,
            next: this._next === null ? null : this._next.toString(),
        }
    }
}

class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    enqueue(val, priority = 0) {
        if (this._start === null) {
            this._start = new PriorityQueueNode(val, priority);
            this._end = this._start;
        } else {
            let node = new PriorityQueueNode(val, priority);
            let copy = this._start;

            if (priority > copy.priority) {
                node.next = copy;
                this._start = node;
            } else {
                // find node insert position
                while (copy.priority >= priority) {
                    // insert node at end of queue
                    if (copy.next === null) {
                        copy.next = node;
                        this._end = node;
                        break;
                    } else {
                        // insert node before first lower priority node from
                        // start of queue
                        if (priority > copy.next.priority) {
                            node.next = copy.next;
                            copy.next = node;
                            break;
                        }
                    }

                    copy = copy.next;
                }
            }
        }
    }

    toString() {
        let str = "{";

        let cur = this._start;
        while (cur !== null) {
            str += ` ${cur.val} (${cur.priority}) `;
            str += cur.next !== null ? "->" : "";
            cur = cur.next;
        }

        str += "}";

        return str;
    }
}

export default PriorityQueue;
