import { Fragment } from "react";
import Card from "./layout/Card";
import style from "../../src/assets/css/TodoList.module.css";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import TodoList from "./todo/TodoList";
import SearchTodo from "./todo/SearchTodo";
const Home = () => {
  return (
    <Fragment>
      <Card className={style.TodoList}>
        <SearchTodo />
      </Card>
      <Card className={style.TodoList}>
        <Button type="submit" className={style.btn}>
          <Link to="add-todo" className={style.addButton}>
            Add New
          </Link>
        </Button>
        <hr />
        <TodoList />
      </Card>
    </Fragment>
  );
};
export default Home;
