import { IControllerResponse } from "../interfaces/IControllerResponse";
import { IHttpRequest } from "../interfaces/IHttpRequest";

export type Controller = (
	request: Partial<IHttpRequest>,
) => Promise<IControllerResponse>;