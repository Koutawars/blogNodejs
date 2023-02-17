export class LoginResponse {
    user: any;
    token: string;
    constructor({ user, token }: any) {
        this.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name
        };
        this.token = token;
    }

}