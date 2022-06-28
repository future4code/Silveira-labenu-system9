import { estudanteInput } from "../model/typeEstudante";
import { connection } from "./BaseDataBase";

export default async function insertEstudante(estudante: estudanteInput) {
  const resultado = await connection("Estudante").insert({
    nome: estudante.nome,
    email: estudante.email,
    data_nasc: estudante.data_nasc,
    turma_id: estudante.turma_id,
  });
  return resultado;
}
