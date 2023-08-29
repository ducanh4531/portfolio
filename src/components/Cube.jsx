import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
	const textRef = useRef(null);
	useFrame(
		(state) =>
			(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
	);

	return (
		<mesh>
			<boxGeometry />
			<meshStandardMaterial>
				<RenderTexture attach="map">
					<PerspectiveCamera makeDefault position={[0, 0, 5]} />
					<color attach="background" args={["#dc9dcd"]} />
					<Text ref={textRef} fontSize={2} color="#555">
						User
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
};

export default Cube;
