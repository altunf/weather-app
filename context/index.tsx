"use client";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext({});

export const WeatherContextProvider = ({ children }: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Ankara");
  const [temperature, setTemperature] = useState("celcius");
  const [fiveDays, setFiveDays] = useState([]);
  const [todayTemp, setTodayTemp] = useState([]);
  //For Celsius = metric , for Fahrenheit = imperial
  const apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&APPID=${process.env.customKey}`;

  const getWeather = async () => {
    const res = await fetch(`${apiCall}`);
    const myData = await res.json();

    let todayData: any = {
      description: myData.list[0].weather[0].description,
      weather: myData.list[0].weather[0].main,
      temp: myData.list[0].main.temp,
      city: myData.city.name,
      today: myData.list[0].dt_txt,
    };

    setTodayTemp(todayData);

    let daysData: any = [];
    for (let i = 4; i <= 36; i += 8) {
      daysData.push(myData.list[i]);
    }
    setFiveDays(daysData);
  };

  const tempConverter = (props: number, size: number, color: any) => {
    let tempStyle = {
      fontSize: `${size}px`,
      color: `${color}`,
    };
    if (temperature === "celcius") {
      return (
        <>
          {Math.round(props - 275.15)}
          <span style={tempStyle}>°C</span>
        </>
      );
    }
    return (
      <>
        {Math.round((props * 9) / 5 - 459.67)} <span style={tempStyle}>°F</span>{" "}
      </>
    );
  };

  const dateConverter = (props: any) => {
    let date = new Date(
      props?.slice(0, 4), // year
      props?.slice(5, 7) - 1, // month
      props?.slice(8, 10) // day
    ).toString();

    let dateViewFormat = `
    ${date.slice(0, 3)},
    ${date.slice(7, 10)} 
    ${date.slice(4, 7)}`;

    return { view: dateViewFormat, date: date };
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        searchTerm,
        setSearchTerm,
        getWeather,
        fiveDays,
        todayTemp,
        temperature,
        setTemperature,
        tempConverter,
        dateConverter,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
