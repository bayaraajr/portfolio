import { usePlane } from "@react-three/cannon";

import { useRef } from "react";
import { Mesh } from "three";

export default function Court() {
    const [ref] = usePlane(
        () => ({
            position: [0, 0, 0],
            rotation: [-Math.PI / 2, 0, 0],
            type: "Dynamic",
        }),
        useRef<Mesh>(null),
    );
    return <mesh ref={ref} receiveShadow castShadow />;
}
