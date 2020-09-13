# [Stacks and Queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html)

What is a stack?:

- A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous

**Push O(1)**

- Pushing a Node onto a stack will always be O(1) operation.
- It takes the same amount of time no matter how many Nodes you have in the stack

## Steps

1. You should have the Node that you want to add

## Vocab

- Push - Nodes or items that are put into the stack are pushed
- Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
- Top - This is the top of the stack.
- Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack
- IsEmpty - returns true when stack is empty otherwise returns false.
- FILO - First In Last Out; means that the first item added in the stack will be the last item popped out of the stack.
- LIFO - Last In First Out; means that the last item added to the stack will be the first item popped out of the stack.

### Lecture

**Stacks**
no other programming language has **push**
stacks work in emmory sort of like a linked list (continguous space).

- stacks are dynamic.
- stacks are great when you want to process things in a particular order.
- when you **push** it goes to the top of the call stack.
- **pop** removes
- **peek()** sees the first thing in the stack
- stacks have three methods, **push, pop, peek.**
- a use case for the stack is the call stack in javascript. runs things in order LIFO
- a queue runs things FILO
- push method will be ll.append()
- the for loop of a stack is a while loop

**Queues**

- queue's don't have a first or last, they have a front and back
- takes three methods .enqueue(), dequeue(), peek(looks at the front)
- use .push to add something to the end of the queue: enqueue
- dequeue removes stuff from the front
- peek returns what's at the front
- while loop processes what's in the queue
- while traversing a queue, what are you going to do

**API server breakdown**
When deploying to heroku, you want to have cors dependency to parse

Testing (test what you expect to see, not everything)
Write tests as follows
Unit tests for your middleware
Route tests for our server
Every route should respond with the right status code and the expected data
CRUD tests for your collection classes
Use the supergoose testing library to ensure that none of your data is persisted into a live database and that your server need not be started.

const fs = require('fs')

#### Front row tab times

_API-server build_
9:29 - server UML
9:37 - build lab 9
9:43 - Atlas MongoDB -> Clusters
9:51 - Core set up
10:01 - Route set up
10:05 - Deploy to Heroku
10:10 - v1.js
10:16 - server.test.js
10:26 - test pyramid
10:41 - break
10:52 - dynamic models
11:02 - schema test
11:10 - food test
11:15 - fs module
11:26 - is it there tho?
11:40 - break
_Stacks and queues_
11:52 - Stacks and queues
12:05 - stack build example
12:15 - test stack
12:29 - john said something important
12:42 - queue build example
12:50 - test queue
12:56 - lab requirements

[Table of Contents](../README.md)
