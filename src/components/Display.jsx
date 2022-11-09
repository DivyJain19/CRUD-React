import React, { useState, useRef } from "react";
import ListItem from "./ListItem";
import classes from "./Display.module.css";
const Display = (props) => {
  const [newData, setNewData] = useState(false);
  const name = useRef();
  const email = useRef();
  const dob = useRef();
  function handleDelete(id) {
    props.deleteItem(id);
  }
  function handleEdit(id) {
    props.editItem(id);
  }
  function handleChange(id, val, name) {
    props.changeItem(id, val, name);
  }
  function addNew() {
    setNewData((prevState) => !prevState);
  }
  function addDetails(e) {
    e.preventDefault();
    props.addItem(name.current.value, email.current.value, dob.current.value);
    setNewData((prevState) => !prevState);
  }

  return (
    <>
      {props.list.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          DOB={item.DOB}
          edit={item.edit}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleChange={handleChange}
        />
      ))}
      {newData && (
        <form onSubmit={addDetails} className={classes.list}>
          <input
            ref={name}
            required
            placeholder="Enter Name"
            type="text"
            name="name"
          />
          <input
            ref={email}
            required
            placeholder="Enter Email"
            type="email"
            name="email"
          />
          <input
            ref={dob}
            required
            placeholder="Enter DOB"
            type="date"
            name="DOB"
          />
          <div>
            <button>Save</button>
          </div>
        </form>
      )}
      <button onClick={addNew}>{newData ? "Cancel" : "Add New"}</button>
    </>
  );
};

export default Display;
