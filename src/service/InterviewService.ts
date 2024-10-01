import ApiBase from "../server";
import { IUser } from "../models/IUser.ts";
import { IInterview } from "../models/IInterview.ts";
import { AxiosResponse } from "axios";

export class InterviewService {
    public static getAllInterViews(): Promise<AxiosResponse<IInterview[]>> {
        return ApiBase.get<IInterview[]>("/users");
    }

    public static getInterview(id): Promise<AxiosResponse<IInterview[]>> {
        return ApiBase.get<IInterview>(`/getUser/${id}`);
    }

    public static async interViewUpdate(id, userUpdatable: IInterview): Promise<AxiosResponse<IUser[]>> {
        return ApiBase.put<IUser[]>(`/userUpdate/${id}`, userUpdatable);
    }
}
