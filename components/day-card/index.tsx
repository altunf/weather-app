"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { raleway500 } from "@/styles/fonts";
import { useWeatherContext } from "@/context";

import "./style.css";

export default function DayCard({ day }: any) {
  const { tempConverter, dateConverter }: any = useWeatherContext();

  const convert = dateConverter(day.dt_txt);
  const today = Number(Date().toString().slice(8, 10));
  const tomorrow = today + 1 === Number(convert.date.slice(7, 10));

  let weather;

  switch (day.weather[0].description) {
    case "light rain":
      weather = "LightRain";
      break;
    case "heavy rain":
      weather = "HeavyRain";
      break;
    case "moderate rain":
      weather = "HeavyRain";
      break;
    case "light cloud":
      weather = "LightCloud";
      break;
    case "few clouds":
      weather = "LightCloud";
      break;
    case "heavy cloud":
      weather = "HeavyCloud";
      break;
    case "overcast clouds":
      weather = "HeavyCloud";
      break;
    case "scattered clouds":
      weather = "BrokenClouds";
      break;
    case "broken clouds":
      weather = "BrokenClouds";
      break;
    default:
      weather = day.weather[0].main;
      break;
  }

  return (
    <Card
      sx={{ backgroundColor: "#1e213a", color: "#E7E7EB" }}
      className="day-card"
    >
      <Typography className={`${raleway500.className} day-date`}>
        {tomorrow ? "Tomorrow" : convert.view}
      </Typography>
      <Image
        src={`/${weather}.png`}
        width={70}
        height={62}
        alt={day.weather[0].description}
      />
      <Box className={`${raleway500.className} min-max-temp`}>
        <span style={{ color: "#E7E7EB" }}>
          {tempConverter(day.main.temp_max)}
        </span>
        <span style={{ color: "#A09FB1" }}>
          {tempConverter(day.main.temp_min)}
        </span>
      </Box>
    </Card>
  );
}
