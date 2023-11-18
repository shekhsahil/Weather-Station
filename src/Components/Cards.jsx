// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "../Styles/Cards.css";

function Cards() {
  const firebaseConfig = {
    apiKey: "AIzaSyDFNu7k2SNE2HcZpSbJy3cVVkkdcQHK4oY",
    authDomain: "weatherstn-65af6.firebaseapp.com",
    databaseURL:
      "https://weatherstn-65af6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weatherstn-65af6",
    storageBucket: "weatherstn-65af6.appspot.com",
    messagingSenderId: "1092272869109",
    appId: "1:1092272869109:web:1f4c5bcde29a6ea12c7fbc",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dataRef1 = ref(database, "/Stn Readings/int_temp");
  const dataRef2 = ref(database, "/Stn Readings/ext_temp");
  const dataRef3 = ref(database, "/Stn Readings/hum");
  const dataRef4 = ref(database, "/Stn Readings/light_int");
  const dataRef5 = ref(database, "/Stn Readings/batt");
  const dataRef6 = ref(database, "/Stn Readings/UV");
  const dataRef7 = ref(database, "/Stn Readings/atm_pres");


  // internal temperature
  onValue(
    dataRef1,
    (snapshot) => {
      const data1 = snapshot.val();
      // const data1f = ((data1 * 9) / 5 + 32).toFixed(2);
      // const data1k = (data1 + 273.15).toFixed(2);

      document.getElementById("it").innerHTML = data1 + "°C";
      // document.getElementById("itf").innerHTML = data1f + "°F";
      // document.getElementById("itk").innerHTML = data1k + "K";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  //external temperature
  onValue(
    dataRef2,
    (snapshot) => {
      const data1 = snapshot.val();
      // const data1f = ((data1 * 9) / 5 + 32).toFixed(2);
      // const data1k = (data1 + 273.15).toFixed(2);

      document.getElementById("et").innerHTML = data1 + "°C";
      // document.getElementById("etf").innerHTML = data1f + "°F";
      // document.getElementById("etk").innerHTML = data1k + "K";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  //humidity
  onValue(
    dataRef3,
    (snapshot) => {
      const data = snapshot.val();
      document.getElementById("hum").innerHTML = data + "%";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  // Light Intensity
  onValue(
    dataRef4,
    (snapshot) => {
      const data = snapshot.val();
      document.getElementById("light").innerHTML = data + " Lux";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  // battery
  onValue(
    dataRef5,
    (snapshot) => {
      const data = snapshot.val();
      document.getElementById("battery").innerHTML = data + "Volts";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  //UV
  onValue(
    dataRef6,
    (snapshot) => {
      const data = snapshot.val();
      document.getElementById("uv").innerHTML = data + " Nm";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  // atmospheric pressure
  onValue(
    dataRef7,
    (snapshot) => {
      const data = snapshot.val();
      document.getElementById("atm").innerHTML = data +" atm";
    },
    (error) => {
      console.error("Error fetching Internal Temperrature : ", error);
    }
  );
  return (
    <>
      <div className=" gridstyle container">
        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Internal Temperature 🌡️</Card.Title>
                <Card.Text>
                  <span id="it" className="span"></span>
                  {/* <hr />
                  <span id="itf" className="span"></span>
                  <hr />
                  <span id="itk" className="span"></span>
                  <br /> */}
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>External Temperature 🌡️</Card.Title>
                <Card.Text>
                  <span id="et" className="span">
                    {" "}
                    100°C
                  </span>
                  {/* <hr /> */}
                  {/* <span id="etf" className="span">
                    100°F
                  </span>
                  <hr />
                  <span id="etk" className="span">
                    100K
                  </span> */}
                  <br />
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Humidity 💧</Card.Title>

                <Card.Text>
                  <span id="hum" className="span"></span>
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Battery 🔋</Card.Title>
                <Card.Text>
                  <span id="battery" className="span"></span>
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Atmospheric Pressure 🏧</Card.Title>
                <Card.Text>
                <span id="atm"  className="span"></span>

                </Card.Text>
               
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>UV ☀️</Card.Title>
                <Card.Text>
                  <span id="uv" className="span"></span>
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Light Intensity 💡</Card.Title>
                <Card.Text>
                  <span id="light" className="span"></span>
                </Card.Text>
              </Card.Body>
            </center>
          </Card>
        </div>

        {/* <div className="container">
          <Card className="boxstyle" style={{ borderRadius: "20px" }}>
            <center>
              <Card.Body>
                <Card.Title>Wind Speed 🍃</Card.Title>
                <Card.Text>
                  <p>Internal :</p>
                  <br />
                  <p>External :</p>
                </Card.Text>
                <Button variant="success" style={{ borderRadius: "18px" }}>
                  Go somewhere
                </Button>
              </Card.Body>
            </center>
          </Card>
        </div> */}
      </div>
    </>
  );
}

export default Cards;
