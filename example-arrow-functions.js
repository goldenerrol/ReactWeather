var names = ['Andrew', 'Dan', 'Jessica'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });

//arrows replace anonymous functions
//use braces to add multiple lines
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// no need for multiple lines
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Daniel'));

//Arrows use their parents binding, while anonymous funcs update 'this' binding

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//challenge
function add (a, b) {
  return a + b;
}

//addStatement (curlies)
var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(4, 7))

//add expression, one liner
var addExpression = (a, b) => a + b;
console.log(addExpression(10, 9));

//
// console.log(add(1, 3));
// console.log(add(9, 0));
