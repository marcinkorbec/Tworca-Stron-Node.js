const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database-course');

//model
const Company = mongoose.model('Company', {
	slug: {
		type: String,
		required: [true, "To pole jest wymagane"],
		minLength: [3, 'Minimalna liczba znaków to 3'],
		validate: (value) => {
			if (value === "slug") {
				throw new Error('Nazwa "slug" jest zabroniona.')
			}
		},
		trim: true,
		lowerccase: true

	},
	name: {
		type: String,
		required: [true, "Pole jest wymagane"],
	},
	numberEmployeesCount: {
		type: Number,
		min: 1
	}
});


(async function main() {
	// const companies = await Company.find({});
	// console.log(companies);

	const company = new Company({
		name: 'TS',
		slug: 'slug'
	})

	try {
		await company.save();
	} catch (e) {
		console.log('Coś poszło nie tak');

		for(const key in e.errors) {
			console.log(e.errors[key].message);
		}
	}

})();
