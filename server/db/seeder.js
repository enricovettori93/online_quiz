const seeder = require('mongoose-seed');
const fs = require('fs-extra');
const config = require('../../config/config');

const clear = process.env.CLEAR || false;

const imagefolder = `../${config.backend.general.uploadFolder}`;

// MongoDB conf
const mongoconfig = {
    port: 27017,
    ip: 'localhost',
    name: 'online_quiz',
}

seeder.connect(`mongodb://${mongoconfig.ip}:${mongoconfig.port}/${mongoconfig.name}`, function() {
    seeder.loadModels([
        'models/questionSeed.js',
    ]);
    seeder.clearModels(['Question'], function() {
        if (!clear) {
            seeder.populateModels(questions, function() {
                seeder.disconnect();
            });
        } else {
            const files = fs.readdirSync(imagefolder);
            files.forEach((item) => {
                if (!item.includes('test') && !item.includes('gitkeep')) {
                    fs.unlinkSync(`${imagefolder}/${item}`);
                }
            });
            seeder.disconnect();
        }
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
            'description': 'Descrizione cavallo bianco',
            'correctAnswer': 'Verde pisello',
            'imageName': 'test1.png'
        },
        {
            'question': 'Qual\'è l\'animale più bello al mondo?',
            'answer1': 'Kiwi',
            'answer2': 'Chanel',
            'answer3': 'Kiro',
            'answer4': 'Tigro',
            'description': 'Descrizione di Kiro',
            'correctAnswer': 'Kiro',
            'imageName': 'test2.png'
        }
    ]
}];