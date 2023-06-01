import React from "react";
import { HighlightCard } from "@/components/highlight-card";

import "./style.css";
const highlightTitles = [
  "Wind status",
  "Humidity",
  "Visibility",
  "Air Pressure",
];

export const Highlights = () => {
  return (
    <main className="highlights">
      {highlightTitles.map((item, index) => (
        <HighlightCard key={index} title={item} />
      ))}
    </main>
  );
};
