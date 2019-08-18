import React from "react";
import { storiesOf } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
	withKnobs,
	text,
	boolean,
	number,
	color
} from "@storybook/addon-knobs";
import Card from "./Card";

const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

// This will lead to { onClick: action('onClick'), ... }
const eventsFromNames = actions("onClick", "onMouseOver");

stories
	.add("with Card", () => (
		<Card
			primary={boolean("Primary Color", true)}
			background={color("Background", "white")}
			color={color("Text", "black")}
			width={number("Width", 15)}
			height={number("Height", 20)}
			onClick={action("Clicked")}
		>
			{text("Label", "Lorem ipsum dolor sit amet")}
		</Card>
	))
	.add("with Card eventsFromNames", () => (
		<Card primary {...eventsFromNames}>
			Click here
		</Card>
	));
