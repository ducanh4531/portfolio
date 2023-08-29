import { useState } from "react";
import styled from "styled-components";
import ChatApp from "./projects/ChatApp";
import Ecommerce from "./projects/Ecommerce";
import Eventio from "./projects/Eventio";
import GameHub from "./projects/GameHub";
import Portfolio from "./projects/Portfolio";
import Reddit from "./projects/Reddit";
import Spotify from "./projects/Spotify";
import TwitterAPI from "./projects/TwitterAPI";

const data = [
	"Portfolio",
	"Game Hub",
	"Ecommerce",
	"Twitter API",
	"Reddit",
	"Spotify",
	"Chat App",
	"Eventio",
];

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		justify-content: center;
		padding: 30px;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		gap: 0px;
	}
`;

const ListItem = styled.li`
	font-weight: bold;
	font-size: 65px;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px #fff;
	position: relative;
	white-space: nowrap;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		align-items: start;
		color: #fff;
		-webkit-text-stroke: 0px;
	}

	&:after {
		content: "${(props) => props.text}";
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		color: #f2b2bd;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		&:after {
			animation: moveText 0.4s linear both;

			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}
`;

const Right = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media only screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

const Works = () => {
	const [work, setWork] = useState("Portfolio");

	const showProject = () => {
		switch (work) {
			case "Portfolio":
				return <Portfolio />;
			case "Game Hub":
				return <GameHub />;
			case "Ecommerce":
				return <Ecommerce />;
			case "Twitter API":
				return <TwitterAPI />;
			case "Reddit":
				return <Reddit />;
			case "Spotify":
				return <Spotify />;
			case "Chat App":
				return <ChatApp />;
			case "Eventio":
				return <Eventio />;
			default:
				break;
		}
	};

	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem
								key={item}
								text={item}
								onClick={() => setWork(item)}
							>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>{showProject()}</Right>
			</Container>
		</Section>
	);
};

export default Works;
