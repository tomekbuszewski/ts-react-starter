import { RouteProps } from "react-router-dom";
import { Home } from "@pages/Home";
import { About } from "@pages/About";
import { Users } from "@pages/Users";

export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
  USERS = "/users",
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

export const users: RouteProps = {
  path: ROUTES.USERS,
  exact: true,
  component: Users,
};
