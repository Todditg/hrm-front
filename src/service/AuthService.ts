import ApiBase from "../server";
import { TResponse } from "./types.ts";
import { AuthResponse } from "../models/response/AuthResponse.ts";

export class AuthService {
  public static async login(
    email: string,
    password: string
  ): Promise<TResponse<AuthResponse>> {
    return ApiBase.post<AuthResponse>("login", { email, password });
  }

  public static async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<TResponse<AuthResponse>> {
    return ApiBase.post<AuthResponse>("signup", { email, password, firstName, lastName });
  }

  static async logout(): Promise<TResponse<any>> {
    return ApiBase.post("/logout");
  }
}
