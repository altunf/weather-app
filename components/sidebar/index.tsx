"use client";
import React from "react";
import { useWeatherContext } from "@/context";
import { SearchDrawer } from "../search-drawer";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { raleway500, raleway600 } from "@/styles/fonts";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import "./style.css";

export const Sidebar = () => {
  const {
    openDrawer,
    setOpenDrawer,
    todayTemp,
    tempConverter,
    dateConverter,
  }: any = useWeatherContext();

  let today = dateConverter(todayTemp.today);

  let weather;
  switch (todayTemp.description) {
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
      weather = todayTemp.main;
      break;
  }

  return (
    <>
      {openDrawer ? (
        <SearchDrawer />
      ) : (
        <div className="sidebar">
          <div className="sidebar-button-icon">
            <button
              className={`${raleway500.className} sidebar-button`}
              onClick={() => setOpenDrawer(true)}
            >
              Search for places
            </button>
            <div className="gps-icon">
              <GpsFixedIcon />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Image
              className="cloud-bg"
              src="/cloud-background.png"
              width={472}
              height={376}
              alt="broken clouds"
            />

            <Image
              className="weather"
              src={`/${weather}.png`}
              width={200}
              height={186}
              alt="clouds"
            />
          </div>
          <div className="today-info">
            <div className={`${raleway500.className} today-temp`}>
              {tempConverter(todayTemp.temp, 80, "#6e707a")}
            </div>
            <div className={`${raleway600.className} today-weather`}>
              {todayTemp.weather}
            </div>
            <div className={`${raleway500.className} today-date`}>
              <span>Today</span> <span>•</span> {today.view}
            </div>
            <div className={`${raleway500.className} city`}>
              <LocationOnIcon /> {todayTemp.city}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
