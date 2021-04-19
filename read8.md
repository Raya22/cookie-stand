> ## Layout

HTML has several semantic elements that define the different parts of a web page:

`<header>` - Defines a header for a document or a section

`<nav>` - Defines a set of navigation links

`<section>` - Defines a section in a document

`<article>` - Defines an independent, self-contained content

`<aside>` - Defines content aside from the content (like a sidebar)

`<footer>` - Defines a footer for a document or a section

`<details>` - Defines additional details that the user can open and close on demand

`<summary>` - Defines a heading for the `<details>` element


![](https://www.w3schools.com/html/img_sem_elements.gif)

`<div>` elements are often used as containing elements
to group together sections of a page.

Browsers display pages in normal flow unless you
specify relative, absolute, or fixed positioning.

Because screen sizes and display resolutions vary so much, web
designers often try to create pages of around 960-1000 pixels wide 
Fixed width layout
designs do not
change size as the
user increases
or decreases
the size of their
browser window.
Measurements tend
to be given in pixels.

### Liquid Layout
uses
percentages to specify the width
of each box so that the design
will stretch to fit the size of the
screen.
```html
<body>
<div id="header">
 <h1>Logo</h1>
 <div id="nav">
 <ul>
 <li><a href="">Home</a></li>
 <li><a href="">Products</a></li>
 <li><a href="">Services</a></li>
 <li><a href="">About</a></li>
 <li><a href="">Contact</a></li>
 </ul>
 </div>
</div>
<div id="content">
 <div id="feature">
 <p>Feature</p>
 </div>
 <div class="article column1">
 <p>Column One</p>
 </div>
 <div class="article column2">
 <p>Column Two</p>
 </div>
 <div class="article column3">
 <p>Column Three</p>
 </div>
</div>
<div id="footer">
 <p>&copy; Copyright 2011</p>
</div>
</body>
```





> ### CSS Frameworks
aim to make your life easier by providing the code for
common tasks, such as creating layout grids, styling forms, creating
printer-friendly versions of pages and so on. You can include the CSS
framework code in your projects rather than writing the CSS from scratch

![](https://res.cloudinary.com/practicaldev/image/fetch/s--DKWAhY6p--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/swx9cxcdbueh2pht2msg.png)

CSS Frameworks provide rules for common tasks.




