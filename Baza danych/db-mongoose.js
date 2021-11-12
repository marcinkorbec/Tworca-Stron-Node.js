const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database-course');

//model
const Company = mongoose.model('Company', {
	slug: {
		type: String
	},
	name: {
		type: String
	}
});


(async function main() {
	// const companies = await Company.find({});
	// console.log(companies);

	const company = new Company({
		name: 'TS',
		slug: 'ts'
	})

	await company.save();
})();
