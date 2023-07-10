export class RegisterResponse {
    menssage: string;
    id: number;

    constructor({ message, id }: {message: string, id: number}) {
        this.menssage = message;
        this.id = id;
    }
}