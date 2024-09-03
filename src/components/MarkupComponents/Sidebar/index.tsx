import {ReactElement, useState} from "react";
import {SideBarContainer} from "./style.ts";

export const Sidebar = (): ReactElement => {
    const [state, setState] = useState(null);

    return (
        <SideBarContainer>
            SIDEBAR
        </SideBarContainer>
    )
}