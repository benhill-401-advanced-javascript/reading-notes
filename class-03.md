# Reading Assingment 3

## From Duckett HTML Book:

### Ch. 3: "Lists" (pp.62-73)
HTML provides us with 3 different types of lists:
- **Ordered lists** are lists where ach item in the list is numbered. Typically in step by step instructions.
  - Created by the ```<ol>``` element. Each item in the list is placed between ```<li>``` tags. li stands for "list item."
- **Unordered lists** are lists thta begin with e bullet point.
  - Created by the ```<ul>``` element. ```<li>``` tag used to each item on the list.
- **Definition lists** are made up of a set of terms along with definitions for each of those terms.
  - Created by the ```<dl>``` element. ```<dt>``` and ```<dd>``` elements used insde the ```<dl>``` tag. ```dt``` is used to contain the term being defined, ```<dd>``` is used to contain the definition.
You can put a second list inside an ```<li>``` element to create a sublist or **nested** list.

### Ch. 13: "Boxes" (pp.300-329)
CSS treats HTML as if each element has its own individual box. Every box has three available properties that can be adjusted to control its appearance. 
  1. **Border** - Every box has a border even if it's not visible or the px are set to zero. The border seperates one box from another.
  1. **Margin** - Sit outside the edge of the border. You can set the width of a margin to create a gap between the borders of two adjacent boxes.
  1. **Padding** - Is the space between the border of a box and any content contained within it. Adding padding can increase the readability of its contents.
  - Designers refer to the space between items on a page as **white space**. If you have boxes on your page right next to eachother, you wouldn't want the borders of the boxes to touch so you'd put a margin between them to get some white space to make the boxes more defined. 
  - See pages 309-322 on more specific styles you can use with CSS for borders, margin, and padding. 
   
[Table of Contents](README.md)