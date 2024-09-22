import { createRoot } from "react-dom/client";

const h1 = <h1>Hello World!!!</h1>;
const root = createRoot(document.querySelector("#root"));
root.render(h1);
console.log(`Hello World!!!`);

//this helps in hot reloading matlab isse website me change direct hoga bina refresh kare.
// if(module.hot) {
//     module.hot.accept();
// }