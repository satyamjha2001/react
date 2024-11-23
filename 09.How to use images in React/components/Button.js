const Button = ({imageUrl, buttonName}) => {
  return (
    <button title={buttonName}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
}

export default Button;