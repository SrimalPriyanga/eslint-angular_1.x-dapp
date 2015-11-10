/**
 * @fileoverview Rule to Found improperly formatted if-statement
 * @author Srimal Priyanga
 * @licence MIT.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
	return {
		IfStatement: function(node) {
			var source = context.getSource(node.test, 0, 3);
			if (!source.match(/ {$/)) {
				context.report(node, 'Found improperly formatted if-statement');
			}
		}
	};
};

module.exports.schema = [
	// JSON Schema for rule options goes here
];