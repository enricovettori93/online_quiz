import userService from './user.service';
class QuestionService {
    constructor() {
        this.correctAnswer = [{
            id: 0,
            correct: 3,
        }, {
            id: 1,
            correct: 1,
        }, {
            id: 2,
            correct: 3,
        }];
        this.questions = [{
            question: 'Di che colore è il cavallo bianco di Napoleone?',
            answers: [
            {
                index: 0,
                value:'blu'
            },
            {
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
            id: 0,
        },
        {
            question: "Qual'è l'animale più bello al mondo?",
            answers: [
            {
                index: 0,
                value:'cincillà'
            },
            {
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
            id: 1,
        },
        {
            question: "Come si chiama questa pietanza?",
            answers: [
            {
                index: 0,
                value:'spaghetti'
            },
            {
                index: 1,
                value:'pici'
            }, {
                index: 2,
                value:'pizza'
            },
            {
                index: 3,
                value:'kebab'
            }],
            imageUrl: 'http://www.mangiareasiena.it/mangiare-siena/wp-content/uploads/2016/06/17149055679_f0b0d95200_z.jpg',
            id: 2,
        }]
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
        const answered = this.userService.getQuestionAnswered();
        const avaiable = [];
        this.questions.forEach((question) => {
            if (answered.indexOf(question.id) === -1) {
                avaiable.push(question);
            }
        });
        return({
            avaiable: true,
            message: '',
            newQuestion: avaiable[0],
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