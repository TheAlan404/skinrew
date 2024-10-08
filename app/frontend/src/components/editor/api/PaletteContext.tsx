import React from "react";

export type Palette = {

};

export type IPaletteContext = {
    primaryColor: string;
};

export const PaletteContext = React.createContext<IPaletteContext>({
    primaryColor: "#ffffffff",
});
