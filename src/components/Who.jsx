import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	width: 1400px;
	height: 100vh;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	position: relative;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const Title = styled.h2`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const WhatIDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Description = styled.div``;

const Text = styled.p`
	font-size: 24px;
	color: #d3d3d3;
	padding: 10px 0;
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: #fff;
	font-weight: 500;
	width: 120px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Canvas camera={{ fov: 20, position: [7, 7, 7] }}>
						<OrbitControls enableZoom={false} autoRotate />
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<Cube />
					</Canvas>
				</Left>
				<Right>
					<Title>My Skills</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle>What I do</Subtitle>
					</WhatIDo>
					<Description>
						<Text>
							These are my tech stacks that I'm working with since
							2020 - now:
						</Text>
						<Text>
							Typescript, React, GraphQL, NodeJs, React Native
						</Text>
					</Description>
					<Button>See My Works</Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
