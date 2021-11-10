const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'database-course';

async function main() {
	await client.connect();
	console.log('Połączenie udane!');

	// await db
	// 	.collection('companies')
	// 	.insertOne({slug: 'asvor', name: 'ASVOR LTD'});

	db.collection('companies').findOne({slug: 'asvor'});
}

main();