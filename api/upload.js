import cloudinary from 'cloudinary'

module.exports = async (req, res) => {

    // cloudinary.config({
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET
    // })

    const timestamp = Math.round((new Date).getTime()/1000);



    const signature = await cloudinary.utils.api_sign_request({
        folder: "quizap",
        public_id: req.query.file,
        timestamp: timestamp,
    }, process.env.CLOUDINARY_API_SECRET)

    const result = {
        url: process.env.CLOUDINARY_QUIZAP_URL,
        fields: {
            api_key: process.env.CLOUDINARY_API_KEY,
            folder: "quizap",
            public_id: req.query.file,
            signature: signature,
            timestamp: timestamp,

        }
    }

    res.status(200).json(result)
}
