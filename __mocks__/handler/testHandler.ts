import { rest } from "msw";

const testHandler = () =>
  rest.post("http://localhost/test", async (req, res, ctx) => {
    return res(
      ctx.json({
        message: "test Success",
      }),
      ctx.status(200)
    );
  });

export default testHandler;
