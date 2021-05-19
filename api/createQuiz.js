import {connectToDatabase} from '../db/mongodb'

module.exports = async (req, res) => {

    const {db, client} = await connectToDatabase(process.env.MONGODB_DB)

    const collection = await db.collection('quizlist')

    collection.insertOne(req.body).then(result => {
        res.status(200).json("success")
        client.close()
    })
    .catch(e => {
        console.log('Database error ',e.message)
        client.close()
    })
}
