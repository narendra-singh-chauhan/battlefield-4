import { Request, Response } from 'express';

export const getSoldierTest = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Server is on development mode!'
        });
    } catch (error) {
        console.error('Error while getting the soldier test: ', error);
    }
};