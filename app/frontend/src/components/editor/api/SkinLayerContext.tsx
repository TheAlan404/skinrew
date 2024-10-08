import React from "react";
import { SkinLayer } from "../../../types/types";
import { noop } from "@mantine/core";

export type ISkinLayerContext = {
    layer: SkinLayer;
    setLabel: (label: string) => void;
};

export const SkinLayerContext = React.createContext<ISkinLayerContext>({
    layer: {
        data: new ImageData(64, 64),
        label: "",
    },
    setLabel: noop,
});
