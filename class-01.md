# HTML Ch. 1: "Structure" (pp.12-39)
To describe the structure of a web page, we use HTML elements.
    
- Each **element** has an opening and closing tag with characters inside the left and right angled brackets which indicate the tags purpose.
- **Attributes** provide additional information about the contents of an element. They appear on the **opening tag** of the element and are made upf of 2 parts: a name and a value, seperated by an = sign.
- To learn HTML you need to know what tags are available for you to use, what they do, and where they go.

## Ch. 8 "Extra Markup" (pp. 176-199)
- **DOCTYPE** is always the first element used when writing a new HTML document. The DOCTYPE tag is used to tell the browser which version of HTML is being used. It helps render a page correctly in your browser. 
- **Comment** tags can be used inside your HTML document that will not be visible on the web page. Use of comments is always a good idea in your code because even though you may be familiar with the page you're writing, future maintenance will help you remember why certain elements are place the way they are. Plus when writing a page with a team lets other people know they why's of elements as well. 
- **ID** and **Class** allow you to identify particular elements. The ID attribute is known as a **global element** because it can be used on any element. The ID tag is used to uniquely identify that element from other elements on the page. The Class element identifies several elements as being different from the other elements on the page. ID = One element, Class = More than one.
- **div** elements allow you to group a set of elements together in on block-level box.
- **span** elements act like an inline equivalent of the div element used either to:
    1. Contain a section of text where there is no other suitable element to differentiate it from surrounding text,
    or
    1. Contain a nuymber of inline elements.
- **iframe** stands for inline frame and it basically cuts into your page and in that frame you can see another page. One common use of iframes is to embed a Google map into a page. iframes are made up a few attributes:
    - **src** specifies the URL of the page to show in the frame
    - **height**
    - **width**
    - **seamless** doesn't need a value but you will often see authors give it a value of seamless. Older browsers don't support seamless.
- **meta** is an empty element that gives browsers data about the page. (see pp. 191-192)
- See pages 193-194 for **escape characters**. Basically describes how to make a less-than symbol  appear on your web page use these in your editor - "&lt:" 