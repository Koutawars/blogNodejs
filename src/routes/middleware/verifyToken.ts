import { NextFunction, Request, Response } from "express";
import { tokenTool } from "../../utils/token";

// TODO: Using a controller instead directly as middleware
export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ mensaje: 'Token not provided' });
    }

    try {
        const payload = tokenTool.verify(token);
        req['user'] = payload;
        next();
    } catch (error) {
        return res.status(401).json({ mensaje: 'Invalid token' });
    }
}
