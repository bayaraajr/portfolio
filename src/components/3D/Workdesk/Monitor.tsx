import { FC } from "react";
import { MeshProps } from "@react-three/fiber";

const Monitor: FC<MeshProps> = (props) => {
    return (
        <mesh {...props}>
            <boxGeometry args={[0.6, 0.4, 0.02]} />
            <meshStandardMaterial color="black" />
        </mesh>
    );
};

export default Monitor;
