## Tables

A table represents information in a grid format. 

![](https://ictacademy.com.ng/wp-content/uploads/2017/10/HTML-Table-Structure.png)

Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```
You can make cells of a table span more than one row
or column using the rowspan and colspan attributes.

```html
<tr>
 <th>6pm - 7pm</th>
 <td rowspan="2">Movie</td>
 <td>Comedy</td>
 <td>News</td>
 </tr>
 ```

 For long tables you can split the table into a `<thead>`,
`<tbody>`, and `<tfoot>`.

```html
<table>
 <thead>
 <tr>
 <th>Date</th>
 <th>Income</th>
 <th>Expenditure</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th>1st January</th>
 <td>250</td>
 <td>36</td>
 </tr>
 <tr>
 <th>2nd January</th>
 <td>285</td>
 <td>48</td>
 </tr>

 <tr>
 <th>31st January</th>
 <td>129</td>
 <td>64</td>
 </tr>

 </tbody>

 <tfoot>
 <tr>
 <td></td>
 <td>7824</td>
 <td>1241</td>
 </tr>
 </tfoot>
</table>
```



## Domain Modeling

creating a conceptual model in code for a specific problem
When a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects

![](https://www.w3schools.com/js/pic_htmltree.gif
)







## Creating an Object Constructor Notation

object constructor function
```js
var myFather = new Person("John", "Doe", 50, "blue");
```
 ```js
 var hotel = new object();
 hotel.name='Helton';
 ```
 and we can update the values of the object's property by
 ```js
 hotel.name= 'Park';
 ```

 **Arrays are objects**
 Arrays and objects can be used to create complex data 
sets They can be visualized as containers for other datatypes in JavaScript, thus the term: data structures.


 JavaScript also has several built-in objects such as 
String, Number, Math, and Date. Their properties and 
methods offer functionality that help you write scripts. 



