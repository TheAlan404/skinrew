import { useContext, useState } from "react";
import { BitmapView } from "./BitmapView";
import { PaletteContext } from "../api/PaletteContext";
import { ToolContext } from "../api/ToolContext";

export const BitmapEditor = () => {
    const [bitmap, setBitmap] = useState(new ImageData(64, 64));
    const { primaryColor } = useContext(PaletteContext);
    const { currentTool } = useContext(ToolContext);

    return (
        <BitmapView
            bitmap={bitmap}
            onInput={(x, y) => {
                if(currentTool == "brush") {
                    setBitmap((imageData) => {
                        let b = new ImageData(imageData.data, imageData.width, imageData.height);
    
                        let i = b.width * y + x;
    
                        b.data[(i*4)+0] = 255;
                        b.data[(i*4)+1] = 255;
                        b.data[(i*4)+2] = 255;
                        b.data[(i*4)+3] = 255;
    
                        return b;
                    });
                }
            }}
        />
    )
};
