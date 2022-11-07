import React from "react";
import ListItem from "./ListItem";
const Display = (props) => {
  function handleDelete(id) {
    props.deleteItem(id);
  }
  function handleEdit(id) {
    props.editItem(id);
  }
  function handleChange(id, val, name) {
    props.changeItem(id, val, name);
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
    </>
  );
};

export default Display;
