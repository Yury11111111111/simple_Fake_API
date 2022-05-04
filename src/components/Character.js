import React from "react";

const Character = (props) => {
  if (props.character.name !== "Not Found") {
    var construct = (
      <>
        <img src={props.character.image?.original} alt="Character_photo" />
        <div> {props.character.id} </div>
        <div>{props.character.name}</div>
      </>
    );
  }
  return <div>{construct}</div>;
};

export default Character;
