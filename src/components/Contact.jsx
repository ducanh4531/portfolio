import emailjs from "@emailjs/browser";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`;

const Title = styled.h2`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		font-size: 55px;
	}
`;

const Input = styled.input`
	padding: 20px;
	border: none;
	border-radius: 5px;
	background-color: #f7f7f7;
`;

const TextArea = styled.textarea`
	padding: 20px;
	border: none;
	border-radius: 5px;
	background-color: #f7f7f7;
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: #fff;
	font-weight: 500;
	width: 100%;
	padding: 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Text = styled.p`
	font-size: 24px;
	color: #3cef9b;
	padding: 10px 0;
	font-weight: bold;
`;

const Right = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const INITIAL_STATE = {
	name: "",
	email: "",
	message: "",
};

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState(INITIAL_STATE);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_pe93c0v",
				"template_1r7mskv",
				formRef.current,
				"wTjG54FIXtWk6kd8H"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					setForm(INITIAL_STATE);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};

	const handleChange = ({ target }) => {
		setForm({ ...form, [target.name]: target.value });
	};

	return (
		<Section>
			<Container>
				<Left>
					<Canvas>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={8} />
						<directionalLight position={[3, 2, 1]} />
						<Sphere args={[1, 100, 200]} scale={2.3}>
							<MeshDistortMaterial
								color="#3d1c56"
								attach="material"
								distort={0.5}
								speed={2}
							/>
						</Sphere>
					</Canvas>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<Title>Contact Me</Title>
						<Input
							placeholder="Name"
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
						/>
						<Input
							placeholder="Email"
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<TextArea
							placeholder="Write your message"
							name="message"
							rows={10}
							value={form.message}
							onChange={handleChange}
							required
						/>
						<Button type="submit">Send</Button>
						{success && (
							<Text id="form-submitted">
								Thank you! Your message has been sent
								successfully
							</Text>
						)}
					</Form>
				</Left>
				<Right>
					<Map />
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
