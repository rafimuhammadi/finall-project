import react from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import AddTodo from "../components/todo/AddTodo";
import EditTodo from "../components/todo/EditTodo";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="add-todo" element={<AddTodo />} />
        <Route path="edit-todo/:id" element={<EditTodo />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
