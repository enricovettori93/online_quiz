import userService from './user.service';
class QuestionService {
    constructor() {
        this.correctAnswer = [{
            id: 1,
            correct: 3,
        }, {
            id: 2,
            correct: 1,
        }];
        this.questions = [{
            question: 'Di che colore è il cavallo bianco di Napoleone?',
            answers: [
            {
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
            imageUrl: 'https://www.quadri-e-stampe.it/media/kunstdrucke-poster/jacques-louis-david-napoleon-ueberquert-die-alpen-911145.jpg',
            id: 1,
        },
        {
            question: "Qual'è l'animale più bello al mondo?",
            answers: [
            {
                index: 0,
                value:'cincillà'
            }, {
                index: 1,
                value:'congilio'
            },
            {
                index: 2,
                value:'bisonte'
            },
            {
                index: 3,
                value:'cimice'
            }],
            imageUrl: 'https://www.mille-animali.com/images/animali/coniglio-nano.jpg',
            id: 2,
        },]
        this.userService = userService;
        this.getNewQuestion = this.getNewQuestion.bind(this);
    }

    getNewQuestion() {
        if (this.correctAnswer.length === this.userService.questionAnswered.length) {
            return {
                avaiable: false,
                message: 'Hai completato tutte le domande',
                newQuestion: {},
            }
        }
        return({
            avaiable: true,
            message: '',
            newQuestion: this.questions[0],
        })
    }

    validateAnswer(questionId, index) {
        this.userService.pushQuestionAnswered(questionId);
        const question = this.correctAnswer.filter(item => item.id === questionId)[0];
        return (question && question.correct === index);
    }
}

const questionService = new QuestionService;

export default questionService;