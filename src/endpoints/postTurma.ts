import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";


export default async function postTurma(req: Request, res: Response) {
    try {
        const { nome, modulo } = req.body

        type Turma = {
            nome: string,
            modulo: string,
        }

        if (typeof nome !== "string" || typeof modulo !== "string") {
            throw new Error();
        }

        const turma: Turma = {
            nome,
            modulo
        }

        await connection(`Turma`).insert(turma)

        res.status(201).send("Turma criada com sucesso.")
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        res.status(400).send("Ocorreu um erro.")
    }
}