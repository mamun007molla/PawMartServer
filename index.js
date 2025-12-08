const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("world");
});





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.dm91gwq.mongodb.net/?appName=Cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database=client.db('pawMart')
    const listingColl=database.collection('listing')
    const orderColl=database.collection('order')
    app.post('/order',async(req,res)=>{
     const data=req.body;
     const result=await orderColl.insertOne(data)
     res.send(result)   
    })
    app.post('/listing',async(req,res)=>{
        const data=req.body;
        const result= await listingColl.insertOne(data)
        res.send(result)

    })
    app.get('/recentListing',async(req,res)=>{
        const result=await listingColl.find().limit(6).toArray()
        res.send(result)
    })
   
    app.get('/listing',async(req,res)=>{
        const result=await listingColl.find().toArray()
        res.send(result)
    })
    app.get('/listing/:id',async(req,res)=>{
        const id=req.params.id
        console.log(id);
        const query={_id: new ObjectId(id)}
        const result=await listingColl.findOne(query)
        res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
