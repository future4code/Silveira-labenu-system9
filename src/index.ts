import { app } from "./app";
import postEstudante from "./endpoints/postEstudante";
import getEstudante from "./endpoints/getEstudante";
import putEstudante from "./endpoints/putEstudante";

app.get("/estudante", getEstudante);
app.post("/estudante", postEstudante);
app.put("/estudante", putEstudante);
