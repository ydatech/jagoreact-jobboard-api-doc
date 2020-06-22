import React from "react";
// RedDoc
import { RedocStandalone } from "redoc";
// OAS 3.0
import openapi from "./openapi.json";

export default function App() {
  return <RedocStandalone spec={openapi} />;
}
