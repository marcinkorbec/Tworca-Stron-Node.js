const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'database-course';

async function main() {
	await client.connect();
	console.log('Połączenie udane!');
	const db = client.db(dbName);

	//-----------TWORZENIE
	await db
		.collection('companies')
		.insertOne({slug: 'asvor', name: 'ASVOR LTD'});

	//-----------POBIERANIE WARTOŚCI
	// const response = await db.collection('companies').findOne({slug: 'asvor'});
	// const response2 = await db.collection('companies').find({slug: 'asvor'}).toArray();
	// console.log(response);
	// console.log(response2);

	//-----------USUWANIE
	// const response = await db.collection('companies').deleteOne({slug: 'asvor'});
}

main()
	.catch(ex => console.log(ex))
	.finally(() => client.close());