"use client";
import React from "react";
import DayCard from "@/components/day-card";
import { useWeatherContext } from "@/context";
import "./style.css";

export const Days = () => {
  const { fiveDays }: any = useWeatherContext();

  return (
    <main className="days">
      {fiveDays.map((day: any, index: number) => (
        <DayCard day={day} key={index} />
      ))}
    </main>
  );
};
