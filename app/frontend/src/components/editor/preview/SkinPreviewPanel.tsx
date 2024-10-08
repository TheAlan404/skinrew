import { Canvas } from "@react-three/fiber";
import { CameraControls, Sky } from "@react-three/drei";
import { Suspense } from "react";

export const SkinPreviewPanel = () => {
    return (
        <Canvas>
            <Sky sunPosition={[100, 100, 10]} />
            <ambientLight intensity={0.5} />
            <CameraControls
                makeDefault
            />
            <Suspense fallback={null}>
                
            </Suspense>
        </Canvas>
    )
}
