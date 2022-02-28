import React, {useState, useContext} from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

import {NotesContext} from "../store/todoStore"

const AddTodo = () => {

  const [todo,setTodo] = useState({title:'',task:''})
  const ctx = useContext(NotesContext);

  const changeHandler = (event) => {
    const {name,value} = event.target;

    setTodo((prevState) => ({
      ...prevState, 
      [name]:value
    }));
    
    // console.log(todo);
  }

  const addHandler = (event) =>{
    event.preventDefault();
    console.log('does this work?');
    ctx.addTodoItem(todo);
  }

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={changeHandler}/>
      </div>
      <div>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" name="task" onChange={changeHandler}/>
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
