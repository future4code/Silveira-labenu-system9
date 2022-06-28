import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";


export default async function deleteTurma(req: Request, res: Response) {
    try {
        const deletedRows = await connection(`Turma`)
            .delete()
            .where({
                id: req.params.id
            })

        if (deletedRows === 0) {
            throw new Error()
        }

        res.send('Turma deletada com sucesso.');
    } catch (error) {
        console.log(error);
        res.status(400).send("Erro");
    };
};