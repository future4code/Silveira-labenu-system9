import { Request, Response } from 'express';
import { mudaTurmaDocentes } from '../data/mudaTurmaDocentes';

export default async function putDocentes(req: Request, res: Response) {
    try {
        const id = req.params.id as any
        await mudaTurmaDocentes(req.body.turma_id, id)
        res.status(200).send("Docente trocou de turma.")
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
   
}
