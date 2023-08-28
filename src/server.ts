import fastify from "fastify";
import { knex } from "./db";

const app = fastify();

app.get("/hello", async () => {
  const tables = await knex("sqlite_schema").select("*");
  console.log(tables);
});

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server Running!"));
