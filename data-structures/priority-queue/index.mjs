import PriorityQueue from "./PriorityQueue.mjs";

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(1, 2);
priorityQueue.enqueue(2, 8);
priorityQueue.enqueue(3, 4);

console.log(priorityQueue.front());
console.log(priorityQueue.toString());

priorityQueue.dequeue();

console.log(priorityQueue.toString());
