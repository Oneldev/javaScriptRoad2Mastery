// DOM(Document Object Model)
/*
What is the DOM?
The DOM is a tree of objects that represents the HTML, the browser creates the DOM after reading our HTML.
it therefore allows us to manipulate our DOM through the interface/tools(the DOM API).

The DOM API are sets of commands you can use to talk to the DOM tree. This commands lets you add, remove, or change parts of your web page.
they provide an interface of communication with your browser.

Simplified Explanation
Document: Refers to the web page.
Object: Each element on the web page (like paragraphs, headers, images) is an object.
Model: Represents the hierarchical structure of these objects.
                 Document
                     |
                   <html>
                     |
        --------------------------------
       |                                |
     <head>                          <body>
       |                                |
   <title>                         <h1> "Hello, World!"
      "My Page"                        |
                                    <p> "This is a paragraph."
 
*/  
                                    //DOM API's
//One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:
// Example
let h1 = document.querySelector("h1");
// Note that h1 is a string and matches the CSS selector you would use.

// Accessing HTML properties using dot notation(allows you to access properties and methods in javascript)
/* 
Here is an example of using dot notation to set the onclick property of a button to a function reference.

Example Code
button.onclick = myFunction;
In this example, button is the button element, and myFunction is a reference to a function. When the button is clicked, myFunction will be called.
*/

/* 
The innerText property controls the text that appears in an HTML element. For example:

Example Code
<p id="info">Demo content</p> 
Example Code
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
The following example would change the text of the p element from Demo content to Hello World.
*/

/*The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

Here is an example of how to update the display for a paragraph element:
*/

//Example Code
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';

//innerHTML
/*
innerHTML: Gets or sets the HTML content, including tags and nested elements.
Unlike innerText which Gets or sets only the text, ignoring HTML tags.
Here is an example of updating the content for this paragraph element using the innerHTML property.
*/
//Example 
<p id="demo">This is a paragraph.</p>
document.querySelector("#demo").innerHTML = "<h1>Hello, innerHTML!<h1>";

// getElementById
/*
To access an HTML element with a given id name, you can use the getElementById() method. 
Here's an example of how to use this method:
*/
// Example
<h1 id="title">Main title</h1>
const mainTitleElement = document.getElementById('title');
// No need of using the css selector format here