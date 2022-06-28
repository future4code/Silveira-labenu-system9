import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";


export default async function postTurma(req: Request, res: Response) {
    try {
        const nome = req.body.nome;

        type Turma = {
            nome: string
        };

        if (typeof nome !== "string") {
            throw new Error();
        };

        const turma: Turma = {
            nome
        };

        await connection(`Turma`).insert(turma);

        res.status(201).send("Turma criada com sucesso.");
    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
        res.status(400).send("Ocorreu um erro.");
    };
};