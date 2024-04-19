import React from "react";
import "./Service.css";
import Button from "../../../components/Button/Button";

const Service = ({
para,
highlitedText,
backgroundImage,

}) => {

  if (backgroundImage === "Web-dev") {
    backgroundImage = "indser-web-dev";
  }
  if (backgroundImage === "hosting") {
    backgroundImage = "indser-hosting";
  }
  if (backgroundImage === "brandingLogo") {
    backgroundImage = "indser-brandingLogo";
  }
  if (backgroundImage === "webMaintain") {
    backgroundImage = "indser-webMaintain";
  }
  if (backgroundImage === "remSup") {
    backgroundImage = "indser-remSup";
  }
  if (backgroundImage === "clRep") {
    backgroundImage = "indser-clRep";
  }
  if (backgroundImage === "cuSer") {
    backgroundImage = "indser-cuSer";
  }
  if (backgroundImage === "cvRem") {
    backgroundImage = "indser-cvRem";
  };

  console.log(highlitedText);

  // Paragraph processing mechanism
  const processText = (para, highlightedText) => {
    const paragraphs = para.split('\n'); // Split the paragraph into an array of lines
    console.log(paragraphs);
    console.log(highlightedText);
    
    const styledParagraphs = []; // Create an empty array to store the lines that need to be styled
  
    paragraphs.forEach((parag, index) => {
      let impStyle = 'normal-text';
      if (parag.includes(highlightedText)) {
        impStyle = 'highlighted-text';
      }
      styledParagraphs.push(<p key={index} className={impStyle}>{parag}</p>);
    });
  
    return styledParagraphs; // Return the array of styled paragraphs
  };
  
  return (
    <div className="indser-main">
      <div className="indser-content">
        <div className={`indser-img ${backgroundImage}`}></div>
        <div className="indser-cta">
          <div className="indser-description">
          {processText(para, highlitedText)}
          </div>
          <div className="indser-button">
            <Button className="indser-button" text={"Contact Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
