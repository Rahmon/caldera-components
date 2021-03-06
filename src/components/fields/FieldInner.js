import {fieldInnerPropTypes} from './propTypes';
import React from 'react';
import {Input} from './input/Input';
import {SelectField} from './select/SelectField';
import {ariaDescribedbyAttr} from './util';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {RenderGroup} from '../RenderGroup';
import {Button} from './button/Button';

/**
 * Creates the field inside of a field group
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const FieldInner = (props) => {

	/**
	 * Get the ID for the description element if it will be created
	 *
	 * @return {String|null}
	 */
	function ariaIdAttr() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	/**
	 * Get the className prop for the
	 *
	 * @return {String}
	 */
	function inputClassName() {
		return classNames([
			props.fieldClassName,
			RenderGroup.classNames.input
		]
		);
	}

	switch (props.type) {
	case 'select':
	case 'dropdown':
		const options = Array.isArray(props.options) ? props.options : [];
		return (
			<SelectField
				id={props.id}
				fieldClassName={inputClassName()}
				ariaDescribedbyAttr={ariaIdAttr()}
				value={props.value}
				onValueChange={props.onValueChange}
				inputType={props.inputType}
				options={options}
				disabled={props.disabled}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
			/>
		);
	case 'button' :
		return (
			<Button
				onClick={props.onClick}
				id={props.id}
				fieldClassName={inputClassName()}
				ariaDescribedbyAttr={ariaIdAttr()}
				value={props.value}
				inputType={props.inputType}
				disabled={props.disabled}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
			/>
		);
	default:
	case 'input':
		return (
			<Input
				id={props.id}
				onValueChange={props.onValueChange}
				fieldClassName={inputClassName()}
				ariaDescribedbyAttr={ariaIdAttr()}
				value={props.value}
				onClick={props.onClick}
				inputType={props.inputType}
				disabled={props.disabled}
				isRequired={props.isRequired}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
			/>);
	}

};

/**
 * propTypes for FieldInner component
 *
 * @type {{options, ariaDescribedbyAttr}}
 */
FieldInner.propTypes = {
	...fieldInnerPropTypes,
	type: PropTypes.string,
};

/**
 * Default props for FieldInner component
 * @type {{help: string}}
 */
FieldInner.defaultProps = {
	help: '',
	type: 'input'
};