class UserService {
    constructor() {
        this.questionAnswered = [];
        this.pushQuestionAnswered = this.pushQuestionAnswered.bind(this);
        this.getQuestionAnswered = this.getQuestionAnswered.bind(this);
    }

    pushQuestionAnswered(id, isCorrect) {
        this.questionAnswered.push({
            id,
            isCorrect,
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