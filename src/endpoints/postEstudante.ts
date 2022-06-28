import { Request, Response } from "express";
import insertEstudante from "../data/insertEstudante";
import { estudanteInput } from "../model/typeEstudante";

export default async function postEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id }: estudanteInput = req.body;
    if (!nome || !email || !data_nasc) {
      res.statusCode = 401;
      throw new Error("Precisa preencher todos os campos!");
    }
    if (!email.includes("@") || !email.includes(".com")) {
      res.statusCode = 401;
      throw new Error("O campo do email deve conter um '@' e um '.com'");
    }
    const novoEstudante: estudanteInput = {
      nome,
      email,
      data_nasc,
      turma_id,
    };
    await insertEstudante(novoEstudante);
    
    
    res.status(201).send({ message: "Criado com sucesso!" });
  } catch (error: any) {
    console.log(error)
    res.status(500).send({ message: "Erro ao criar de estudante!" });
  }
}
