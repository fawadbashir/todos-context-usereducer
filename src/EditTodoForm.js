import React, {useContext} from "react";
import {todoContext} from './context/todoContext'
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";


function EditTodoForm({ id, task, toggleEditForm, editTodo }) {
  const [value, handleChange, reset] = useInputState(task);
  const {dispatch} = useContext(todoContext)
  
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        
        dispatch({type :'EDIT', id, task : value})
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
