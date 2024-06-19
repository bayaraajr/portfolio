import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Aegis: FC<MeshProps> = (props) => {
    const object = useLoader(GLTFLoader, "/aegis.glb");
    const meshRef = useRef<Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta;
        }
    });
    return <primitive ref={meshRef} object={object.scene} {...props} />;
};

export default Aegis;
