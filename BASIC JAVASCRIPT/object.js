/*
Objects in programming are like containers that hold different pieces of information.
Each piece of information has a label (key) and a value. For example, think of a box labeled "Person" that contains:

Name: John
Age: 30
City: New York
In this case, "Name", "Age", and "City" are the keys, and "John", 30, and "New York" are their corresponding values.

Objects are different from simple data types like numbers or text. The cool thing about objects is that you can change the information inside them after you create them. It's like being able to update the contents of the box without getting a new box.

For instance, you could change John's age to 31 or update his city to "Los Angeles" without creating a whole new "Person" box. This ability to change is what we mean by "mutable".

*/
//Example Code
{
    key: value
}

//unlike arrays you access them using their indexes (arr[0]) in object
// you access them wth their properties 
/* Properties
Properties consist of a key and a value. The key is the name of the property, and the value is the data stored in the property.

Here is an example of an object with a single property:
*/
//Example
const obj = {
  name: "Quincy Larson"
};

// NOTE
/*
If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name.
Here is an example of an object with a property name that has a space:
*/
//Example 
const spaceObj = {
    "Space Name": "Kirk",
  };


// ACCESSING OBJECT PROPERTIES
/*There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Example:
object.property;

Here is a sample of using dot notation (.) to read the name property of the developer object:
*/
//Example Code
const frontEndDeveloper = {
    name: "Nathan",
  }
  
  // Output: Jessica
  console.log(frontEndDeveloper.name); 

// SECOND WAY
/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

Example Code
objectName["property name"];
Here is a sample of using bracket notation to read an object's property:
*/
// Example 
const afriStudent = {
    "Student Name": "Matthew",
  };
  
  afriStudent["Student Name"]; // "Matthew"

  