const Button = ({ imageUrl, clickHandler, buttonName }) => {
  // console.log(buttonName);
  
  return (
    <button className="button" title={buttonName} onClick={clickHandler}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;