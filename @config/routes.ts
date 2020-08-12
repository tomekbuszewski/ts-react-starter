import loadable from "@loadable/component";

import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));
const About = loadable(() => import("@pages/About"));
const Users = loadable(() => import("@pages/Users"));

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
