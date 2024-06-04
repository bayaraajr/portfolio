import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { useSphere } from "@react-three/cannon";
import { Mesh } from "three";

const StaticBasketball: FC<MeshProps> = (props) => {
    const materials: any = useLoader(MTLLoader, "/basketball.mtl");
    const object: any = useLoader(OBJLoader, "/basketball.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    const meshRef = useRef<Mesh>(null);
    // const [meshRef] = useSphere(
    //     () => ({
    //         onCollide: (e) => {
    //             // const ping = new Audio("/bounce.wav");
    //             // ping.currentTime = 0;
    //             // ping.play();
    //         },
    //         args: [0.5],
    //         mass: .2,
    //         position: [0, 0, 0],
    //         velocity: [0, 10, 0],
    //         rotation: [1, 1, 1],
    //     }),
    //     useRef<Mesh>(null),
    // );

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta;
            meshRef.current.rotation.y += delta;
            meshRef.current.rotation.z += delta;
        }
    });
    return <primitive castShadow {...props} ref={meshRef} object={object} />;
};
export default StaticBasketball;
