import React from "react";
import { useWeatherContext } from "@/context";
import "./style.css";

export const Temperature = () => {
  const { temperature, setTemperature }: any = useWeatherContext();

  const styleCelcius =
    temperature === "celcius" ? "celcius-active" : "temp-buttons";
  const styleFahrenheit =
    temperature === "fahrenheit" ? "fahrenheit-active" : "temp-buttons";

  return (
    <div className="temperature">
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          className={styleCelcius}
          onClick={() => {
            setTemperature("celcius");
          }}
        >
          °C
        </button>
        <button
          className={styleFahrenheit}
          onClick={() => {
            setTemperature("fahrenheit");
          }}
        >
          °F
        </button>
      </div>
    </div>
  );
};
