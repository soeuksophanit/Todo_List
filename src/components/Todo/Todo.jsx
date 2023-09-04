import { day, month } from "../../js/date";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import { Search } from "../Search/Search";
import Title from "../Title/Title";
import "./Todo.css";

const Todo = ({
  btnTitle,
  onClick,
  btnActive,
  todo,
  onFilter,
  onSubmit,
  onDelete,
  isMark,
  onMark,
  onEdit,
  isEdit,
  onRedo,
  onSubEdit,
  isPop,
  setPop,
  setFilter,
}) => {
  const today = new Date();

  return (
    <section id="todo-section" className="todo wrapper-todo">
      <section className="date flex">
        <Title
          isBig={true}
          title={today.getDate() + " " + month(today.getMonth())}
        />
        <Title isBig={false} title={day(today.getDay())} />
      </section>{" "}
      <Search setFilter={setFilter} />
      <main className="flex gap margin-y">
        {btnTitle.map((item, index) => (
          <Button
            key={item}
            onClick={() => onClick(index)}
            title={item}
            index={index}
            btnActive={btnActive}
            onFilter={() => onFilter(item)}
          />
        ))}
      </main>
      <List
        todo={todo}
        onDelete={onDelete}
        isMark={isMark}
        onMark={onMark}
        onEdit={onEdit}
        onRedo={onRedo}
        onSubEdit={onSubEdit}
        isPop={isPop}
        setPop={setPop}
      />
      <Input onSubmit={onSubmit} isEdit={isEdit} />
    </section>
  );
};

export default Todo;
