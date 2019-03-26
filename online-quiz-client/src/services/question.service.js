class QuestionService {
    constructor() {
        this.correctAnswer = [{
            id: 1,
            correct: 3,
        }];
        this.getNewQuestion = this.getNewQuestion.bind(this);
    }

    getNewQuestion() {
        return({
            question: 'Di che colore è il cavallo bianco di Napoleone?',
            answers: [{
                index: 0,
                value:'blu'
            }, {
                index: 1,
                value:'bianco'
            },
            {
                index: 2,
                value:'magenta'
            },
            {
                index: 3,
                value:'verde pisello'
            }],
            imageUrl: 'data:image/jpeg;base64,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',
            id: 1,
        })
    }

    validateAnswer(questionId, index) {
        const question = this.correctAnswer.filter(item => item.id === questionId)[0];
        return (question.length !== 0 && question.correct === index);
    }
}

const questionService = new QuestionService;

export default questionService;