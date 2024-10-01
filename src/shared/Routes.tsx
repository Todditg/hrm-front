import { ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../modules/Home";
import Login from "../modules/Login";
import AuthForm from "../modules/Auth";
import { HRPanel } from "../modules/HRExpert";
import { Vacancies } from "../modules/Vacancies";
import { VacancyPage } from "../modules/VacancyPage";
import { VacancyCreation } from "../modules/VacancyCreation";
import {Calendar} from "../modules/Calendar";
import {InterviewsHistory} from "../modules/InterviewsHistory";

export const Routes = (): ReactElement => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signIn", element: <Login /> },
    { path: "/signUp", element: <AuthForm /> },
    { path: "/vacancies", element: <Vacancies /> },
    { path: "/vacancy/:id", element: <VacancyPage /> },
    { path: "/newVacancy", element: <VacancyCreation /> },
    {path: "/planing", element: <Calendar />},
    { path: "/interviews", element: <InterviewsHistory />}
  ]);

  return routes;
};
