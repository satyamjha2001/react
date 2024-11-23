import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
const AppleCounter = () => {
  return (
    <section>
      <Button imageUrl={LeftArrow}/>
      <Button imageUrl={RightArrow}/>
    </section>
  );
};

export default AppleCounter;
