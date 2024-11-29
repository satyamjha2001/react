import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState } from "react";

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const leftClickHandler = () => {
    if (leftAppleCount < 10) {
      setLeftAppleCount(leftAppleCount + 1);
      setRightAppleCount(rightAppleCount - 1);
    }
  };
  const rightClickHandler = () => {
    if (rightAppleCount < 10) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };

  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button
        clickHandler={leftClickHandler}
        imageUrl={LeftArrow}
      >
        left arrow
      </Button>
      <Button
        clickHandler={rightClickHandler}
        imageUrl={RightArrow}
        children={"right arrow"}
      >
      </Button>
      <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
    </section>
  );
};

export default AppleCounter;
