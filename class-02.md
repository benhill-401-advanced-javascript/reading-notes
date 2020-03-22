# Ch. 2: "Text" (pp. 40-61)
HTML Elements are used to describe the structure of the page aka "markup" (aka tags). 
- **Structural Markup** is the elements you can use to describe both headings and paragraphs. (pp. 43-49)
- **Semantic Markup** provides extra information; such as where emphasis is placed in a sentence, that something you have written is a quotation (and who said it), the meaning of acronyms, and so on. (pp. 50-56)

## Ch. 10: "Introducing CSS" (pp.226-245)
If HTML defines what the content of the page is and how it's structured, basically what the page "is," CSS (Cascading Style Sheets) is the language that tells that element how it should look.
- CSS uses style rules to define how an element should look in two parts: a **selector** and a **declaration**. 
- **Selectors** indicate which element the rule applies to. The same rule can apply to more than one element if you seperate the element names with commas.
- **Declarations** indicate how the elements referred to in teh selector should be styled. Declarations are split into two parts, a **property** and a **value**, seperated by a colon. 
- There are three different types of style rules for CSS:
  1. **Inline styles** style one particular element like this: 
     ```<p style= color: blue;> This text would appear to be blue.</p>``` The style goes inside the opening tag.
  2. **Internal style sheets** go inside the ```<head>``` element inside ```<style>``` tag. This is where the selector and declaration come into play and you can style every element within that single page.
  3. **External style sheets** are where most styling happens. You create a style.css folder and create a link inside the ```<head>``` element to the style sheet. Inside the style sheet you can style every element in every page of your web site at the same time.

[Table of Contents](README.md)