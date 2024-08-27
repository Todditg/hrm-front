import { IUser } from "../User/IUser.ts";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
