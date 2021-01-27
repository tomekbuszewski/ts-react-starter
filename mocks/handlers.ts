import { rest } from "msw";

import { API_URL } from "@config/config";
import { USERS_ENDPOINT } from "@config/endpoints";

import users from "./users";

const usersSuccessHandler = rest.get(
  `${API_URL}/${USERS_ENDPOINT}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  },
);

const handlers = [usersSuccessHandler];

export { handlers, usersSuccessHandler };
