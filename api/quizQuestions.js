import {connectToDatabase} from '../db/mongodb'

module.exports = async (req, res) => {

    const {db, client} = await connectToDatabase(process.env.MONGODB_DB)

    const { id } = req.query;

    const questionCollection = await db.collection('questionslist')

    const questions = await questionCollection.find({"quiz_id": `${id}`}).toArray()

    const optionCollection = await db.collection('optionslist')

    for (let question of questions) {
        const options = await optionCollection.find({"question_Id": `${question._id}`}).toArray()
        question.options = options;
    }

    client.close()
    res.status(200).json({questions});

}
