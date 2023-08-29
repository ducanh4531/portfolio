import styled from "styled-components";

const Link = styled.a`
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
`;

const Desc = styled.div`
	width: 700px;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;

	@media only screen and (max-width: 768px) {
		width: 100%;
		padding: 10px;
		margin: 0 5px;
	}
`;

const Text = styled.p`
	font-size: 20px;
	color: #000;

	@media only screen and (max-width: 768px) {
		font-size: 18px;
	}
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
