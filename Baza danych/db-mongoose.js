const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/database-course');

//model
const companySchema = new Schema({
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
		lowercase: true

	},
	name: {
		type: String,
		required: [true, "Pole jest wymagane"],
	},
	numberEmployeesCount: {
		type: Number,
		min: 1,
		default: 1
	}
});

// setter
companySchema.path('slug').set((value) => value.toLowerCase());

const Company = mongoose.model('Company', companySchema);

(async function main() {
	// const companies = await Company.find({});
	// console.log(companies);

	const company = new Company({
		name: 'TS',
		slug: '     PARARARA  '
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
