import React, { useEffect, useState } from "react";
//useEffect
import "../App.css";
import { HambergerIcon } from "../Icons/HambergerIcon";
import { AppHeader } from "./AppHeader";
//properties

const data = [
  {
    id: 1,
    name: "money heist",
    watched: true,
  },
  {
    id: 2,
    name: "Spider Man",
    watched: false,
  },
  {
    id: 3,
    name: "50 shades of grey",
    watched: true,
  },
  {
    id: 4,
    name: "Batman",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  {
    id: 5,
    name: "Batman2",
    watched: false,
  },
  
];
export const FilmNames = () => {
  const [info, setInfo] = useState([]);
  const [filmName, setFilmName] = useState("");
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleDelete = (id) => {
    const index = info.findIndex((ele) => ele.id == id);
    const confirm = window.confirm("Are You sure?");
    if (confirm) {
      info.splice(index, 1);
      setInfo([...info]);
    }

    // setInfo(info.filter((ele) => ele.id !== id));
  };

  const handleFilmNameChange = (e) => {
    const { value } = e.target;
    setFilmName(value);
  };

  const handleCheckBox = (e) => {
    setWatched(e.target.checked);
  };

  const handleAddFilm = () => {
    const data = {
      id: info.length + 1,
      name: filmName,
      watched,
    };
    setInfo([...info, data]);
    setFilmName("");
    setWatched(false);
  };

  return (
    <div className="container">
      <div className="div">
        <AppHeader />
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Watched</td>
            </tr>
          </thead>
          <tbody>
            {info.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>
                  <input type={"checkbox"} checked={ele.watched} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <label>FilmName : </label>
      <input value={filmName} onChange={handleFilmNameChange} />

      <label>Watched :</label>
      <input type={"checkbox"} checked={watched} onChange={handleCheckBox} />

      <button onClick={handleAddFilm}>Add Film</button>
    </div>
  );
};
//1 : data should flow one diretion parent to child
