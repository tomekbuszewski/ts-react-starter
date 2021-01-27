import { Button } from "./";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <Button>{text("Example text", "Hello")}</Button>;
export const Inverted = () => (
  <Button invert>{text("Example text", "Hello")}</Button>
);

export default {
  component: Button,
  title: "Atoms/Button",
};
