const root = ReactDOM.createRoot(document.querySelector("#root"));
const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces."), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
  style: {
    backgroundColor: "#521",
    maxWidth: 250,
    borderRadius: 20,
    padding: 16
  }
}), /*#__PURE__*/React.createElement("p", null, "If we pass array then we have to write key but if only one element in child then we don't have to pass keys.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Enter your username: "), /*#__PURE__*/React.createElement("input", {
  id: "username",
  placeholder: "Enter your username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Enter your password: "), /*#__PURE__*/React.createElement("input", {
  type: "password",
  id: "password",
  placeholder: "Enter your password"
})))));
const user = 'satyam';
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user);
root.render(container);