import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";
import mudarEstudante from "../data/mudarEstudante";
import { estudanteInput } from "../model/typeEstudante";

export default async function putEstudante(req: Request, res: Response){
  try {
    const {id, turma_id} = req.body;
    if (!id) {
      res.statusCode = 401;
      throw new Error("Precisa inserir a turma para atualizar!");
    }
    await mudarEstudante(turma_id, id);

    res.status(201).send({ message: "Atualizado com sucesso!" });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
