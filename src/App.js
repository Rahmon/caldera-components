import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FieldGroup} from "./components/fields/FieldGroup";
import {SelectField} from "./components/fields/select/SelectField";
import {fieldSetFactory} from "./components/fields/factories/fieldSetFactory";
import {RenderGroup} from "./components/RenderGroup";

let textFieldValue = 'Roy,Mike';
const textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false,
	value: textFieldValue,
	onValueChange: function(newValue){
		textFieldValue = newValue
	}
};

let hiddenFieldValue = '42';
const hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false,
	value: hiddenFieldValue,
	onValueChange: function(newValue){
		hiddenFieldValue = newValue
	}
};

let selectFieldValue = 'html';
const selectFieldConfig = {
	'id': 'cf-something-select-id',
	'type': 'dropdown',
	'label': 'Content type',
	'description': 'Choose content type, default is HTML',
	options: [
		{
			label: 'HTML',
			value: 'html'
		},
		{
			label: 'Plain Text',
			value: 'plain'
		}
	],
	value: selectFieldValue,
	onValueChange: function(newValue){
		hiddenFieldValue = newValue
	}
};

const configFields = [
	textFieldConfig,
	hiddenFieldConfig,
	selectFieldConfig
];
const configFieldEls = fieldSetFactory(configFields);



let values = {
	one: '',
	two: '',
	three: ''
};

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div>
					<h2>Inputs</h2>
					<FieldGroup
						id={'control-22'}
						label={'Required Text input'}
						type={'input'}
						isRequired={true}
						value={values.one}
						onValueChange={(newValue) => {
							values.one=newValue;
						}}
					/>

					<FieldGroup
						id={'control-23'}
						label={'Non Required Text input'}
						type={'input'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
					/>

					<FieldGroup
						id={'control-23'}
						label={'With Help Text'}
						type={'input'}
						isRequired={true}
						help={'Adding help text sets aria-describedy'}
						value={values.thre}
						onValueChange={(newValue) => {
							values.three=newValue;
						}}
					/>

					<FieldGroup
						id={'control-24'}
						label={'Non Required Numeric input'}
						type={'input'}
						innertype={'number'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
					/>
				</div>
				<div>
					<h2>Selects</h2>
					<h3>Fancy Auto-complete Select Based On Downshift</h3>
					<SelectField
						id={'r'}
						fieldClassName={'rs'}
						onValueChange={() => {}}
						options={[
							{
								value: 1,
								label: 'One'
							},
							{
								value: 2,
								label: 'Two'
							}
						]}
						isOpen={true}
					/>
				</div>
				<div>
					<h2>Created With Factory</h2>
					{Array.from(configFieldEls).map((field,i) => {
						return React.createElement(
							React.Fragment, {
								key: i,
							},
							field
						);
					})}
				</div>


				<div>
					<h2>Created With RenderGroup Component</h2>
					<RenderGroup 
						configFields={configFields}
					/>
				</div>
			</div>
		);
	}
}

export default App;
