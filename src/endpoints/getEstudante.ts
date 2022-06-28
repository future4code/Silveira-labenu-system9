import { Request, Response } from "express";
import buscarEstudante from "../data/buscarEstudante";
import { estudanteInput } from "../model/typeEstudante";

export default async function getEstudante(req: Request, res: Response) {
  try {
    const nome = req.body.nome
    if (!nome) {
      res.statusCode = 401;
      throw new Error("Precisa inserir um nome!");
    }
    if (nome !== nome) {
      res.statusCode = 400;
      throw new Error("Estudante não encontrado!");
    }
    console.log("nome: ", nome);
    
    const pegaEstudante = await buscarEstudante(nome);
    res.status(200).send(pegaEstudante);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}
