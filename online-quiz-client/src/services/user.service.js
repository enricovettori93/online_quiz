class UserService {
    constructor() {
        this.questionAnswered = [];
        this.pushQuestionAnswered = this.pushQuestionAnswered.bind(this);
        this.getQuestionAnswered = this.getQuestionAnswered.bind(this);
    }

    pushQuestionAnswered(id) {
        this.questionAnswered.push(id);
    }
    
    getQuestionAnswered() {
        return this.questionAnswered;
    }
}

const userService = new UserService();
export default userService;