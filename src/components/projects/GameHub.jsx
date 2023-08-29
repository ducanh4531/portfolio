import styled from "styled-components";

const Link = styled.a`
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
`;

const Desc = styled.div`
	width: 700px;
	height: 170px;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
`;

const Text = styled.p`
	font-size: 20px;
	color: #000;
`;

const GameHub = () => {
	return (
		<>
			<Link
				target="_blank"
				href="https://www.github.com/ducanh4531/game-hub"
			>
				<Image src="./img/projects/gamehub.png" />
			</Link>
			<Desc>
				<Text> - execute HTTP requests to Rawg API with Axios,</Text>
				<Text>
					- allow users to filter by genres, platforms, search text or
					sort by default criteria,
				</Text>
				<Text>
					- implement infinite scroll, pagination and skeleton loading
					as well,
				</Text>
				<Text>
					- users are able to redirect to routers so that can view
					single game or list of multiple games as well
				</Text>
			</Desc>
		</>
	);
};

export default GameHub;
