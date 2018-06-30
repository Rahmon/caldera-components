import CalderaComponents from './index';
describe( 'conditionals export', () => {
	it( 'exports RenderGroup', () => {
		expect( typeof CalderaComponents.RenderGroup ).toEqual( 'function' );
	});
	it( 'exports fields', () => {
		expect( typeof CalderaComponents.fields ).toEqual( 'object' );
	});
	it( 'exports factories', () => {
		expect( typeof CalderaComponents.factories ).toEqual( 'object' );
	});
	it( 'exports conditionals', () => {
		expect( typeof CalderaComponents.conditionals ).toEqual( 'object' );
	});

});