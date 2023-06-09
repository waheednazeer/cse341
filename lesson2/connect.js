const dotenv = require('dotenv');
dotenv.config();

const {MongoClient} = require('mongodb');

async function main(){
    //const uri="mongodb+srv://waheednazeer:S202252w@cluster0.ri2jkki.mongodb.net/?retryWrites=true&w=majority";

    const client= new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);    
    }finally{
        await client.close();
    }

}
main().catch(console.error);

async function listDatabases(client){
    const databasesList=await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(db.name);
        
    });

}