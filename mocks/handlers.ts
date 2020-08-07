import { rest } from "msw";
import users from "./users";

const usersSuccessHandler = rest.get(
  "https://test-endpoint.com/users",
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  },
);

const handlers = [usersSuccessHandler];

export { handlers, usersSuccessHandler };
