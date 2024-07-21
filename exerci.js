// Example object
const component = {
  axes: {
    x: 10,
    y: 20
  }
};

// Object destructuring to initialize variables
const { axes: axes1 } = component;
const { axes: axes2 } = component;

console.log(axes1); // Output: { x: 10, y: 20 }
console.log(axes2); // Output: { x: 10, y: 20 }
