## [Hello, World!](https://www.learnpython.org/en/Hello%2C_World%21)

Python encourages programmers to program without boilerplate (prepared) code.
- The simplest directive in Python is the "print" directive - it simply prints out a line and also includes a new line, unlike C.
- There are two major Python versions, Python 2 and 3, which are quite different
- v3 is more semantically correct and supports newer features ie, v3 the **print** statement is a function so must include parantheses whereas v2 it's invoked without them.
- It operates a lot like the console.log() in JavaScript 
- Comments in your code are used with the # symbol

Python uses indentation for blocks, rather than curly braces. 
- Both tabs and spaces are supported, but the standard indentation requires standard py code to use four spaces.

## [Variables and Types](https://www.learnpython.org/en/Variables_and_Types)

Python is completely object oriented, not "statically typed".
- You do not need to declare variables before using them, or declare their type
- **Every variable in py is an object**
- **Numbers**
  - Python supports two types numbers; integers and floating point numbers (also complex numbers)
  - The floating point number represents the **float** type object.
    - Float is used to represent real numbers and is written with a decimal point dividing the integer and fractional parts
    - **[Example:](https://docs.python.org/3/tutorial/floatingpoint.html)** 97.98, 32.3+e18, -32.54e100 all are floating point numbers
- **Strings**
  - Strings are defined either with single or double quotes
  - The difference is that using double quotes makes it easy to include apostrophes whereas these would terminate the string using single quotes.
  - 'That\'s nice!' <- Cause JavaScript  
  - There are additional variations defining strings that make it easier to include things such as carriage returns, backslashes, and Unicode characters that are explained **[here](https://docs.python.org/3/tutorial/introduction.html#strings)**

## [Lists](https://www.learnpython.org/en/Lists)

Lists are very similar to arrays. They can contain any type of variable, and they can contain as many variables as you wish.
- Lists can also be iterated over in a very simple manner, like so:
![list iteration](img/li_iterate.png)

## [Basic Operators](https://www.learnpython.org/en/Basic_Operators)

**Arithmetic Operators**
- Just as any programming language, addition +, subraction -, multiplication *, and division / operators can be used with numbers.
- Modulo (%) is also available, which returns the integer remainder of the division. Not to be confused with the division operator (/).
- / divides, % returns remainder
- Two multiplication symbols ```(**)``` makes a **power relationship** ![power relationship](img/pwr-relation.png)
- Python supports concatenating strings using the addition (+) operator ![concat string](img/concat-string.png)
- Notice in the image above how I needed to give additional quotes with a space in the middle to account for that space printing. Running that concatenation like JavaScript eliminates the space.
- You can also multiply strings ![multiply strings](img/mult-string.png)
- Lists can be joined with addition operators: ![join lists](img/li-join.png)
- Python supports forming new lists with a repeating sequence like strings above: ![repeat sequence](img/repeat-seq.png)

## [String Formatting](https://www.learnpython.org/en/String_Formatting)

Python uses C-style string formatting to create new, formatted strings. 
- The "%" operator is used to format a set of variables enclosed in a **tuple** (a fixed size list), together with a format string, which contains normal text together with **argument specifiers**, special symbols like **%s** and **%d**. ![format variable](img/format-set.png)
- To use two or more argument specifiers, use a tuple(parantheses) ![tuple](img/tuple.png)

**Basic Argument Specifiers**
- %s - String (or any object with a string representation, like numbers)
- %d - Integers
- %f - Floating point numbers
- %.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot.
- %x/%X - Integers in hex representation (lowercase/uppercase)

## [Basic String Operations](https://www.learnpython.org/en/Basic_String_Operations)

You can print out the length of a strength using the **len** object like print(len(astring)). If I assign the value of a sentence the len object would give me the amount of characters in that sentence ![string indexes](img/string-fun.png)
- You can also find where an index is: ![find index](img/find-index.png) it prints 4 because the location of the first occurence of "o" is 4 characters away from the first character.
- This example only recognizes the first occurrence
- The **.count** method counts however many of the character you give it in the string: ![character count](img/count-method.png)
- You can reverse a string like this: ![reverse](img/reverse.png)
- toUpperCase and toLowerCase ![upper and lower](img/upper_lower.png)

## [Conditions](https://www.learnpython.org/en/Conditions)

Python uses boolean variables to evaluate conditions. True and False are returned when an expression is compared or evaluated.
- Variable assignment is done using a single equals operator **=** whereas comparison between two variables is done using the double equals operator **==**
- Not equals operator is marked with **!=**
- The **and/or** boolean operators allow building complex boolean expressions ![and/or operators](img/and_or_operator.png)
- Python if statement using code blocks. This doesn't work without indentation: ![if code block](img/if-block.png)
- A statement evaluates to true if onen of the following is correct:
    1. The "True" boolean variable is given, or calculated using an expression, such as arithmetic comparison
    2. An object which is not considered "empty" is passed
- Unlike the **==** operator, the **is** operator does not match the values of the variables, but the instances themselves. !["is" operator](img/is-op.png)
- Using **not** before a boolean expression inverts it ![not operator](img/not-op.png)

## [Loops](https://www.learnpython.org/en/Loops)

There are two types of loops in Python, **for** and **while**.

### The **for** loop
For loops can iterate over a sequence of numbers using the **[range](https://www.w3schools.com/python/gloss_python_for_range.asp)** and **[Xrange](https://www.educative.io/edpresso/what-does-xrange-function-do-in-python)** functions. 
- Range returns a new list with numbers of that specified range, whereas
- Xrange returns an iterator, which is more efficient


[Table of Contents](../README.md)
