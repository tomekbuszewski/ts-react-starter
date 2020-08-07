/**
 * @author tomek
 * @since 2020-07-22 19:26:45
 */

import * as React from "react";

import { StyledButton } from "./Button.styles";
import { BaseProps as Props } from "./Button.types";

const Button: React.FunctionComponent<Props> = (props) => (
  <StyledButton invert={props.invert}>{props.children}</StyledButton>
);

export { Button };
