import { RouteProps } from "react-router-dom";
import { Home } from "@pages/Home";
import { About } from "@pages/About";

export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};

export const about: RouteProps = {
  path: ROUTES.ABOUT,
  component: About,
};
