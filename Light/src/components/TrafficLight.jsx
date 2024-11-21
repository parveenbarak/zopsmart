import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        let timer;

        if (color === "green") {
            timer = setTimeout(() => setColor("yellow"), 3000); 
        } else if (color === "yellow") {
            timer = setTimeout(() => setColor("red"), 2000); 
        } else if (color === "red") {
            timer = setTimeout(() => setColor("yellow-again"), 5000); 
        } else if (color === "yellow-again") {
            timer = setTimeout(() => setColor("green"), 2000); 
        }

        return () => clearTimeout(timer); 
    }, [color]);

    return (
        <div className="traffic-light-container">
      
            <div className="support-rod" />

      
            <div className="traffic-light-box">
                <div className={`light-bulb ${color === "green" ? "green" : "dark-green"}`} />
                <div className={`light-bulb ${color.includes("yellow") ? "yellow" : "dark-yellow"}`} />
                <div className={`light-bulb ${color === "red" ? "red" : "dark-red"}`} />
            </div>
        </div>
    );
};

export default TrafficLight;
