import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import Card from "react-bootstrap/Card";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import compasspic from "../Styles/compass.webp";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef1 = ref(database, "/Stn Readings/wind_dir");
const dataRef2 = ref(database, "/Stn Readings/wind_spd");

const GaugeChart = () => {
  const [rotationValue, setRotationValue] = useState(0);
  const [globalGaugeData, setGlobalGaugeData] = useState([]);

  useEffect(() => {
    const fetchData = (dataRef, setDataCallback) => {
      onValue(
        dataRef,
        (snapshot) => {
          const data = snapshot.val();
          setDataCallback(data);
        },
        (error) => {
          console.error("Error fetching data: ", error);
        }
      );
    };

    fetchData(dataRef1, setRotationValue);
    fetchData(dataRef2, setGlobalGaugeData);
  }, []); // The empty dependency array ensures this effect runs once on mount

  const style = {
    borderRadius: "90%",
    border: "4px solid blue",
    transform: `rotate(${rotationValue}deg)`,
    transition: "ease-in-out 900ms",
  };

  return (
    <>
      <br />
      <div className="container gridstyle" style={{ paddingLeft: "15px" }}>
        <Card className="boxstyle" style={{ borderRadius: "20px" }}>
          <center>
            <Card.Body>
              <Card.Title>Wind Speed in Kmph</Card.Title>
              <Chart
                width={200}
                height={200}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={[["Label", "Value"], ["", globalGaugeData]]}
                options={{
                  redFrom: 90,
                  redTo: 100,
                  yellowFrom: 75,
                  yellowTo: 90,
                  minorTicks: 5,
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </Card.Body>
          </center>
        </Card>
        <Card className="boxstyle" style={{ borderRadius: "20px" }}>
          <center>
            <Card.Body>
              <Card.Title>Wind Direction</Card.Title>
              <br />
              <div id="compass">
                <div id="arrow">
                  <img
                    className="arrowhead"
                    style={style}
                    width="100"
                    alt="arrowhead"
                    src={compasspic}
                  />
                  <br />
                  <span className="span">{rotationValue + "° North"}</span>
                </div>
              </div>
            </Card.Body>
          </center>
        </Card>
      </div>
      <br />
      <br />
    </>
  );
};

export default GaugeChart;
