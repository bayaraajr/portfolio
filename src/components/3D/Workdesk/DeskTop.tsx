import { FC } from "react";
import { MeshProps } from "@react-three/fiber";

const DeskTop: FC<MeshProps> = (props) => {
    return (
        <mesh {...props}>
            <boxGeometry args={[2, 0.1, 1]} />
            <meshStandardMaterial color="brown" />
        </mesh>
    );
};

export default DeskTop;
