import { useState, useEffect } from "react";
import "./charStatus.css";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Slider } from "@mui/material";

const RPGCharacterSheet = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [hpValue, sethpValue] = useState("");
  const [mtcValue, setmtcValue] = useState("");

  useEffect(() => {
    const storedhpValue = localStorage.getItem("hpValue");
    const storedmtcValue = localStorage.getItem("mtcValue");
    const savedValue = localStorage.getItem("sliderValue");
    if (savedValue !== null) {
      setSliderValue(Number(savedValue));
    }
    if (storedhpValue) {
      sethpValue(storedhpValue);
    }

    if (storedmtcValue) {
      setmtcValue(storedmtcValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hpValue", hpValue);
    localStorage.setItem("mtcValue", mtcValue);
  }, [hpValue, mtcValue]);

  const handleHpChange = (event) => {
    sethpValue(event.target.value);
  };

  const handleMtcChange = (event) => {
    setmtcValue(event.target.value);
  };

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    localStorage.setItem("sliderValue", newValue);
  };

  const getSliderColor = () => {
    if (sliderValue <= 25) {
      return "red";
    } else if (sliderValue <= 50) {
      return "orange";
    } else if (sliderValue <= 75) {
      return "yellow";
    } else {
      return "green";
    }
  };



  

  return (
    <div className="char-status">
      <div className="mtc-hp">
        <div className="status">
          <MonitorHeartIcon style={{ color: "green", fontSize: "32px" }} />
          <label>
            HP
            <input
              type="number"
              value={hpValue}
              onChange={handleHpChange}
            />
          </label>
        </div>
        <div className="status">
          <ElectricBoltIcon
            style={{ color: "rgb(9, 53, 248)", fontSize: "32px" }}
          />
          <label>
            MTC
            <input
              type="number"
              value={mtcValue}
              onChange={handleMtcChange}
            />
          </label>
        </div>
      </div>
      <div className="psyco">
        <label><PsychologyIcon />Humanidade: <span>{sliderValue}%</span></label>
        <Slider
          value={sliderValue}
          min={0}
          step={1}
          max={100}
          onChange={handleSliderChange}
          defaultValue={100}
          size="small"
          color="secondary"
        />
        <div
          style={{
            height: "4px",
            backgroundColor: getSliderColor(),
            marginTop: "10px",
            borderRadius: "20px",
            width: `${sliderValue}%`,
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default RPGCharacterSheet;
