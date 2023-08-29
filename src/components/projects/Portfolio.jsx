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
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Text = styled.p`
	font-size: 20px;
	color: #000;
`;

const Portfolio = () => {
	return (
		<>
			<Link
				target="_blank"
				href="https://www.github.com/ducanh4531/portfolio"
			>
				<Image src="./img/projects/portfolio.png" />
			</Link>
			<Desc>
				<Text>
					{" "}
					- introduce the author, work experience and projects,
				</Text>
				<Text>
					- allow users to contact and send message to author by
					submitting form
				</Text>
			</Desc>
		</>
	);
};

export default Portfolio;
