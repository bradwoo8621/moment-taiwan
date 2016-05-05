'use strict';

exports.unit_test = {
	setUp: function(done) {
		done();
	},
	create: function(test) {
		test.expect(1);

		var moment = require('../../target/moment-taiwan');

		test.notEqual(moment, null, "Didn't get moment object.");
		test.done();
	},
	formatFromTW: function(test) {
		test.expect(2);

		var moment = require('../../src/moment-taiwan');
		var date = moment('104/10/20', 'tYY/MM/DD');

		test.equal(date.format('YYYY/MM/DD'), '2015/10/20', "Wrong format from taiwan.");
		test.equal(moment('abc', 'tYY/MM/DD').isValid(), false, "Wrong valid date from taiwan.");
		test.done();
	},
	formatFromG: function(test) {
		test.expect(2);

		var moment = require('../../src/moment-taiwan');
		var date = moment('2015/10/20', 'YYYY/MM/DD');

		test.equal(date.format('tYY/MM/DD'), '104/10/20', "Wrong format from G.");
		test.equal(moment('abc', 'YYYY/MM/DD').isValid(), false, "Wrong valid date from G.");
		test.done();
	}
};
