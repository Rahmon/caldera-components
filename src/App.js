import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FieldGroup} from "./components/fields/FieldGroup";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div>
					<FieldGroup
						id={'control-22'}
						label={'Required Text input'}
						type={'input'}
						isRequired={true}
					/>

					<FieldGroup
						id={'control-23'}
						label={'Non Required Text input'}
						type={'input'}
						isRequired={true}
					/>

					<FieldGroup
						id={'control-23'}
						label={'With Help Text'}
						type={'input'}
						isRequired={true}
						help={'Adding help text sets aria-describedy'}
					/>
				</div>
			</div>
		);
	}
}

export default App;
