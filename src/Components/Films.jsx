import React, { useEffect, useState } from "react";
//useEffect

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
];

export const FilmNames = () => {
  const [info, setInfo] = useState([]);
  const handleFilmNameChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div>
      <ul>
        {info.map((ele) => (
          <li key={ele.id}>
            {ele.name}-
            <input
              type={"checkbox"}
              checked={ele.watched}
              onChange={handleFilmNameChange}
            />
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//1 :
