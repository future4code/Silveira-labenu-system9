import {Request, Response} from "express";
import { insertDocente } from "../data/insertDocente";
import { Docente } from "../types";

export default async function createDocentes(req: Request, res: Response) {
    try {
        const {nome, email, data_nasc, turma_id}:Docente = req.body 

        if(!nome || !email || !data_nasc) {
            throw new Error("O nome, email e data_nasc devem ser passados.")
        }

        const docente: Docente = {
            nome,
            email,
            data_nasc,
            turma_id,
        }

        const novoDocente = await insertDocente(docente)
        res.status(200).send(novoDocente)


    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}