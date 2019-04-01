class UserService {
    constructor() {
        this.questionAnswered = [];
        this.pushQuestionAnswered = this.pushQuestionAnswered.bind(this);
        this.getQuestionAnswered = this.getQuestionAnswered.bind(this);
    }

    pushQuestionAnswered(id, index, isCorrect, correctAnser) {
        this.questionAnswered.push({
            id,
            index,
            isCorrect,
            correctAnser,
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