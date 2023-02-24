import { Link } from "react-router-dom";
import Button from "../layout/Button";
const TodoListItem = ({ index, data, id, HandleRemove }: any) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td> {data.fields.title}</td>
      <td> {data.fields.description}</td>
      <td>
        <Button onClick={() => HandleRemove(id)} className={"button"}>
          X
        </Button>
        <Button className={"button"}>
          <Link to={`edit-todo/${id}`} className={"link"}>
            Edit
          </Link>
        </Button>
      </td>
    </tr>
  );
};
export default TodoListItem;
