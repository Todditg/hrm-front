import { ReactElement, useContext, useEffect, useMemo } from "react";
import { VacancyContainer } from "./style.ts";
import { StoreContext } from "../../main.tsx";
import { Button, H, ITheme } from "@quark-uilib/components";
import { observer } from "mobx-react-lite";
import { Sidebar } from "../../components/Sidebar";
import { useTheme } from "styled-components";
import { Table } from "@greenatom/table";
import { IVacancies } from "../../models/IVacancies.ts";
import { useNavigate } from "react-router-dom";

export const Vacancies = observer((): ReactElement => {
  const { store } = useContext(StoreContext);

  const theme = useTheme() as ITheme;

  const navigate = useNavigate();

  useEffect(() => {
    store.getVacancies();
  }, []);

  const handleVacancyClick = (vacancyId: IVacancies["_id"]) => {
    navigate(`/vacancy/${vacancyId}`); // Переход на страницу вакансии
  };

  const columns = useMemo(
    () => [
      { field: "name", title: "Наименование вакансии" },
      { field: "pos", title: "Должность" },
      { field: "descriptionRequirements", title: "Требования" },
      { field: "descriptionResponsibilities", title: "Обязанности" },
      { field: "descriptionConditions", title: "Условия работы" },
      { field: "hrManagers", title: "Кадровая служба" },
      { field: "skills", title: "Навыки" },
      { field: "interviewHistory", title: "История собеседований" },
      { field: "salary", title: "Зарплата" },
      { field: "experience", title: "Опыт работы" },
      {
        field: "_id",
        title: "Действия",
        cellRenderer: ({ data }) => (
          <Button
            viewType="link"
            size="s"
            onClick={() => handleVacancyClick(data._id)}
          >
            Открыть
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        width: "100%",
        overflow: "auto",
        borderRadius: "16px",
      }}
    >
      <VacancyContainer>
        <Table columns={columns} rowData={store.vacancies} />
      </VacancyContainer>
      <Button viewType="secondary" onClick={() => navigate("/newVacancy")}>
        Добавить новую вакансию
      </Button>
    </div>
  );
});
