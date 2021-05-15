import {connectToDatabase} from '../db/mongodb'

module.exports = async (req, res) => {

    const {db} = await connectToDatabase(process.env.MONGODB_DB)

    const collection = await db.collection('quizlist')

    const quizList = await collection.find().toArray()

    res.status(200).json({quizList});

}
