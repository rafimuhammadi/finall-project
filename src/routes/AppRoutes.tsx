import react from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import TodoList from "../components/todo/TodoList";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="todoList" element={<TodoList />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
