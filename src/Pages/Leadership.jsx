import React from "react";
import "../App.css";

const Leadership = () => {
  const leaders = [
    { name: "Marianna Verlage", title: "President", image: "src/img/mariana.jpeg" },
    { name: "Caitlin Lewis", title: "Vice President", image: "src/img/caitlin.jpeg" },
    { name: "DanThuy Chu", title: "Treasurer", image: "src/img/dan tiu.jpeg" },
    { name: "Nadia Eldeib", title: "Secretary", image: "src/img/nadia.jpeg" },
    { name: "Diana Powell", title: "Membership Chair", image: "src/img/diana.jpeg" },
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
