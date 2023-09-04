import { useState } from "react";
import FormEdit from "../FormEdit/FormEdit";
import "./List.css";

const List = ({
  todo,
  onDelete,
  isMark,
  onMark,
  onEdit,
  onRedo,
  onSubEdit,
  isPop,
  setPop,
}) => {
  const [popTitle, setPopEdit] = useState("");
  const [popId, setPopId] = useState(null);
  const popEdit = (title, id) => {
    setPopEdit(title);
    setPopId(id);
    console.log(title, id);
  };

  return (
    <ul className="todo-items margin-y">
      {todo.map((item, index) => (
        <li
          onClick={() => onEdit(item.title, item.id)}
          key={item.id}
          className={
            item.isDone === "Done"
              ? "flex space-between align-center is-done"
              : "flex space-between align-center"
          }
        >
          <p className="normal-title white-color">{item.title}</p>
          <section className="wrap-icon flex gap center-x-y">
            <i
              onClick={() => {
                setPop(!isPop);
                popEdit(item.title, item.id);
              }}
              className="fa-solid fa-pen-to-square"
            ></i>
            {item.isDone == "Doing" && (
              <i
                onClick={() => onMark(item.id, index)}
                className="fa-solid fa-square-check "
              ></i>
            )}
            {item.isDone == "Done" && (
              <i
                onClick={() => onRedo(item.id, index)}
                className="fa-solid fa-rotate-right"
              ></i>
            )}
            <i
              onClick={() => onDelete(item.id)}
              className="fa-solid fa-delete-left "
            ></i>
          </section>
          {isPop && (
            <FormEdit
              title={popTitle}
              id={popId}
              closePop={() => setPop(!isPop)}
              onSubEdit={onSubEdit}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
