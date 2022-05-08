import { SuccessfulResult } from "@utils/result";
import { Request, Response } from "express";
import {
  getReasonPhrase, StatusCodes
} from 'http-status-codes';

export class UserController {
  public import(req: Request, res: Response): void {
    res.status(StatusCodes.OK)
      .json(new SuccessfulResult(
        true,
        getReasonPhrase(StatusCodes.OK),
        null)
      );
  }
}
