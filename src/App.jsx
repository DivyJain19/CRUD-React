import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Display from "./components/Display";
const arr = [
  {
    name: "Divy",
    email: "divy.jain.19@gmail.com",
    DOB: "19/12/2001",
    id: 1,
    edit: false,
  },
  {
    name: "xxx",
    email: "xxx@gmail.com",
    DOB: "19/12/2001",
    id: 2,
    edit: false,
  },
  {
    name: "yyy",
    email: "yyy@gmail.com",
    DOB: "11/11/2011",
    id: 3,
    edit: false,
  },
];
function App() {
  function deleteItem(id) {
    let arr = [...list];
    arr.forEach((item) => {
      if (item.id === id) {
        arr.splice(arr.indexOf(item), 1);
      }
    });
    setList(arr);
  }
  function editItem(id) {
    let arr = [...list];
    arr.forEach((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
      }
    });
    setList(arr);
  }
  function handleChange(id, val, name) {
    // console.log(id);
    // console.log(val);
    // console.log(name);
    let arr = [...list];
    arr.forEach((item) => {
      if (item.id === id) {
        item[name] = val;
      }
    });
    setList(arr);
  }
  const [list, setList] = useState(arr);
  return (
    <Display
      deleteItem={deleteItem}
      editItem={editItem}
      list={list}
      changeItem={handleChange}
    />
  );
}

export default App;
