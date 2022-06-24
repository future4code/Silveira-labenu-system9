import { connection } from "./BaseDataBase";


export async function buscarDocentes() {
    const result = await connection("Docente")
    .select()
    return result
}