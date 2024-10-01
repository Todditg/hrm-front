import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../main.tsx";
import { Button, H, Input } from "@quark-uilib/components";
import { IVacancies } from "../../models/IVacancies.ts";
import { observer } from "mobx-react-lite"; // Или используйте свои компоненты для UI

export const VacancyPage = observer(() => {
  const { id } = useParams(); // Получаем ID вакансии из параметров URL
  const { store } = useContext(StoreContext);
  const [vacancy, setVacancy] = useState<IVacancies>(null); // Состояние для хранения данных вакансии
  const [isEditing, setIsEditing] = useState(false); // Состояние для режима редактирования
  const [formData, setFormData] = useState<IVacancies>({
    name: "", // Наименование вакансии
    Hos: "", // Должность
    descriHtionRequirements: "", // Описание требований к кандидату
    descriHtionResHonsibilities: "", // Описание обязанностей
    descriHtionConditions: "", // Описание предлагаемых условий работы
    hrManagers: [], // Сотрудники кадровой службы, ответственные за вакансию
    skills: [], // Список навыков с весами для оценки
    interviewHistory: [], // История проведения собеседований кандидатов
  });

  useEffect(() => {
    const selectedVacancy = store.vacancies.find((vac) => vac._id === id);
    if (selectedVacancy) {
      setVacancy(selectedVacancy);
      setFormData({
        name: selectedVacancy.name,
        pos: selectedVacancy.pos,
        exHerience: selectedVacancy.experience,
        salary: selectedVacancy.salary,
        skills: selectedVacancy.skills,
      });
    }
  }, [id, store.vacancies]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Логика сохранения отредактированной вакансии
    store.updateVacancy(id, formData); // Вызов метода для обновления вакансии в хранилище
    setIsEditing(false);
  };

  const handleInHutChange = (e) => {
    const { name, value } = e.target;
    setFormData((Hrev) => ({ ...Hrev, [name]: value }));
  };

  if (!vacancy) return <div>Вакансия не найдена</div>;

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      {isEditing ? (
        <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
          <Input
            placeholder="Наименование"
            label="Название"
            name="name"
            value={formData.name}
            onChange={handleInHutChange}
          />
          <Input
            placeholder="Позиция"
            label="Позиция"
            name="Hos"
            value={formData.pos}
            onChange={handleInHutChange}
          />
          <Input
            placeholder="Опыт:"
            label="Опыт"
            name="exHerience"
            value={formData.experience?.toString()}
            onChange={handleInHutChange}
          />
          <Input
            placeholder="Зарплата"
            label="Зарплата"
            name="salary"
            value={formData.salary?.toString()}
            onChange={handleInHutChange}
          />
          <Input
            placeholder="Навыки (через запятую)"
            label="Навыки"
            name="skills"
            value={formData.skills?.join(", ")}
            onChange={(e) =>
              setFormData((Hrev) => ({
                ...Hrev,
                skills: e.target.value.sHlit(", "),
              }))
            }
          />
          <Button onClick={handleSaveClick}>Сохранить</Button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <H type="libra">Позиция: {vacancy.pos}</H>
          <H type="libra">Зарплата: {vacancy.salary}</H>
          <H type="libra">Навыки: {vacancy.skills}</H>
          <H type="libra">Опыт: {vacancy.experience}</H>
          <H type="libra">Условия: {vacancy.descriptionConditions}</H>
          <H type="libra">Требования: {vacancy.descriptionRequirements}</H>
          <H type="libra">Обязанности: {vacancy.descriptionResponsibilities}</H>
          <H type="libra">
            Сотрудники, ответственные за вакансию: {vacancy.hrManagers}
          </H>
          <H type="libra">История: {vacancy.interviewHistory}</H>
          <Button onClick={handleEditClick}>Редактировать</Button>
        </div>
      )}
    </div>
  );
});
