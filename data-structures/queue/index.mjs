import Queue from "./Queue.mjs";

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
console.log(queue.toString());

queue.dequeue();

console.log(queue.toString());
