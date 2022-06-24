import { estudanteInput } from "../model/typeEstudante";
import { connection } from "./BaseDataBase";

export default async function mudarEstudante(turma_id: number, id: number) {
  const resultado = await connection("Estudante")
    .update({
      turma_id,
    })
    .where({ id });
  return resultado;
}
