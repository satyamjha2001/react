import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;
const AppleCounter = () => {
  
  const leftClickHandler = () => {
    if (leftAppleCount < 10) {
      leftAppleCount++;
      rightAppleCount--;
      root.render(<AppleCounter />);
    }
  };
  const rightClickHandler = () => {
    if (rightAppleCount < 10) {
      rightAppleCount++;
      leftAppleCount--;
      console.log(rightAppleCount);
      root.render(<AppleCounter />);
    }
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName={"left arrow"}
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName={"right arrow"}
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button
          onClick={() => {
            root.render(<AppleCounter />);
          }}
        >
          Re - Render
        </button>
      </p>
    </>
  );
};

export default AppleCounter;
