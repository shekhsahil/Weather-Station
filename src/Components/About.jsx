import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function About() {
  
  const [show, setshow] = useState("none");
  const [variant, setvariant] = useState("primary");
  const [text, settext] = useState("About Us ");

  const display = {
    display: show,
  };

  const toggle = () => {
    if (show === "block") {
      setshow("none");
      setvariant("primary");
      settext("About Us ");
    } else {
      setshow("block");
      setvariant("danger");
      settext("Clear");
    }
  };
  return (
    <>
      <Button variant={variant} onClick={toggle} >
        {text}
      </Button>
      <p style={display} className="about">
        about
      </p>
    </>
  );
}

export default About;
