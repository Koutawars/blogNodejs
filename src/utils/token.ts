import jwt from 'jsonwebtoken';

export type IToken = {
    generate: (payload: any) => string;
    verify: (token: string) => any;
}

export const tokenTool: IToken = {
    generate: (payload: any): string => {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
    },
    verify: (token: string): any => {
        return jwt.verify(token, process.env.SECRET_KEY);
    }
}