import { MongoClient } from "mongodb"

URL = 'YOUR DATANASE URL HERE'

const addMeetupHandler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body
        const client = await MongoClient.connect(URL)
        const db = client.db()
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne({
            title: data.title,
            image:data.image,
            address:data.address,
            description:data.description
        })
        console.log(result)        
        res.status(201).json({ message: 'new meetup added' })
        client.close()
    }
}

export default addMeetupHandler