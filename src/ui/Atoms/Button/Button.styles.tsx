/**
 * @author tomek
 * @since 2020-07-22 19:26:45
 */

import styled, { css } from "styled-components";
import { BaseProps as Props } from "./Button.types";

const StyledButton = styled.button<Props>`
  background: ${(props) => props.theme.colors.base};
  color: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.invert &&
    css`
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.base};
    `};
`;

export { StyledButton };
