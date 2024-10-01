import ApiBase from "../server";
import { IUser } from "../models/IUser.ts";
import { IUserUpdatable } from "../models/IUserUpdatable.ts";
import { AxiosResponse } from "axios";

export class UserService {
    public static getUsers(): Promise<AxiosResponse<IUser[]>> {
        return ApiBase.get<IUser[]>("/users");
    }

    public static getUser(id): Promise<AxiosResponse<IUser[]>> {
        return ApiBase.get<IUser[]>(`/getUser/${id}`);
    }

    public static async userUpdate(id, userUpdatable: IUserUpdatable): Promise<AxiosResponse<IUser[]>> {
        return ApiBase.put<IUser[]>(`/userUpdate/${id}`, userUpdatable);
    }
}
