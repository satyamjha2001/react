const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces."
      ),
      React.createElement("img", {
        key: 2,
        src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
        style: {
          backgroundColor: "#246",
          maxWidth: 250,
          borderRadius: 20,
          padding: 16,
        },
      }),
      React.createElement(
        "p",
        { key: 3 },
        "If we pass array then we have to write key but if only one element in child then we don't have to pass keys."
      ),
    ]),
    React.createElement(
      "section",
      { key: 2 },
      React.createElement("form", {}, [
        React.createElement("div", { key: 1, className: "input-group" }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Enter your username: "
          ),
          React.createElement("input", {
            key: 2,
            id: "username",
            placeholder: "Enter your username",
          }),
        ]),
        React.createElement("div", { key: 2, className: "input-group" }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Enter your password: "
          ),
          React.createElement("input", {
            key: 2,
            type: "password",
            id: "password",
            placeholder: "Enter your password",
          }),
        ]),
      ])
    ),
  ]
);

root.render(container);
