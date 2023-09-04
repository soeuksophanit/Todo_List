import "./Button.css";
const Button = ({ title, onClick, btnActive, index, onFilter }) => {
  return (
    <button
      onClick={() => {
        onClick(index);
        onFilter(title);
      }}
      className={
        btnActive == index
          ? "btn btn-primary color-white normal-title"
          : "btn border color-black normal-title"
      }
    >
      {title}
    </button>
  );
};

export default Button;
