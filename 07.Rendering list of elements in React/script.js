import { createRoot } from "react-dom/client";

import "./style.css";

const root = createRoot(document.querySelector("#root"));

function Card(key, image, title, price, brand, category) {
  if (brand === undefined) {
    brand = category;
  }
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <h2>{title}</h2>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  );
}

fetch("https://dummyjson.com/products?limit=200&skip=10")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.thumbnail,
            product.title,
            product.price,
            product.brand,
            product.category
          );
        })}
      </div>
    );
  });
// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];
// console.log(Card());
