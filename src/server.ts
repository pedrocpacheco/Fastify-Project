import fastify from "fastify";

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get("/hello", () => {
    return "Pedro"
})