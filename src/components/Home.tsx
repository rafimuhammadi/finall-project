import { Fragment, useState } from "react";
import Card from "./layout/Card";
import style from "../../src/assets/css/TodoList.module.css";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import TodoList from "./todo/TodoList";
import SearchTodo from "./todo/SearchTodo";
const Home = () => {
  const [Searchdata, setdata] = useState([]);
  const [loader, setSearchingLoader] = useState(false);
  console.log(Searchdata);
  return (
    <Fragment>
      <Card className={style.TodoList}>
        <SearchTodo searchResult={setdata} onSetLoader={setSearchingLoader} />
      </Card>
      <Card className={style.TodoList}>
        <Button type="submit" className={style.btn}>
          <Link to="add-todo" className={style.addButton}>
            Add New
          </Link>
        </Button>
        <hr />
        <TodoList searchData={Searchdata} loader={loader} />
      </Card>
    </Fragment>
  );
};
export default Home;
