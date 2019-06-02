function checkAnswerDTO (data) {
    let dto = {};
    dto.id = data.answerId;
    dto.isCorrect = data.isCorrect;
    dto.correctAnswer = data.correctAnswer;
    dto.description = data.description;
    return dto;
}

module.exports = checkAnswerDTO;