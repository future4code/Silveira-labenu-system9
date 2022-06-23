import { Docente } from "../types";
import { connection } from "./BaseDataBase";


export async function insertDocente(docente: Docente) {
  const result = await connection("Docente").insert({
    nome: docente.nome,
    email: docente.email,
    data_nasc: docente.data_nasc,
    turma_id: docente.turma_id
  });
  return result
}
