import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { Fragment, useState } from "react";
// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;
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
      console.log(rightAppleCount);
    }
  };
  const a = (
    <Fragment>
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
    </Fragment>
  );
  console.log(a);
  console.log(Fragment); //fragment is used to wrap more than react elements but not act as a parent block in html.
  
  return a;
};

export default AppleCounter;
