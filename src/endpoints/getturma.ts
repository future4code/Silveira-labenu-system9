import { Request, Response } from "express";
import { connection } from "../data/BaseDataBase";


export default async function getTurma(req: Request, res: Response) {
    try {
        const result = await connection(`Turma`)
            .select("nome", "modulo")
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("User not found.")
    }
}