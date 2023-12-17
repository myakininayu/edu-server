import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function(role: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next()
        }
    
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: 'Not authorized'});
            }
            const decoded: any = jwt.verify(token, 'secretKey');
            if (decoded.role !== role) {
                return res.status(403).json({message: "No access"});
            }
            //@ts-ignore
            req.user = decoded;
            next();
        } catch (e) {
            res.status(403).json({message: 'Not authorized'});
        }
         
    }
}