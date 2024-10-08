import React from "react";

export type ToolType = "brush";

export type IToolContext = {
    currentTool: ToolType;
};

export const ToolContext = React.createContext<IToolContext>({
    currentTool: "brush",
});
