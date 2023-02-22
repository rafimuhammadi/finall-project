import Button from "../layout/Button";
const TodoListItem = ({ index, data, id, HandleRemove }: any) => {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td> {data.fields.title}</td>
      <td> {data.fields.description}</td>
      <td>
        <Button onClick={() => HandleRemove(id)} className={"button"}>
          X
        </Button>
      </td>
    </tr>
  );
};
export default TodoListItem;
