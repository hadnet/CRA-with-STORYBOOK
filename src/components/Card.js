import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import balloon from "../../assets/balloon.jpg";
import Lato from "../../assets/Lato/Lato-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Lato-Regular";
        src: url(${Lato});
    }
    body {
        margin: 0;
        font-family: "Lato-Regular";
    }
`;

export default function({
	primary,
	color,
	width,
	background,
	height,
	children,
	onClick,
	onMouseOver
}) {
	const [status, setStatus] = useState(false);
	return (
		<>
			<GlobalStyle />
			<Card
				{...{
					primary,
					width,
					color,
					background,
					height,
					onClick,
					onMouseOver
				}}
			>
				<Header>
					<Image src={`${balloon}`} />
					<Caption>
						{children.length > 800 || children.length == 0
							? "Error"
							: children}
					</Caption>
				</Header>
				<Body>
					<Title>Lorem ipsum dolor sit amet</Title>
					<Text>{status ? "Explore is now activated" : ""}</Text>
				</Body>
				<Segment>
					<Button onClick={() => setStatus(false)}>SHARE</Button>
					<Button color="orange" onClick={() => setStatus(!status)}>
						EXPLORE
					</Button>
				</Segment>
			</Card>
		</>
	);
}

const Card = styled.div`
	text-align: center;
	color: ${({ color }) => color || "black"};
	width: ${({ width }) => (width ? `${width}em` : "15em")};
	height: ${({ height }) => (height ? `${height}em` : "20em")};
	border-radius: 3px;
	box-shadow: 0 0 5px 1px rgba(47, 47, 47, 0.4);
	background-color: ${({ background }) => background || "white"};
	transition: box-shadow 0.5s ease;
	/* cursor: pointer; */
	&:hover {
		box-shadow: 0 0 15px 1px rgba(47, 47, 47, 0.4);
	}
	&:active {
		color: #ccd;
		background-color: white;
	}
	user-select: none;
	overflow: hidden;
	position: relative;
	/* border: 1px solid tomato; */
`;

const Header = styled.div`
	position: relative;
`;

const Body = styled.div`
	position: relative;
`;

const Segment = styled.div`
	border-top: 1px solid rgba(150, 160, 162, 0.2);
	position: absolute;
	padding-top: 15px;
	height: 35px;
	width: 100%;
	bottom: 0px;
	left: 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Caption = styled.p`
	color: whitesmoke;
	position: absolute;
	bottom: 25px;
	left: 10px;
	padding: 0;
	margin: 0;
`;

const Text = styled.p`
	font-size: 12px;
`;

const Title = styled.p`
	color: silver;
	font-size: 10px;
`;

const Button = styled.div`
	/* padding-right: ${({ paddingRight }) => `${paddingRight}px` || 0};
	padding-left: ${({ paddingLeft }) => `${paddingLeft}px` || 0}; */
	color: ${({ color }) => color || "black"};
	cursor: pointer;
`;

const Image = styled.img`
	height: 8em;
	width: 100%;
`;

/* 
const ImageView = styled.img.attrs({
    src: `${flower}`
})`
width: 100%;
height: 100px;
border: 1px solid blue;
`; 
*/
