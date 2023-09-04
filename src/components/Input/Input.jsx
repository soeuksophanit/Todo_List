import { useRef } from "react";

const Input = ({ onSubmit, isEdit }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form className="form gap" onSubmit={handleSubmit}>
      <input
        type="text"
        className="btn border normal-title color-black"
        ref={inputRef}
      />
      <button type="submit" className="btn btn-primary normal-title">
        Add Todo
      </button>
    </form>
  );
};

export default Input;
