// // console.log(window)

// // console.log(React);

// const h1 = document.createElement("h1");
// h1.textContent = "i am real dom";
// document.body.append(h1);

// const rh1 = React.createElement(
//   "h1",
//   { className: "React" },
//   React.createElement("span", null, "i am under h1"),
// );

// const realDOMElem = document.querySelector('#root');

// let rootofElem = ReactDOM.createRoot(realDOMElem)

// console.log(rh1);

// rootofElem.render(rh1)

import { a, sum } from "./main.js";

let ans = sum(10, 20);

console.log(ans);

const RealDOMElem = document.querySelector("#root");

const reactDiv = React.createElement(
  "div",
  null,
  [
    React.createElement("h1", {}, React.createElement("span", {}, "i m span")),
    React.createElement("h2", {}, React.createElement("span", {}, "i m span in h2"))
  ]
);

let renderDiv = ReactDOM.createRoot(RealDOMElem);
renderDiv.render(reactDiv);
