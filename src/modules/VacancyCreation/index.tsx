import { ReactElement, useContext, useEffect, useState } from "react";
import { VacancyContainer } from "./style.ts";
import { useNavigate, useParams } from "react-router-dom";
import { IVacancies } from "../../models/IVacancies.ts";
import { StoreContext } from "../../main.tsx";
import { Select } from "@quark-uilib/components";
import { observer } from "mobx-react-lite";

export const VacancyCreation = observer((): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);

  const [vacancy, setVacancy] = useState<IVacancies>({
    name: "", // Наименование вакансии
    pos: "", // Должность
    descriptionRequirements: "", // Описание требований к кандидату
    descriptionResponsibilities: "", // Описание обязанностей
    descriptionConditions: "", // Описание предлагаемых условий работы
    hrManagers: [], // Сотрудники кадровой службы, ответственные за вакансию
    skills: [], // Список навыков с весами для оценки
    interviewHistory: [], // История проведения собеседований кандидатов
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVacancy((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HROptions = store.users.map((user) => ({
    label: user.firstName,
    value: user._id,
  }));

  console.log(store.users);

  const handleSave = () => {
    store.createVacancy(vacancy);
    navigate("/vacancies");
  };

  useEffect(() => {
    store.getAllUsers();
  }, []);

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
        <h1>{id ? "Редактировать вакансию" : "Добавить вакансию"}</h1>
        <form>
          <div>
            <label>
              Наименование вакансии:
              <input
                name="name"
                value={vacancy.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Должность:
              <input
                name="pos"
                value={vacancy.pos}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Требования:
              <textarea
                name="descriptionRequirements"
                value={vacancy.descriptionRequirements}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Обязанности:
              <textarea
                name="descriptionResponsibilities"
                value={vacancy.descriptionResponsibilities}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Условия:
              <textarea
                name="descriptionConditions"
                value={vacancy.descriptionConditions}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              HR менеджеры:
              <Select
                options={HROptions}
                name="hrManagers"
                value={vacancy.hrManagers}
                onChange={handleInputChange}
              />
            </label>
          </div>
          {/* Можно добавить поля для редактирования навыков и истории собеседований */}
          <button type="button" onClick={handleSave}>
            Сохранить
          </button>
        </form>
      </VacancyContainer>
    </div>
  );
});
