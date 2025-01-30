import React from "react";
import "../App.css";
import mariana from "../img/mariana.jpeg";
import caitlin from "../img/caitlin.jpeg";
import dantiu from "../img/dantiu.jpeg";
import nadia from "../img/nadia.jpeg";
import diana from "../img/diana.jpeg";

const Leadership = () => {
  const leaders = [
    { name: "Marianna Verlage", title: "President", image: mariana },
    { name: "Caitlin Lewis", title: "Vice President", image: caitlin },
    { name: "DanThuy Chu", title: "Treasurer", image: dantiu },
    { name: "Nadia Eldeib", title: "Secretary", image: nadia},
    { name: "Diana Powell", title: "Membership Chair", image: diana },
  ];

  return (
    <div className="leader-container">
      <div className="leader-image"></div>
      <div className="image-text3">
        <h1>LEADERSHIP</h1>
      </div>
      <div className="title">
        <h2>Executive Board</h2>
      </div>
      <div className="leaders-wrapper">
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div className="leader-box" key={index}>
              <img src={leader.image} alt={leader.name} className="leader-img" />
              <h3>{leader.name}</h3>
              <p>{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
