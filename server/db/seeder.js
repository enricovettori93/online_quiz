const seeder = require('mongoose-seed');
// MongoDB conf
const config = {
    port: 27017,
    ip: 'localhost',
    name: 'online_quiz',
}

seeder.connect(`mongodb://${config.ip}:${config.port}/${config.name}`, () => {
    seeder.loadModels([
        './models/Question.js',
    ]);
    seeder.clearModels(['Question'], () => {
        seeder.populateModels(questions, () => {
            seeder.disconnect();
        });
    });
});

const questions = [{
    'model': 'Question',
    'documents': [
        {
            'id': 0,
            'question': 'Di che colore è il cavallo bianco di Napoleone?',
            'answer1': 'Magenta',
            'answer2': 'Blu',
            'answer3': 'Arcobaleno',
            'answer4': 'Verde pisello',
            'correctAnswer': 'Verde pisello',
        }
    ]
}]