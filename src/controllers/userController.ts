import bcrypt from 'bcrypt';
import { User } from '../models/models.ts';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const generateJwt = (id: number, email: string, role: string) => {
    return jwt.sign({id, email, role}, 'secretKey', {expiresIn: '24h'})
}
    

class UserController {

    async registration(req: Request, res: Response): Promise<Response> {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return res.json({ message: 'Invalid email or password' });
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return res.json({ message: 'User is already registered' });
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user: any = await User.create({email, role, password: hashPassword});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req: Request, res: Response): Promise<Response> {
        const {email, password} = req.body;
        console.log(req)
        const user: any = await User.findOne({where: {email}})
        if (!user) {
            return res.json({ message: 'User not found' });
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return res.json({ message: 'Invalid password' });
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req: Request, res: Response, next: NextFunction): Promise<Response> {
        //@ts-ignore
        const token = generateJwt(req.user.id, req.yser.email, req.user.role);
        return res.json({token});
    }

    
  }
  
  export default new UserController();