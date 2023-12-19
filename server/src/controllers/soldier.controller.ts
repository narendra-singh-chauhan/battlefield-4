import { Request, Response } from 'express';
import { accessories, assets, cookie, updates } from '../mock';

export const getSoldierAccessories = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: accessories,
        });
    } catch (error) {
        console.error('Error while getting the soldier accessories: ', error);
    }
};

export const getSoldierUpdates = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: updates,
        });
    } catch (error) {
        console.error('Error while getting the soldier updates: ', error);
    }
};

export const getSoldierAssets = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: assets,
        });
    } catch (error) {
        console.error('Error while getting the soldier assets: ', error);
    }
};

export const getSoldierCookie = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: cookie,
        });
    } catch (error) {
        console.error('Error while getting the soldier cookie: ', error);
    }
};