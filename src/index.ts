import { app } from "./app";
import createDocentes from "./endpoints/createDocentes";
import deleteTurma from "./endpoints/deleteTurma";
import editModulo from "./endpoints/editModulo";
import getDocentes from "./endpoints/getDocentes";
import getTurma from "./endpoints/getTurma";
import postTurma from "./endpoints/postTurma";
import putDocentes from "./endpoints/putDocentes";
import postEstudante from "./endpoints/postEstudante";
import getEstudante from "./endpoints/getEstudante";
import putEstudante from "./endpoints/putEstudante";

app.get("/estudante", getEstudante);
app.post("/estudante", postEstudante);
app.put("/estudante", putEstudante);

app.post("/turma", postTurma);
app.get("/turma", getTurma);
app.put("/turma/:id", editModulo);
app.delete("/turma/:id", deleteTurma);

app.post("/docente", createDocentes);
app.get("/docente", getDocentes);
app.put("/docente/:id", putDocentes);

