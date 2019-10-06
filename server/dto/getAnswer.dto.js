const { backend } = require('../../config/config');

function getAnswerDTO(data)  {
    let app = {};
    app.id = data._id;
    app.question = data.question;
    app.answers = [
        {
            value: data.answer1,
            index: 1
        },
        {
            value: data.answer2,
            index: 2
        },
        {
            value: data.answer3,
            index: 3
        },
        {
            value: data.answer4,
            index: 4
        }
    ];
    app.imageName = data.imageName;
    app.imagePath = `${backend.general.protocol}${backend.general.ip}:${backend.general.port}/${backend.general.uploadFolder}/${data.imageName}`;
    return app;
}

module.exports = getAnswerDTO;