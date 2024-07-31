import Stack from "./Stack.mjs";

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.toString());

stack.pop();

console.log(stack.toString());
