import React from "react";
import { render } from "react-dom";
import { Application } from "./containers/Application";

const rootId = "#app";
const root = document.querySelector(rootId);

if (root) {
  render(<Application />, root);
} else {
  console.error(`No element ${rootId} found in the document!`);
}
