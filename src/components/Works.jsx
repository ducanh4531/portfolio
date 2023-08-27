import styled from "styled-components";

const data = [
	"Portfolio",
	"Game Hub",
	"Ecommerce",
	"Eventio",
	"Spotify",
	"Chat App",
	"Reddit",
	"Twitter API",
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
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const ListItem = styled.li`
	font-weight: bold;
	font-size: 65px;
	cursor: pointer;
	color: transparent;
	-webkit-text-stroke: 1px #fff;
	position: relative;
	white-space: nowrap;

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
	flex: 1;
`;

const Img = styled.img``;

const Works = () => {
	return (
		<Section>
			<Container>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem key={item} text={item}>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>
					<Img />
				</Right>
			</Container>
		</Section>
	);
};

export default Works;
