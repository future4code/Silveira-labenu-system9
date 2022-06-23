import { app } from "./app";
import createDocentes from "./endpoints/createDocentes";
import getDocentes from "./endpoints/getDocentes";
import getTurma from "./endpoints/getturma";
import postTurma from "./endpoints/postTurma";
import putDocentes from "./endpoints/putDocentes";

app.post("/turma", postTurma);
app.get("/turma", getTurma);

app.post("/docente", createDocentes);
app.get("/docente", getDocentes);
app.put("/docente/:id", putDocentes);