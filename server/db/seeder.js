const seeder = require('mongoose-seed');

// MongoDB conf
const config = {
    port: 27017,
    ip: 'localhost',
    name: 'online_quiz',
}

seeder.connect(`mongodb://${config.ip}:${config.port}/${config.name}`, function() {
    seeder.loadModels([
        'models/questionSeed.js',
    ]);
    seeder.clearModels(['Question'], function() {
        seeder.populateModels(questions, function() {
            seeder.disconnect();
        });
    });
});

const questions = [{
    'model': 'Question',
    'documents': [
        {
            'question': 'Di che colore è il cavallo bianco di Napoleone?',
            'answer1': 'Magenta',
            'answer2': 'Blu',
            'answer3': 'Arcobaleno',
            'answer4': 'Verde pisello',
            'correctAnswer': 'Verde pisello',
            'imageName': 'napoleone.png'
        },
        {
            'question': 'Qual\'è l\'animale più bello al mondo?',
            'answer1': 'Kiwi',
            'answer2': 'Chanel',
            'answer3': 'Kiro',
            'answer4': 'Tigro',
            'correctAnswer': 'Kiro',
            'imageName': 'kiro.png'
        }
    ]
}];