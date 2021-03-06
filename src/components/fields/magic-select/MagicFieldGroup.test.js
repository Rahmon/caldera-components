import renderer from 'react-test-renderer';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MagicFieldGroup} from './MagicFieldGroup';

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {
};
describe('MagicFieldGroup component', () => {


	it('matches snapshot with no message', () => {
		const component = renderer.create(
			<MagicFieldGroup
				id={'magic-3'}
				label={'Hi Roy'}
				fieldClassName={'magic'}
				onValueChange={genericChangeHandler}
				options={[
					{
						label: 'HTML',
						value: 'html'
					},
					{
						label: 'Plain Text',
						value: 'plain'
					}
				]}
				isOpen={false}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('matches snapshot with message', () => {
		const component = renderer.create(
			<MagicFieldGroup
				id={'magic-3'}
				label={'Hi Roy'}
				fieldClassName={'magic'}
				onValueChange={genericChangeHandler}
				options={[
					{
						label: 'HTML',
						value: 'html'
					},
					{
						label: 'Plain Text',
						value: 'plain'
					}
				]}
				isOpen={false}
				message={{
					message: 'Hi Roy',
					error: false,
				}}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('Inner input', () => {
		it('Has inner input', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-1'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('input')).toHaveLength(1);
		});
	});
	describe('Options', () => {
		it('shows no options if closed', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-3'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('.magic-input-option')).toHaveLength(0);
		});


		it('Uses options prop by default - right number of options', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-4'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses options prop by default', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-4'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses fieldsList prop if no options prop', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(3);
		});

		it('Uses systemTagsList prop if no options prop and currentListType state is system', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			component.setState({currentListType: 'system'});
			expect(component.find('.magic-input-option')).toHaveLength(1);
		});

		it('Receives updated value', () => {
			let value = '1';
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={(newValue) => {
						value = newValue;
					}}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					value={value}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			component.find('input').simulate('change', {target: {value: '3'}});
			expect(value).toEqual('3');
		});
	});


	describe('Value', () => {
		it('Uses props.value to set value', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-7'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: '1',
							value: 1
						}
					]}
					value={1}
				/>
			);
			expect(component.find('input').prop('value')).toBe(1);
		});


		it('Passes updated value properly through the onSelect handler', () => {
			let updatedValue = null;
			const component = mount(
				<MagicFieldGroup
					id={'magic-9'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={(newValue) => {
						updatedValue = newValue;
					}}
					options={[
						{
							label: '1',
							value: 1
						},
						{
							label: '14',
							value: 14
						}
					]}
					value={1}
				/>
			);

			component.instance().onSelect(14);
			expect(updatedValue).toEqual(14);
		});
	});

	describe('Button group for type choice', () => {
		it('Outputs the buttons if open', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-50'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			expect(component.find('button')).toHaveLength(2);
		});
		it('Does not output the buttons if not open', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-50'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('button')).toHaveLength(0);
		});
	});

	it('onChange passes value', () => {
		let value = 2;
		const component = mount(
			<MagicFieldGroup
				id={'magic-5'}
				fieldClassName={'magic'}
				label={'Hi Roy'}
				onValueChange={(newValue) => {
					value = newValue;
				}}
				fieldsList={[
					{
						label: '0',
						value: 0
					},
					{
						label: '1',
						value: 1
					},
					{
						label: '3',
						value: 3
					}
				]}
				systemTagsList={[
					{
						label: '3',
						value: 3
					}
				]}
				value={value}
				isOpen={true}
			/>
		);
		component.instance().onChange(3);
		expect(value).toBe(3);
	});

	describe('updates state on focus', () => {
		it('Updates state when calling handler directly', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={false}
				/>
			);
			component.instance().onInputFocus();
			expect(component.state().isOpen).toBe(true);
		});

		it('Updates state when simulating focus', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={false}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.state().isOpen).toBe(true);
		});
	});

	describe('updates state on blur', () => {

		it('Updates state when calling handler directly', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={true}
				/>
			);
			component.instance().onInputBlur();
			expect(component.state().isOpen).toBe(false);
		});



	});

	describe( 'Changing list type', () => {
		it('Opens whenever changing type', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={false}
				/>
			);
			component.instance().onChangeListType('system');
			expect(component.state().isOpen).toBe(true);
		});
		it('Stays opens changing type', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={true}
				/>
			);
			component.instance().onChangeListType('system');
			expect(component.state().isOpen).toBe(true);
		});

		it('Changes the type', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={() => {
					}}
					defaultList={'fields'}
					options={[]}

					isOpen={true}
				/>
			);
			component.instance().onChangeListType('system');
			expect(component.state().currentListType).toBe('system');
		});
	});


	it('Renders the inner items', () => {
		const component = mount(
			<MagicFieldGroup
				id={'magic-5'}
				fieldClassName={'magic'}
				label={'Hi Roy'}
				onValueChange={() => {
				}}
				defaultList={'fields'}
				options={[]}
				isOpen={true}
			/>
		);
		const innerComponent = renderer.create(
			component.instance().renderItem({
				label: '1',
				value: '1',
				innerKey: '1'
			}, true
			));
		expect(innerComponent.toJSON()).toMatchSnapshot();
	});
});