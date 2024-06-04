import { FC } from "react";
import { MeshProps } from "@react-three/fiber";

const DeskLeg: FC<MeshProps> = (props) => {
    return (
        <mesh {...props}>
            <cylinderGeometry args={[0.05, 0.05, 1]} />
            <meshStandardMaterial color="black" />
        </mesh>
    );
};

export default DeskLeg;
