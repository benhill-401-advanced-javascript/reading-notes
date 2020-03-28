# Reading Assignment 4

## From Duckett HTML Book:

### Ch. 4: "Links" (pp.74-93)

Links are the defining feature of the web because they allow you to move from one web page to another - enabling the very idea of browsing.

#### Writing Links

- Links are created using the ```<a>``` element. You specify which page you want to link to using the href attribute (hypertext reference). 
```<a href="http://www.imdb.com">IMDB</a>```
- The text between the open and close tags is the text that will show on the web page the user can click to navigate to IMDB's website.
- Making a link to a different web page outside yours is known as an **absolute** reference. It includes the URL (Uniform Resource Locator) and domain name. (shown above)
- Links in your own site are known as **relative** reference. This changes the syntax of the ```<a>``` element that href is = to. 
```<a href="reading-notes/class-04.html">Class 4</a>```
- You can use link to other parts of the page as well with the **id attribute** which can be used on any HTML element. For example you can link to the bottom section and back to a top section of any page:
```<h2 id="interlude">Interlude</a>```
```<h2 id="prologue">Prologue</a>```


[Table of Contents](README.md)