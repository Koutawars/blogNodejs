export class RegisterResponse {
    menssage: string;
    id: number;

    constructor({ menssage, id }: any) {
        this.menssage = menssage;
        this.id = id;
    }
}