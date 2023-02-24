import { useState } from "react";
import style from "../../assets/css/AddTodo.module.css";
import Button from "../layout/Button";

const SearchTodo = (props: any) => {
  const [title, setTitle] = useState("");
  const [TitleIsValid, setTitleIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [loader, setLoader] = useState(false);
  const titleChangeHandler = (event: any) => {
    setTitle(event.target.value);
    setFormIsValid(event.target.value.trim() != "" ? true : false);
  };
  const validateTitleHandler = () => {
    setTitleIsValid(title.trim() != "");
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${
          process.env.REACT_APP_AIRTABLE_BASE_ID
        }/todoListTable?filterByFormula={title}='${title.trim()}'`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      if (!response.ok) {
        const message = `Error Occuard Please Check it:
                        ${response.status}`;
        throw new Error(message);
      }
      const result = await response.json();
      props.searchResult(result.records);
      props.onSetLoader(false);
      setLoader(false);
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${style.control} ${
          TitleIsValid === false ? style.invalid : ""
        }`}
      >
        <label htmlFor="title">Search By Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          onBlur={validateTitleHandler}
        />
        &nbsp;
        <Button type="submit" className={style.btn} disabled={!formIsValid}>
          {loader ? "Please Wait..." : "Search"}
        </Button>
      </div>
    </form>
  );
};
export default SearchTodo;
