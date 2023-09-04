import { useRef } from "react";
import "./FormEdit.css";

const FormEdit = ({ title, onSubEdit, id, closePop }) => {
  const editText = useRef(null);
  const handleEdit = (e) => {
    e.preventDefault();
    onSubEdit(editText.current.value, id);
    editText.current.value = "";
  };
  return (
    <section className="form-edit">
      <form onSubmit={handleEdit} className="form-edit-pop">
        <main className="form gap">
          <input
            type="text"
            ref={editText}
            defaultValue={title}
            autoFocus
            className="btn border normal-title color-black"
          />
          <section className="flex gap">
            <button type="submit" className="btn btn-primary normal-title">
              Edit
            </button>
            <button onClick={closePop} className="btn border normal-title">
              Cancel
            </button>
          </section>
        </main>
      </form>
    </section>
  );
};

export default FormEdit;
