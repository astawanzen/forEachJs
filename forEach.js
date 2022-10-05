//ARRAY.FOREACH = EXECUTES A PROVIDED CALLBACK FUNCTION ONCE FOR EACH ARRAY ELEMENT

let students = ["spongebob", "patrick", "squidward"];

//function to capitalize first letter of each string in the array
//forEach provided 3 arguments behind the scene element, index, and the array
//we don't necessarily need to use any of those arguments, you can change them
function capitalize(element, index, array){
  //these line below will capitalize the first letter of each string
  array[index] = element[0].toUpperCase() + element.substring(1);
}
//apply it to the array of students
students.forEach(capitalize);
//function to display all element in the array
function print(x){
  console.log(x);
}
students.forEach(print);