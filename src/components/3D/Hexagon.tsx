import { FC, useMemo, useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import { Vector3 } from "three";

const Hexagon: FC<MeshProps> = (props) => {
    const vertices = useMemo(() => {
        let points = [];
        for (let i = 0; i <= 6; i++) {
            const angle = (Math.PI * 2 * i) / 6;
            points.push([1 * Math.cos(angle), 1 * Math.sin(angle), 0]);
        }
        points.map((point) => new Vector3(...point));
        return points;
    }, []);

    const ref = useRef();

    return (
        <line>
            {/* <bufferGeometry vertices={vertices} /> */}
            <lineBasicMaterial color="red" />
        </line>
    );
};

export default Hexagon;
