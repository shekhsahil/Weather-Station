import Alert from "react-bootstrap/Alert";
import { useState } from "react";

function LinksExample() {
  const [variant, setvariant] = useState("success");
  const [message, setmessage] = useState(" Sensors Connected");
  return (
    <>
      <br />
      <Alert variant={variant} >
        <center>{message} <br />
      
        </center>
        
      </Alert>
        
     
    </>
  );
}

export default LinksExample;
