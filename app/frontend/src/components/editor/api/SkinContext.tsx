import React from "react";
import { Skin } from "../../../types/types";

export type ISkinContext = {
    skin: Skin;
};

export const SkinContext = React.createContext<ISkinContext>({
    skin: {
        layers: [],
    },
});
