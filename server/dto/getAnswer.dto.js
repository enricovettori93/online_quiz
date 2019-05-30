function getAnswerDTO(data)  {
    let app = {};
    app.id = data._id;
    app.question = data.question;
    app.answer1 = data.answer1;
    app.answer2 = data.answer2;
    app.answer3 = data.answer3;
    app.answer4 = data.answer4;
    app.imageName = data.imageName;
    app.imagePath = `/static/${data.imageName}`;
    return app;
}

module.exports = getAnswerDTO;