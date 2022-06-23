import { connection } from "./BaseDataBase";

export async function mudaTurmaDocentes(turma_id: number, id: number) {
  const result = await connection("Docente")
    .update({
      turma_id,
    })
    .where({ id });
    return result
}
