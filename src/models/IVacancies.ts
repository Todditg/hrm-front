import {IUser} from "./IUser.ts";

export interface IVacancies {
    name: string; // Наименование вакансии
    pos?: string; // Должность
    descriptionRequirements?: string; // Описание требований к кандидату
    descriptionResponsibilities?: string; // Описание обязанностей
    descriptionConditions?: string; // Описание предлагаемых условий работы
    hrManagers?: IUser[]; // Сотрудники кадровой службы, ответственные за вакансию
    skills?: { name: string; weight: number }[]; // Список навыков с весами для оценки
    interviewHistory?: string[]; // История проведения собеседований кандидатов
    salary?: number; // Зарплата (опционально)
    experience?: number; // Опыт работы (опционально)
    _id?: string;
}
