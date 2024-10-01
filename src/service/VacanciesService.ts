import ApiBase from "../server";
import { AxiosResponse } from "axios";
import { IVacancies } from "../models/IVacancies.ts";

export class VacanciesService {
  public static getVacancies(): Promise<AxiosResponse<IVacancies[]>> {
    return ApiBase.get<IVacancies[]>("/getVacancies");
  }

  public static createVacancy(
    vacancy: IVacancies
  ): Promise<AxiosResponse<IVacancies>> {
    return ApiBase.post<IVacancies>(`/createVacancy`, vacancy);
  }

  public static updateVacancy(
    id: string | undefined,
    formData: IVacancies
  ): Promise<AxiosResponse<IVacancies>> {
    return ApiBase.put(`/updateVacancy/${id}`, formData);
  }
}
