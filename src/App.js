import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Character from "./components/Character";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      characterFetch(i);
    }
  }, []);

  async function characterFetch(id) {
    fetch("https://api.tvmaze.com/characters/" + id)
      .then((response) => response.json())
      .then((json) =>
        setCharacters((lastcharacters) => [...lastcharacters, json])
      );
  }

  return (
    <div className="App">
      {characters.map((character) => {
        return <Character key={character.id} character={character}  />;
      })}
    </div>
  );
}

export default App;
