import { app } from "./app";
import createDocentes from "./endpoints/createDocentes";
import getDocentes from "./endpoints/getDocentes";
import putDocentes from "./endpoints/putDocentes";

app.post("/docente", createDocentes)

app.get("/docente", getDocentes)

app.put("/docente/:id", putDocentes)