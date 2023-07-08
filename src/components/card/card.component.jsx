import { Component } from "react";
import "./card.styles.css";


const Card= ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?200x200`}
        alt={`monster ${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}


export default Card;
