# Binary Trees and Binary Search Trees

A Tree is a node based data structure, but within a tree, each node can have links to _multiple_ nodes rather than just one like a linked list.
As in a family tree, a node can have _descendants_ and _ancestors_.

- A node's descendants are **all** the nodes that stem from a node, while a node's ancestors are **all** the nodes it stems from.
- A binary tree is a tree in which each node has zero, one, or two children
- a binary _search_ tree is a binary tree that also abides by the following rules:
  - Each node can have at most one "left" child and one "right" child.
  - A node's "left descendants can only contain values that are less than the node itself. Likewise, a node's "right" descendants can only contain values that are greater than the node itself.

#### Common Terminology

- _Root_
  - The root is the first/top Node in the tree
- _Node_
  - A node is the individual item/data that makes up the data structure
- _Left Child_
  - The node that is positioned to the left of a root or node
- _Right Child_
  - The node that is positioned to the right of a root or node
- _Edge_
  - The edge in a tree is the link between a parent and child node
- _Leaf_
  - A leaf is a node that does not contain any children
- _Height_
  - The height of a tree is determined by the number of edges from the root to the bottommost node

[Table of Contents](../README.md)
