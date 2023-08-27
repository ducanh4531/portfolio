import styled from "styled-components";

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

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

const Title = styled.h1`
	font-size: 74px;
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

const Left = styled.div`
	flex: 1;
	position: relative;
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>{/*  3d model */}</Left>
				<Right>
					<Title>My skills</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle>What I do</Subtitle>
					</WhatIDo>
					<Description>
						<Text>
							These are my tech stacks that I'm working with:
						</Text>
						<Text>
							Typescript, React, GraphQL, NodeJs, React Native
						</Text>
					</Description>
					<Button>See Our Works</Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
