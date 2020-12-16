# [Classes and Objects](https://www.learnpython.org/en/Classes_and_Objects)

Objects are an encapsulation of variables and functions into a single entity.
- Objects get their variables and functions from classes.
- Classes are essentially a template to create objects

## [Thinking recursively](https://realpython.com/python-thinking-recursively/)

### Recursive Functions (in Python)
A recursive function is a function defined in terms of itself via self-referential expressions
- The function will continue to call itself and repeat its behavior until some condition is met to return a result
- All recursive functions are made up of two parts:
  1. base case
  2. recursive case
The recursive case is the idea of taking a problem and reducing it down into smaller pieces
- As the large problem is broken down into successively less complex ones, those subproblems must eventually become so simple that they can be solved without further subdivision
- The base case is your initial condition

For functions, each recursive call adds a stack frame (execution context) to the call stack until we reach the base case. Then the stack begins to undwind as each call returns its results.

### Maintaining State

When dealing with recursive functions, keep in mind that each recursive call has its own execution context, to maintain state during recursion you have to either:
- Thread the state through each recursive call so that the current state is part of the current call's execution context
- [For more on threading](https://realpython.com/intro-to-python-threading/)
- Keep the state in global scope
- [For more on namespaces and scope](https://realpython.com/python-namespaces-scope/)

### Recursive Data Structures in Python

A list is an example of a recursive data structure.

[Table of Contents](../README.md)
