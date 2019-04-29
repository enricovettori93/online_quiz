function checkAnswerDTO (data) {
    let dto = {};
    dto.id = data.answerId;
    dto.isCorrect = data.isCorrect;
    return dto;
}

module.exports = checkAnswerDTO;