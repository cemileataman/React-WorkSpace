import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";

function Todo({todo,onRemoveTodo}) {
    const {id,content}=todo;
    const removeTodo =()=>{
      onRemoveTodo(id);
    }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: "10px",
        marginTop:'6px'
      }}
    >
      <div>{content}</div>
      <div>
        <IoMdRemoveCircle className="todo-icons" onClick={onRemoveTodo} />
        <FaEdit className="todo-icons" />
      </div>
    </div>
  )
}

export default Todo;
