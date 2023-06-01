"use client";
import React from "react";
import { useWeatherContext } from "@/context";
import { raleway500, raleway600 } from "@/styles/fonts";

import "./style.css";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, getWeather }: any = useWeatherContext();

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          className={`${raleway500.className} search-input`}
          type="text"
          placeholder="  search location"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={`${raleway600.className} search-button`}
        >
          Search
        </button>
      </form>
    </div>
  );
};
