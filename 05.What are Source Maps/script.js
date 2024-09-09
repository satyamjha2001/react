const root = ReactDOM.createRoot(document.querySelector("#root"));

const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces.</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
        style={{
          backgroundColor: "#521",
          maxWidth: 250,
          borderRadius: 20,
          padding: 16,
        }}
      />
      <p>
        If we pass array then we have to write key but if only one element in
        child then we don't have to pass keys.
      </p>
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Enter your username: </label>
          <input id="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
      </form>
    </section>
  </div>
);

const user = 'satyam';

const h2 = <h2>Hello {user}</h2>;
console.log(container);

root.render(container);
