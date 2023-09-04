import { useState } from "react";
import Todo from "./components/Todo/Todo";

const App = () => {
  // active buttons
  const onClick = (index) => {
    setBtnActive(index);
  };

  // mark the list
  const onMark = (id, index) => {
    const upatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isDone: "Done" } : item
    );
    localStorage.setItem("todos", JSON.stringify(upatedTodo));
    setMark(index);
    setTodo(upatedTodo);
  };

  // undo mark list
  const onRedo = (id, index) => {
    setMark(index);
    const upatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isDone: "Doing" } : item
    );
    localStorage.setItem("todos", JSON.stringify(upatedTodo));
    setTodo(upatedTodo);
  };

  // edit list active or not
  const onEdit = (title, id) => {
    setEdit(!isEdit);
  };

  // edit the list on click
  const onSubEdit = (title, id) => {
    if (!title || !title.trim()) return;
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, title: title } : item
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(updatedTodos);
    setPop(!isPop);
  };

  // delete the list we want to delete
  const onDelete = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(updatedTodos);
  };

  // submit form to create todo list
  const onSubmit = (value) => {
    if (!value || !value.trim()) return;
    const localTodos = [
      ...todo,
      { id: todo.length + 1, title: value, isDone: "Doing" },
    ];
    localStorage.setItem("todos", JSON.stringify(localTodos));
    setTodo(localTodos);
  };

  // filter todo lis
  const onFilter = (title) => {
    title === "All Todo" ? setFiltered("") : setFiltered(title);
  };

  // state for list todo

  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // filter state
  const [filtered, setFiltered] = useState("");
  const setFilter = (value) => {
    setFiltered(value);
  };
  const todoFilter =
    filtered === "Done" || filtered === "Doing"
      ? todo.filter((li) => li.isDone == filtered)
      : filtered !== "Done" || filtered !== "Doing"
      ? todo.filter((li) =>
          li.title.toLowerCase().includes(filtered.toLowerCase())
        )
      : todo;

  // state management
  const btnTitle = ["All Todo", "Doing", "Done"];
  const [btnActive, setBtnActive] = useState(0);
  const [isMark, setMark] = useState(-1);
  const [isEdit, setEdit] = useState(true);
  const [isPop, setPop] = useState(false);

  return (
    <main className="app">
      <Todo
        btnActive={btnActive}
        btnTitle={btnTitle}
        onClick={onClick}
        todo={todoFilter}
        onFilter={onFilter}
        onSubmit={onSubmit}
        onDelete={onDelete}
        isMark={isMark}
        onMark={onMark}
        onEdit={onEdit}
        isEdit={isEdit}
        onRedo={onRedo}
        onSubEdit={onSubEdit}
        isPop={isPop}
        setPop={() => setPop(!isPop)}
        setFilter={setFilter}
      />
    </main>
  );
};

export default App;
