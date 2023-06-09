const dotenv = require('dotenv');
dotenv.config();
const {MongoClient} = require('mongodb');
const client= new MongoClient(process.env.MONGODB_URI);
let db;
let dbNames=[];

// database call
async function main(){
   
    try {
        await client.connect();
        db=await listDatabases(client);
        console.log('databases: '+db);
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
        dbNames.push(db.name);
        
    });
return dbNames;
}
console.log('databases: '+dbNames);

const getData = async (req, res, next) => {
    await client.connect();
    await client.db().collection('user').findOne({professionalName:
        "Nathan Birch"});
    
  };






const shakiraRoute= async(req, res) => {
    await client.connect();
    const result=await client.db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // we just need the first one (the only one)
      });
    
    res.send(result);
};

const waheedRoute= (req, res) => {
    res.send('Waheed');
};
const maryamRoute= (req, res) => {
    res.send('Maryam Waheed');
};

const ibrahimRoute= (req, res) => {
    res.send('Ibrahim Waheed');
};

module.exports= {
    shakiraRoute,
    waheedRoute,
    maryamRoute,
    ibrahimRoute
};