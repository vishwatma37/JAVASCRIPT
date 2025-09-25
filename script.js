// Topics in our Advanced JavaScript.
// Event Propagation (event bubbling and event capturing)
// Higher Order Function
// Callback Function
// Closures & function Currying(we will see after Async JS section)
// Callback Hell
// Fetch API
// Promises
// Async-Await
// Error Handling in JS

// Event Propagation (event bubbling and event capturing)
// event propagation -- top to down
// event Bubbling --down to top
// Event Propagation - event Propagation refers  to the process of how events
// progpagate or travel throught the DOM (Document Object Model ) hierarchy-
//     In javaScript , there are two phases  of event propagation capturing phase
//     and bubbling phase.

const callOuter = (event) => {
  console.table([
    {
      Description: "I'm the outer one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
};

const callMiddle = (event) => {
  console.table([
    {
      Description: "I'am the Middle one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
};

const callInner = (event) => {
  console.table([
    {
      Description: "I'am the inner one",
      Target: event.target,
      CurrentTarget: event.currentTarget,
    },
  ]);
//   event.stopPropagation();
};

// document.getElementById("outer").addEventListener("click", callOuter);
// document.getElementById("middle").addEventListener("click", callMiddle);
// document.getElementById("inner").addEventListener("click", callInner);

document.getElementById("outer").addEventListener("click", callOuter,true);
document.getElementById("middle").addEventListener("click", callMiddle,true);
document.getElementById("inner").addEventListener("click", callInner,true);
