import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  const cardDetails = [
    {
      Name: "Name1",
      img: "https://i.ibb.co/0v0Bx8b/Our-Team.png",
      designation: "Designation1",
      description: "desc1",
    },
    {
      Name: "Name2",
      img: "https://i.ibb.co/0v0Bx8b/Our-Team.png",
      designation: "Designation2",
      description: "desc2",
    },
    {
      Name: "Name3",
      img: "https://i.ibb.co/0v0Bx8b/Our-Team.png",
      designation: "Designation3",
      description: "desc3",
    },
    {
      Name: "Name4",
      img: "https://i.ibb.co/0v0Bx8b/Our-Team.png",
      designation: "Designation4",
      description: "desc4",
    },
  ];
  return (
    

    <div className="about-ot-mdiv">
        <div className="about-ot-header">
            <h2>Our team</h2>
            <div className="about-card-line"></div>
        </div>
        
      <div className="about-ot-card-container">
          {cardDetails.map((cardDetail) => (
            <div className="about-ot-card">
              <img
                src="https://i.ibb.co/0v0Bx8b/Our-Team.png"
                alt="Our Team"
                border="0"
              />
              <div className="about-ot-mainDetails">
                <h4>{cardDetail.Name}</h4>
                <p>{cardDetail.designation}</p>
              </div>
              <p>{cardDetail.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurTeam;
