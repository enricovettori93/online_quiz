function checkAnswerDTO (data) {
    let dto = {};
    dto.answerId = data.answerId;
    dto.isCorrect = data.isCorrect;
    return dto;
}

module.exports = checkAnswerDTO;