import { useRef, useState, useMemo, useEffect, Suspense, useCallback, memo } from "react";

import * as THREE from "three";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import {
    Billboard,
    BillboardProps,
    Box,
    RoundedBox,
    Sky,
    Stars,
    Text3D,
    TrackballControls,
    useCamera,
} from "@react-three/drei";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const Word = ({
    children,
    onPressWord,
    fontSize = 2.5,
    ...props
}: BillboardProps & { onPressWord: () => void; fontSize?: number }) => {
    const color = new THREE.Color();
    const fontProps = {
        font: "/fonts/JetBrains.json",
        fontSize,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef<any | null>();
    const [hovered, setHovered] = useState(false);

    const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto";
    }, [hovered]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.fontSize = hovered ? 3.5 : 2.5;
        }

        // console.log(state.camera)

        // ref.current.position.y = Math.sin(state.clock.getElapsedTime() / 2);
        // state.camera.position.lerp(props.position, 0.03);
        // state.camera.lookAt(0, 0, 0);
    });

    return (
        <Billboard onPointerOver={over} onClick={() => onPressWord()} onPointerOut={out} {...props}>
            <Text3D ref={ref} {...fontProps}>
                {children}
                <meshNormalMaterial />
            </Text3D>
        </Billboard>
    );
};

const Cloud = ({ count = 4, radius = 20, onPressWord }: any) => {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        const skills = [
            "React.js",
            "TypeScript",
            "JavaScript",
            "Jest",
            "GitLab",
            "Kubernetes",
            "AWS",
            "XML",
            "GitHub",
            "Jira",
            "ArgoCD",
            "VSCode",
            "HTML",
            "CSS",
            "TailwindCSS",
            "Node.js",
            "DevOps",
            "Material-UI",
            "JSON",
            "Kafka",
            "REST",
            "GraphQL",
            "Express.js",
            "MongoDB",
            "SpringBoot",
            "Java",
            "Spring",
            "Figma",
            "Oracle",
            "Communication",
            "Three.js",
            "Docker",
            "Git",
            "Hibernate",
            "CI/CD",
            "Unit Testing",
            "DynamoDB",
            "Gradle",
            "NPM",
            "Problem Solving",
            "JPA",
            "GitOps",
            "Vercel",
            "Next.js",
            "Critical Thinking",
        ];
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                temp.push([
                    new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
                    skills[(i - 1) * count + j],
                ]);
            }
        }
        return temp;
    }, [count, radius]);

    return (
        <>
            <Word fontSize={5} position={[0, 0, 0]} onPressWord={() => {}}>
                Skills
            </Word>
            {words.map(([pos, word], index) => (
                <Word key={index} onPressWord={() => onPressWord(pos, word)} position={pos as THREE.Vector3}>
                    {word}
                </Word>
            ))}
        </>
    );
};

const ControlRig = ({ position }: any) => {
    const [finished, setFinished] = useState<boolean>(false);
    useFrame((state) => {
        if (state.camera.position.z < 8.029991680645637 && !finished) state.camera.position.z += 0.06;
        else setFinished(true);
    });

    return null;
};

function SkillsSphere() {
    const controlRef: any = useRef();
    const [selectedPosition, setSelectedPosition] = useState<THREE.Vector3 | null>(null);
    const handleWordClick = useCallback((pos: THREE.Vector3) => {
        setSelectedPosition(pos);
    }, []);

    const [fullScreen, setFullScreen] = useState<boolean>(false);

    return (
        <>
            <Suspense fallback={<p>Loading some 3D stuff..</p>}>
                <Canvas
                    className="transition-all bg-gray-800"
                    dpr={[1, 2]}
                    camera={{
                        rotation: [-1.2343811074791486, -0.5129041452343012, -0.7154151977687712],
                        position: [-13.699602182000675, 22.971949170497142, 0],
                        fov: 90,
                    }}
                    style={
                        fullScreen
                            ? {
                                  zIndex: 1000,
                                  //   background: "black",
                                  position: "fixed",
                                  width: "100vw",
                                  height: "100vh",
                                  top: 0,
                                  left: 0,
                              }
                            : { height: "100%", width: "100%" }
                    }
                >
                    {/* <Sky /> */}
                    <fog attach="fog" args={["#202025", 0, 80]} />
                    <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
                    <Suspense fallback={null}>
                        <group rotation={[10, 10.5, 10]}>
                            <Cloud count={7} radius={24} onPressWord={handleWordClick} />
                        </group>
                    </Suspense>
                    {/* <Box
                    position={[10, 20, 30]}
                    args={[10, 10, 2]} // Width, height, depth. Default is [1, 1, 1]
                >
                    <meshStandardMaterial color="#ff0000" />
                </Box> */}
                    <ControlRig />
                    <TrackballControls />
                </Canvas>
            </Suspense>

            <button
                className={`text-white text-xs z-[2000] bg-black  flex justify-start items-center border rounded-full px-4 py-2 border-gray-500 bottom-10 left-10 ${fullScreen ? "fixed" : "absolute"}`}
                onClick={() => setFullScreen((f) => !f)}
            >
                {fullScreen ? <BsFullscreenExit /> : <BsFullscreen />} <span className="ml-2">Toggle</span>
            </button>
        </>
    );
}

export default memo(SkillsSphere);
