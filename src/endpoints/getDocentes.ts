import {Request, Response} from 'express';
import { buscarDocentes } from '../data/buscarDocentes';

export default async function getDocentes(req: Request, res:Response) {
    try {
        
        const pegaDocente = await buscarDocentes()
        res.status(200).send(pegaDocente)

    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}