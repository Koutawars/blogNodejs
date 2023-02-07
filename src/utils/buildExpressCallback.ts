import { Controller } from "../models/types/Controller";
// import request from express and response
import { Request, Response } from "express";
import { IHttpRequest } from "../models/interfaces/IHttpRequest";

export const buildExpressCallback = (controller: Controller) => {
    return async (req: Request, res: Response) => {
		const httpRequest: Partial<IHttpRequest> = {
			body: req.body,
			params: req.params,
			query: req.query,
			headers: {
				Authorization: req.get("Authorization"),
                User: req.get("User"),
			},
		};

		const httpResponse = await controller(httpRequest);

		res.set(httpResponse.headers);
		res.type("json");
		res.status(httpResponse.status).send(httpResponse.body);
	};
}

