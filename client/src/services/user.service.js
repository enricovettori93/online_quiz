class UserService {
    constructor() {
        this.questionAnswered = [];
        this.pushQuestionAnswered = this.pushQuestionAnswered.bind(this);
        this.getQuestionAnswered = this.getQuestionAnswered.bind(this);
    }

    pushQuestionAnswered(id, isCorrect, correctAnswer) {
        this.questionAnswered.push({
            id,
            isCorrect,
            correctAnswer,
        });
    }
    
    getQuestionAnswered() {
        return this.questionAnswered;
    }

    resetQuestionAnswered() {
        this.questionAnswered = [];
    }
}

const userService = new UserService();
export default userService;