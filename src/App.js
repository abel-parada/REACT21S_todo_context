import React from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";
import { Provider } from "./components/store/todoStore";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
      <Footer />
    </Provider>
  );
};

export default App;
