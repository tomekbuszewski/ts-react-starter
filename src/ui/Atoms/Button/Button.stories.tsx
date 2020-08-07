import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Button } from "./";

export const Normal = () => <Button>{text("Example text", "Hello")}</Button>;
export const Inverted = () => (
  <Button invert>{text("Example text", "Hello")}</Button>
);

export default {
  component: Button,
  title: "Atoms/Button",
};
