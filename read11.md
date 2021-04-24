> ## Images

Controlling sizes of images in CSS
e using the width and
height properties in CSS.
Specifying image sizes helps
pages to load more smoothly
because the HTML and CSS
code will often load before the
images.

```css
img.large {
width: 500px;
height: 500px;}
img.medium {
width: 250px;
height: 250px;}
img.small {
width: 100px;
height: 100px;}
```

### Background Images
background-image
property allows you to place
an image behind any HTML
element. This could be the entire
page or just part of the page. 

```css
body {
background-image: url("images/pattern.gif");}
```

it is possible to create
a link or button that changes to a
second style when a user moves
their mouse over it (known as a
rollover) and a third style when
they click on it. 


**Rollovers** are a nice way to add visual feedback to your website's buttons. As a visitor moves their mouse over a rollover button, it changes to indicate that it's clickable. In the bad old days of HTML, the only way to create a rollover was to use JavaScript to swap the two button images.

![](https://i.stack.imgur.com/WRL00.jpg)



```css

a.button {
height: 36px;
background-image: url("images/button-sprite.jpg");
text-indent: -9999px;
display: inline-block;}
a#add-to-basket {
width: 174px;
background-position: 0px 0px;}
a#framing-options {
width: 210px;
background-position: -175px 0px;}
a#add-to-basket:hover {
background-position: 0px -40px;}
a#framing-options:hover {
background-position: -175px -40px;}
a#add-to-basket:active {
background-position: 0px -80px;}
a#framing-options:active {
background-position: -175px -80px;}
```


**Gradients**
The
gradient is created using the
background-image property
and, at the time of writing,
different browsers required a
different syntax.

![](https://cssgradient.io/images/css-gradient-share-23a5b71f.png)



> ## Practical Information

Search Engine Optimization (SEO)
* The Basic : Search engine optimization (or
SEO) is the practice of trying
to help your site appear nearer
the top of search engine results

* On-Page Techniques : On-page techniques are the
methods you can use on your
web pages to improve their
rating in search engines.


* Off-Page Techniques :Getting other sites to link to you
is just as important as on-page
techniques. Search engines help
determine how to rank your
site by looking at the number of
other sites that link to yours.


### To put your site on the web, you will need to obtain a domain name and web hosting

