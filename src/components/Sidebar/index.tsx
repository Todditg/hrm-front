import { ReactElement } from "react";
import { SidebarContainer } from "./style.ts";
import { Button, H } from "@quark-uilib/components";
import { useNavigate } from "react-router-dom";
import { IconArrowRight } from "@quark-uilib/icons";

export const Sidebar = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Button
          viewType="ghost"
          onClick={() => navigate("/vacancies")}
          width="fit-content"
          trail={<IconArrowRight />}
        >
          <H type="libra">Вакансии</H>
        </Button>
        <IconArrowRight />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Button
          viewType="ghost"
          onClick={() => navigate("/planing")}
          width="fit-content"
          trail={<IconArrowRight />}
        >
          <H type="libra">Календарь</H>
        </Button>
        <IconArrowRight />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Button
          viewType="ghost"
          onClick={() => navigate("/interviews")}
          width="fit-content"
          trail={<IconArrowRight />}
        >
          <H type="libra">Интервью</H>
        </Button>
        <IconArrowRight />
      </div>
    </SidebarContainer>
  );
};
