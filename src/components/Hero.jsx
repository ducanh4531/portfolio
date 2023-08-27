import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 1400px;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 3;
	position: relative;
`;

const Img = styled.img`
	width: 800px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		to {
			transform: translateY(20px);
		}
	}
`;

const Hero = () => {
	return (
		<Section>
			<Navbar />
			<Container>
				<Left>
					<Title>Hello World</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle>Who I am</Subtitle>
					</WhatIDo>
					<Description>
						<Text>My name is Duc Anh Le (a.k.a Anton).</Text>
						<Text>
							I'm a programmer, an avid travel, a life long
							learner, a people lover.
						</Text>
						<Text>
							I started learning to code when I went to the
							university, and it only took some years for me to
							understand, related to, and stick with programming.
						</Text>
						<Text>
							But in the past six years (in 2018), I taught myself
							and learned basic Python, then finally I have been
							decided to very focused on learning frontend web
							programming and other related stuffs since the last
							month of 2020. Now I am very confident that my
							abilities can meet future company and customers'
							requirements as well.
						</Text>
					</Description>
					<Button>Learn More</Button>
				</Left>
				<Right>
					{/*  3d model */}
					<Img src="./img/apollo.png" />
				</Right>
			</Container>
		</Section>
	);
};

export default Hero;
