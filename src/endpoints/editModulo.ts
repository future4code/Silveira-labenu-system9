import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";


export default async function editModulo(req: Request, res: Response) {
    try {
        const modulo = req.body.modulo as number;

        if (modulo > 6) {
            throw new Error("");
        };

        await connection(`Turma`)
            .update({
                modulo: req.body.modulo
            })
            .where({ id: req.params.id });
        res.send("Modulo alterado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(400).send("Turma não encontrada.");
    };
};