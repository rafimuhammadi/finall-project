import { useState, useEffect } from "react";
import style from "../../assets/css/TodoList.module.css";
import Loader from "../../assets/images/loader.gif";
import { todoType } from "../__model";
import TodoListItem from "./TodoListItem";
const TodoList = (props: any) => {
  const [data, setdata] = useState([]);
  const [loader, setLoader] = useState(true);
  const searchResult = props.searchData;
  const getDataFromAPI = async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const result = await response.json();
      setdata(result.records);
      setLoader(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, [data]);

  const HandleRemove = async (recordsID: number) => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable/${recordsID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const message = `Error Occuard Please Check it:
                        ${response.status}`;
        throw new Error(message);
      }
      setLoader(false);
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };
  return (
    <>
      {loader ? (
        <div className={style.loader}>
          <img src={Loader} />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.length > 0
              ? searchResult.map((d: todoType, i: number) => {
                  return (
                    <TodoListItem
                      index={i}
                      key={d.id}
                      data={d}
                      id={d.id}
                      HandleRemove={HandleRemove}
                    />
                  );
                })
              : data.map((d: todoType, i) => {
                  return (
                    <TodoListItem
                      index={i}
                      key={d.id}
                      data={d}
                      id={d.id}
                      HandleRemove={HandleRemove}
                    />
                  );
                })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TodoList;
