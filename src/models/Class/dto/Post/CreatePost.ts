import IDto from "../../../interfaces/utils/IDto";
import { ErrorHttp } from "../../ErrorHttp";

export class CreatePostDto implements IDto {
    title: string;
    content: string;
    updatedAt: Date;
    constructor({ title, content }: any) {
        this.title = title;
        this.content = content;
        this.updatedAt = new Date();
    }
    verify(): void {
        if (!this.title) {
            throw new ErrorHttp(400, "Title is required");
        }
    }
}