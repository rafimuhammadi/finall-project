import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layout/Button";
import Card from "../layout/Card";
import style from "../../assets/css/AddTodo.module.css";
const AddTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [TitleIsValid, setTitleIsValid] = useState(true);
  const [description, setDescription] = useState("");
  const [DescriptionIsValid, setDescriptionIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const titleChangeHandler = (event: any) => {
    setTitle(event.target.value);
    setFormIsValid(
      event.target.value.trim() != "" && description.trim().length > 6
        ? true
        : false
    );
  };
  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value);
    setFormIsValid(event.target.value.trim().length > 6 ? true : false);
  };
  const validateTitleHandler = () => {
    setTitleIsValid(title.trim() != "");
  };

  const validateDescriptionHandler = () => {
    setDescriptionIsValid(description.trim().length > 6);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    try {
      const dataToPost = {
        fields: {
          title: title,
          description: description,
        },
      };
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/todoListTable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          body: JSON.stringify(dataToPost),
        }
      );
      if (!response.ok) {
        const message = `Error Occuard Please Check it:
                        ${response.status}`;
        throw new Error(message);
      }
      const result = await response.json();
      // setTitle("");
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };

  return (
    <Card className={style.TodoForm}>
      <form onSubmit={submitHandler}>
        <div
          className={`${style.control} ${
            TitleIsValid === false ? style.invalid : ""
          }`}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
            onBlur={validateTitleHandler}
          />
        </div>
        <div
          className={`${style.control} ${
            DescriptionIsValid === false ? style.invalid : ""
          }`}
        >
          <label htmlFor="description">Description</label>
          <input
            type="description"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
            onBlur={validateDescriptionHandler}
          />
        </div>
        <div className={style.actions}>
          <Button type="submit" className={style.btn} disabled={!formIsValid}>
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default AddTodo;
