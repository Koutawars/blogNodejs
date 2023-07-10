import { IControllerResponse } from "../interfaces/utils/IControllerResponse";
import { IHttpRequest } from "../interfaces/utils/IHttpRequest";

export type Controller = (
	request: Partial<IHttpRequest>,
) => Promise<IControllerResponse>;