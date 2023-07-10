import bcrypt from 'bcrypt';

export type IEncrypt = {
    compare: (password: string, hash: string) => Promise<boolean>;
    hash: (password: string) => Promise<string>;
}

export const encrypt: IEncrypt = {
    compare: async (password: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(password, hash);
    },
    hash: async (password: string): Promise<string> => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
}