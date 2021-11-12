const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {createHmac} = require('crypto');
const salt = 'wihfbfourfgyqyfngo3347r0pryfbuqlxqybru o pfnixdchioboeurefbwepuweefh67qw674eopr5p7f8whfgqerfv';

mongoose.connect('mongodb://localhost:27017/zadanie-bazy');

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, "Pole jest wymagane"],
		minLength: [3, 'Minimalna liczba znaków to 3']
	},
	email: {
		type: String,
		required: [true, "To pole jest wymagane"],

		validate: (value) => {
			if (!(value.indexOf('@')>2 && value.indexOf('@')<value.length-2)) {
				throw new Error('Mail jest nieprawidłowy.')
			}
		},
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		required: [true, "To pole jest wymagane"],
	},

	isAdmin: {
		type: Number,
		default: 0,
		min: 0,
		nax: 1,
	},
});

const hash = (value) => {
	return createHmac('sha512',salt)
		.update(value)
		.digest('hex');
}

userSchema.path('password').set(value => hash(value));

const User = mongoose.model('User', userSchema);

(async function main() {

	const user = new User({
		name: 'Marcin',
		email: 'marcinkorbecki.dw@pl',
		password: 'marcin123'
	})

	try {
		await user.save();
	} catch (e) {
		console.log('Coś poszło nie tak');

		for(const key in e.errors) {
			console.log(e.errors[key].message);
		}
	}

})();

(async () => {
	const users = await User.find({});
	console.log(users);

	const oneUser = await User.find({email: 'marcinkorbecki.dw@gmail.com'});
	console.log(oneUser)
})();