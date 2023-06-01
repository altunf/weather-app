import React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { useWeatherContext } from "@/context";

import LinearProgress from "@mui/joy/LinearProgress";
import NavigationIcon from "@mui/icons-material/Navigation";

import { raleway500, raleway700, raleway400 } from "@/styles/fonts";
import "./style.css";

export const HighlightCard = ({ title }: any) => {
  const { fiveDays }: any = useWeatherContext();

  const wind = (
    <>
      <Typography>
        <span className={`${raleway700.className} measure-value`}>
          {fiveDays[0]?.wind.speed}
        </span>
        <span className={`${raleway500.className} measure-type`}> mph</span>
      </Typography>
      <div className="navigation">
        <div className="circle">
          <div style={{ rotate: `${fiveDays[0]?.wind.deg}deg` }}>
            <NavigationIcon fontSize="small" />
          </div>
        </div>
        <span className={`${raleway500.className} wsw`}>WSW</span>
      </div>
    </>
  );

  const humidity = (
    <>
      <Typography sx={{ color: "white" }}>
        <span className={`${raleway700.className} measure-value`}>
          {fiveDays[0]?.main?.humidity}
        </span>
        <span className={`${raleway400.className} measure-type`}>%</span>
      </Typography>
      <div className={`${raleway700.className} range`}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div>
        <LinearProgress
          determinate
          value={fiveDays[0]?.main?.humidity}
          className="progress"
        />
      </div>
      <div className={`${raleway700.className} percent`}>
        <span>%</span>
      </div>
    </>
  );

  const visibility = (
    <Typography>
      <span className={`${raleway700.className} measure-value`}>
        {Math.round(fiveDays[0]?.visibility * 0.000621371192)}{" "}
      </span>
      <span className={`${raleway700.className} measure-type`}>miles</span>
    </Typography>
  );
  const pressure = (
    <Typography>
      <span className={`${raleway700.className} measure-value`}>
        {fiveDays[0]?.main?.pressure}
      </span>
      <span className={`${raleway700.className} measure-type`}> mb</span>
    </Typography>
  );

  return (
    <Card
      sx={{ backgroundColor: "#1e213a", color: "#E7E7EB" }}
      className="highlight-card"
    >
      <Typography className={`title`}>{title}</Typography>
      {title === "Wind status" && wind}
      {title === "Humidity" && humidity}
      {title === "Visibility" && visibility}
      {title === "Air Pressure" && pressure}
    </Card>
  );
};
