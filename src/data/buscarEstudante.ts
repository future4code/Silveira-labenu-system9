import { estudanteInput } from "../model/typeEstudante";
import { connection } from "./BaseDataBase";


export default async function buscarEstudante(nome: string) {
 
  const resultado = await connection("Estudante").select("id","nome","email",  "data_nasc", "turma_id").where({nome});
  return resultado;
}
