import { PlaneProps, usePlane } from "@react-three/cannon";

import { useRef } from "react";
import { Group, Mesh } from "three";

export default function ContactGround(props: PlaneProps) {
    const [ref] = usePlane(() => ({ material: "concrete", type: "Dynamic", ...props }), useRef<Group>(null));

    return (
        <group ref={ref}>
            <mesh receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#303030" />
            </mesh>
        </group>
    );
}
