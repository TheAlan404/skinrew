import { AspectRatio } from "@mantine/core";
import React, { useEffect, useState } from "react";

export const BitmapView = ({
    bitmap,
    onInput,
}: {
    bitmap: ImageData;
    onInput?: (x: number, y: number) => void;
}) => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (!ctx) return;
        ctx.putImageData(bitmap, 0, 0);
    }, [ctx, bitmap]);

    const handleInputDown = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        if (!ctx) return;
        const { left, top, width, height } = ctx.canvas.getBoundingClientRect();
        const x = Math.floor(((clientX - left) / width) * bitmap.width);
        const y = Math.floor(((clientY - top) / height) * bitmap.height);
        onInput?.(x, y);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        e.preventDefault();
        if (e.buttons === 1) handleInputDown(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) =>
        handleInputDown(e);

    const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
        if (e.touches.length !== 1) return;
        handleInputDown(e.touches[0]);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
        if (e.touches.length !== 1) return;
        handleInputDown(e.touches[0]);
    };

    return (
        <AspectRatio h="100%" mx="auto">
            <canvas
                width={bitmap.width}
                height={bitmap.height}
                style={{
                    width: "100%",
                    height: "100%",
                    imageRendering: "pixelated",
                }}
                ref={(el) => {
                    setCtx(el?.getContext("2d") ?? null);
                }}

                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
            />
        </AspectRatio>
    )
};
