import { MeshProps, useLoader } from "@react-three/fiber";
import { FC } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Computer: FC<MeshProps> = (props) => {
    const object = useLoader(GLTFLoader, "/computer/scene.gltf");
    return <primitive object={object.scene} scale={0.1} />;
};

export default Computer;
