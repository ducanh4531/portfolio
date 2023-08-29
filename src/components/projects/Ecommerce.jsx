import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ShoppingCart from "./ShoppingCart";

const Ecommerce = () => {
	return (
		<Canvas camera={{ fov: 60, position: [7, 7, 7] }}>
			<OrbitControls enableZoom={false} />
			<Stage environment="city" intensity={0.6}>
				<ShoppingCart />
			</Stage>
		</Canvas>
	);
};

export default Ecommerce;
