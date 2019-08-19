// @flow
import React from "react";
// $FlowFixMe
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

class Main extends React.PureComponent<{}> {
	#test: string = "A test using Js private properties";

	// eslint-disable-next-line
	supertest() {
		console.log("a private method");
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						{this.#test}
					</a>
					<Card
						primary={false}
						background="white"
						color="black"
						width={15}
						height={20}
					>
						{"Lorem ipsum dolor sit amet"}
					</Card>
					<br />
					<br />
				</header>
			</div>
		);
	}
}

function App() {
	return <Main />;
}

export default App;
