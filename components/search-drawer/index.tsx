"use client";
import React from "react";
import { useWeatherContext } from "@/context";
import { SearchBar } from "../search-bar";
import { raleway500 } from "@/styles/fonts";
import CloseIcon from "@mui/icons-material/Close";

import "./style.css";

export const SearchDrawer = () => {
  const { setOpenDrawer, getWeather, setSearchTerm }: any = useWeatherContext();

  return (
    <div className="search-drawer">
      <div>
        <div className="close-icon" onClick={() => setOpenDrawer(false)}>
          <CloseIcon />
        </div>

        <SearchBar />
      </div>

      {["London", "Barcelona", "Long Beach"].map((item, index) => (
        <button
          key={index}
          className={`${raleway500.className} place-button`}
          onClick={() => {
            setSearchTerm(item);
            getWeather();
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
