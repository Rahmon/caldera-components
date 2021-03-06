import CalderaValidators from './index';
import getValidatorsFromConfigField from './getValidatorsFromConfigField';
import checkValidatorsForConfigFields from './checkValidatorsForConfigFields';
import checkValidatorsForConfigField from './checkValidatorsForConfigField';
import {addAutomaticValidators} from './addAutomaticValidators';

describe( 'CalderaValidators export', () => {

	it( 'exports getValidatorsFromConfigField', () => {
		expect( typeof CalderaValidators.getValidatorsFromConfigField ).toEqual( 'function' );
	});

	it( 'exports checkValidatorsForConfigFields', () => {
		expect( typeof CalderaValidators.checkValidatorsForConfigFields ).toEqual( 'function' );
	});

	it( 'exports checkValidatorsForConfigFields as checkValidatorsForConfigFields', () => {
		expect( CalderaValidators.checkValidatorsForConfigFields ).toEqual( checkValidatorsForConfigFields );
	});

	it( 'exports getValidatorsFromConfigField as getValidatorsFromConfigField', () => {
		expect( CalderaValidators.getValidatorsFromConfigField ).toEqual( getValidatorsFromConfigField );
	});

	it( 'exports checkValidatorsForConfigField as checkValidatorsForConfigField', () => {
		expect( CalderaValidators.checkValidatorsForConfigField ).toEqual( checkValidatorsForConfigField );
	});

	it( 'exports checkValidatorsForConfigField', () => {
		expect( typeof CalderaValidators.checkValidatorsForConfigField ).toEqual( 'function' );
	});

	it( 'exports isEmpty', () => {
		expect( typeof CalderaValidators.isEmpty ).toEqual( 'object' );
	});

	it( 'exports messageStrings', () => {
		expect( typeof CalderaValidators.messageStrings ).toEqual( 'object' );
	});

	it( 'exports reduceConfigFieldsToValues', () => {
		expect( typeof CalderaValidators.reduceConfigFieldsToValues ).toEqual('function');
	});

	it( 'can call a function on isEmpty export ', () => {
		expect(  CalderaValidators.isEmpty.string('roy@hiroy.club') ).toEqual( false );
	});


	it( 'exports isValid', () => {
		expect( typeof CalderaValidators.isValid ).toEqual( 'object' );
	});

	it( 'exports addAutomaticValidators', () => {
		expect( typeof  CalderaValidators.addAutomaticValidators ).toBe( 'function');
	});

	it( 'exports addAutomaticValidators as addAutomaticValidators ', () => {
		expect(   CalderaValidators.addAutomaticValidators ).toEqual(addAutomaticValidators );
	});

	it( 'exports isValidOrEmpty', () => {
		it( 'exports isValidOrEmpty', () => {
			expect( typeof CalderaValidators.isValid.isValidOrEmpty ).toEqual( 'object' );
		});
	});

	it( 'can call a function on isValid export ', () => {
		expect(  CalderaValidators.isValid.email('roy@hiroy.club') ).toEqual( true );
	});

	it( 'can get English message strings', () => {
		expect( typeof CalderaValidators.messageStrings.getMessageStrings('en') ).toEqual( 'object' );

	});


});