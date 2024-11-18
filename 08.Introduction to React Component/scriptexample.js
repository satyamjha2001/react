import { createRoot } from "react-dom/client";

import "./style.css";
import React from "react";

const root = createRoot(document.querySelector("#root"));

//react component is a function which returns some jsx. this is actual definition.

function Card(props) {
  console.log(props);

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

//latest version of react component

// root.render(
//   <Card
//     title="iphone 13 pro"
//     image="https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
//     price={1099.99}
//     brand="apple"
//     category=""
//   />
// );
//version 1

// fetch("https://dummyjson.com/products?limit=50&skip=77")
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data);
//     root.render(
//       <div className="container">
//         {data.products.map((product) => {
//           return Card({
//             key: product.id,
//             image: product.thumbnail,
//             title: product.title,
//             price: product.price,
//             brand: product.brand,
//             category: product.category,
//           });
//         })}
//       </div>
//     );
//   });

//react component is a react element which have type functions and that function returns a react element.

//version 2

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,  //type function
//   ref: null,
//   props: {
//     key: 1,
//     image: 'https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png',
//     title: 'iphone 13 pro',
//     price: 1099.99,
//     brand: 'apple',
//     category: '',
//   },
// });

//version 3
//agar niche key hai to hume card function me key leke key set karne ki jarurat nahi hai
// root.render(
//   React.createElement(Card, {
//     key: 1,
//     image:
//       "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
//     title: "iphone 13 pro",
//     price: 1099.99,
//     brand: "apple",
//     category: "",
//   })
// );

// console.log(
//   React.createElement(Card, {
//     key: 1,
//     image:
//       "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
//     title: "iphone 13 pro",
//     price: 1099.99,
//     brand: "apple",
//     category: "",
//   })
// );
