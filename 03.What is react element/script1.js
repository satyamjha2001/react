//using vanilla Js

// const h2 = document.createElement('h2');

// h2.innerText = 'Hello JS';

// document.querySelector('#root').append(h2);

//using React Js

const root = ReactDOM.createRoot(document.querySelector("#root"));

const h2 = React.createElement('h2', {className: 'subheading', id: 'subtitle'}, "Hello React");

// root.render(h2);

// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     props: { className: "subheading", id: "subtitle", children: "Hello React" },
//     ref: null,
//     type: "h2"
// };

root.render({
  $$typeof: Symbol.for("react.element"),
  type: "h2",
  ref: null,
  props: {
    children: [
      {
        $$typeof: Symbol.for("react.element"),
        type: "b",
        ref: null,
        props: {
          children: "Hello React",
        },
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: "i",
        ref: null,
        props: {
          children: "Hello React",
        },
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: "span",
        ref: null,
        props: {
          children: "Hello React",
        },
      },
    ],
  },
});

console.dir(h2);
