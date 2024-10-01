import {ICandidate} from "./ICandidate.ts";
import {IVacancies} from "./IVacancies.ts";

export interface IInterview {
    date: Date;
    candidate: ICandidate;
    vacancy: IVacancies
}
