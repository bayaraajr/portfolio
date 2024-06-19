import { useFrame, useLoader } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { useSphere } from "@react-three/cannon";
import { Mesh } from "three";

export interface BasketballProps {}

const Basketball: FC<BasketballProps> = (props) => {
    const materials: any = useLoader(MTLLoader, "/basketball.mtl");
    const object: any = useLoader(OBJLoader, "/basketball.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    // const [meshRef] = useSphere(
    //     () => ({
    //         onCollide: (e) => {
    //             // const ping = new Audio("/bounce.wav");
    //             // ping.currentTime = 0;
    //             // ping.play();
    //         },
    //         args: [0.5],
    //         mass: 0.2,
    //         position: [0, 0, 0],
    //         velocity: [0, 10, 0],
    //         rotation: [1, 1, 1],
    //     }),
    //     useRef<Mesh>(null),
    // );

    return null;
    // <primitive castShadow ref={meshRef} object={object} />;
};
export default Basketball;
