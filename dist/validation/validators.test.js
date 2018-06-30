"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _getValidatorsFromConfigField = require("./getValidatorsFromConfigField");

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

var _checkValidatorsForConfigField = require("./checkValidatorsForConfigField");

var _checkValidatorsForConfigField2 = _interopRequireDefault(_checkValidatorsForConfigField);

var _util = require("../conditional-logic/util");

var _checkValidatorsForConfigFields = require("./checkValidatorsForConfigFields");

var _checkValidatorsForConfigFields2 = _interopRequireDefault(_checkValidatorsForConfigFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validation export', function () {
	it('exports getValidatorsFromConfigField', function () {
		expect(_typeof(_index2.default.getValidatorsFromConfigField)).toEqual('function');
	});
	it('exports checkValidatorsForConfigFields', function () {
		expect(_typeof(_index2.default.checkValidatorsForConfigFields)).toEqual('function');
	});
	it('exports checkValidatorsForConfigField', function () {
		expect(_typeof(_index2.default.checkValidatorsForConfigField)).toEqual('function');
	});
});

function validateTrue() {
	return true;
}

describe('getValidatorsFromConfigField', function () {

	var validators = [function () {
		return false;
	}, validateTrue];

	var configField = {
		ID: 'fld1234',
		validators: validators
	};

	it('Finds the array', function () {
		expect((0, _getValidatorsFromConfigField2.default)(configField)).toEqual(validators);
	});

	it('returns empty array if validators is not set', function () {
		expect((0, _getValidatorsFromConfigField2.default)({ ID: 'fld1' })).toEqual([]);
	});

	it('returns empty array if validators is not an array', function () {
		expect((0, _getValidatorsFromConfigField2.default)({
			ID: 'fld1', validators: {
				validateTrue: validateTrue
			}
		})).toEqual([]);
	});

	describe('checkValidatorsForConfigField', function () {
		it('returns true if no validators', function () {
			expect((0, _checkValidatorsForConfigField2.default)({
				ID: 'fld1234'
			})).toEqual(true);
		});
		it('returns true if empty validators', function () {
			expect((0, _checkValidatorsForConfigField2.default)({
				validators: []
			})).toEqual(true);
		});

		it('returns true if all validators return true', function () {
			expect((0, _checkValidatorsForConfigField2.default)({
				validators: [validateTrue()]
			})).toEqual(true);
		});

		it('returns false if any validators return false', function () {
			expect((0, _checkValidatorsForConfigField2.default)({
				validators: [function () {
					return false;
				}, validateTrue()]
			})).toEqual(false);
		});
	});

	describe('checkValidatorsForConfigFields', function () {
		var valuesPassedToValiator = {};
		beforeEach(function () {
			valuesPassedToValiator = {};
		});

		var configFields = [{
			type: 'email',
			ID: 'validEmailField',
			validators: [function () {
				return true;
			}]
		}, {
			type: 'email',
			ID: 'invalidEmailField',
			validators: [function () {
				return false;
			}]
		}, {
			type: 'email',
			ID: 'otherField',
			value: 'pants',
			validators: [function (fieldValues) {
				valuesPassedToValiator = fieldValues;
				return true;
			}]
		}];

		var fieldValues = (0, _util.reduceConfigFieldsToValues)(configFields);

		it('passes field values to callbacks', function () {
			(0, _checkValidatorsForConfigFields2.default)(configFields, fieldValues);
			expect(valuesPassedToValiator).toEqual(fieldValues);
		});

		describe('reports results', function () {
			var results = (0, _checkValidatorsForConfigFields2.default)(configFields, fieldValues);
			it('reports valid', function () {
				expect(results.validEmailField).toBe(true);
			});
			it('reports invalid', function () {
				expect(results.invalidEmailField).toBe(false);
			});
		});
	});
});