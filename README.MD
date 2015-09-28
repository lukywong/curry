# curry
An implementation of curry.

# Description
Currying is the technique that tranforms a function with multipule arguments to a sequence of functions with a single argument, which is widely used in functional progrogramming.

# Examples

```javascript
function g(a, b, c) {
  return (a + b) * c;
}

var f = curry(g);
console.log(f(1)(2)(3));
console.log(f(1, 2)(3));
console.log(f(1, 2, 3));
console.log(f(1)(2, 3));
```
