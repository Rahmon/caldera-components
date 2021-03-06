/**
 * Check configField conditionals.
 *
 * Returns false if any conditionals fail.
 * Returns true if no conditionals fail, or there are no conditionals.
 *
 * @param {Object} configField The field to check the conditionals of.
 * @param {Object} fieldValues Optional. Data to pass to conditional rule callbacks
 * @return {boolean}
 */
export const checkConfigFieldConditionals = (configField, fieldValues = {}) => {
	if (!configField.hasOwnProperty('conditionals') || !Array.isArray(configField.conditionals)) {
		return true;
	}

	let allRulesPassed = true;
	configField.conditionals.forEach(conditional => {
		if ('function' === typeof conditional && false === conditional.call(null, fieldValues)) {
			allRulesPassed = false;
			return false;
		}
	});

	return allRulesPassed;

};