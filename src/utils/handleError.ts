import { ErrorHttp } from "../models/Class/ErrorHttp"

export const handleError = (error: any) => {
    if (error instanceof ErrorHttp) {
        return {
            body: {
                error: error.message
            },
            status: error.status
        }
    } else if (error instanceof Error) {
        console.log(error);
        return {
            body: {
                error: "Internal Server Error"
            },
            status: 500
        }
    }
}
