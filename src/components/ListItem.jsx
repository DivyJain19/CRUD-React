import React from "react";
import classes from "./ListItem.module.css";
const ListItem = (props) => {
  function deleteHandler() {
    props.handleDelete(props.id);
  }
  function editHandler() {
    console.log(props.id);
    props.handleEdit(props.id);
  }

  function editChangeHandler(e) {
    e.preventDefault();
    props.handleChange(props.id, e.target.value, e.target.name);
  }
  if (props.edit) {
    return (
      <div className={classes.list}>
        <input name="name" onChange={editChangeHandler} value={props.name} />
        <input name="email" onChange={editChangeHandler} value={props.email} />
        <input name="DOB" onChange={editChangeHandler} value={props.DOB} />
        <div>
          <button onClick={editHandler}>Save</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.list}>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.DOB}</h3>
        <div>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    );
  }
};

export default ListItem;
