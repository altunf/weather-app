"use client";

import { Temperature } from "@/components/temperature-buttons";
import { Days } from "@/containers/days-container";
import { Highlights } from "@/containers/highlights-container";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Temperature />
      <Days />
      <Highlights />
    </div>
  );
}
