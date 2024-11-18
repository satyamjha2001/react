import { createRoot } from "react-dom/client";

import "./style.css";
import React from "react";

const root = createRoot(document.querySelector("#root"));

//react component is a function which returns some jsx. this is actual definition.

function Card(props) {
  // console.log(props);

  const { image, title, price, brand, category } = props;

  if (brand === undefined) {
    brand = category;
  }
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <h2>{title}</h2>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  );
}

//use of latest react component in fetch

fetch("https://dummyjson.com/products?limit=50&skip=77")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              brand={product.brand}
              category={product.category}
            />
          );
        })}
      </div>
    );
  });
