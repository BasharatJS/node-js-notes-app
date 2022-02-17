// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'Welcome to Node.js course');
// fs.appendFileSync('notes.txt', ' , My name is Basharat');


// const name = require('./utils')
// console.log(name)


// const addNumber = require('./utils')
// const sum = addNumber( 4, 5)
// console.log(sum)


// const getFunction = require('./notes')
const notes = require('./notes')
// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')



// const message = getFunction()
// console.log(message)

// console.log(validator.isEmail('mdbasharattaquee@gmail.com'))
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))

// const greenMsg = chalk.green.bgRed.bold('Hello world!');
// console.log(greenMsg)


// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding Note!')
// } else if (command === 'remove') {
//    console.log('Removing Note...')
// }
//console.log(process.argv)


//Customize  yarg version
yargs.version('1.1.0')

// add , remove , read, list
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' +  argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler () {
        // console.log('Listing a new notes!!!')
        notes.listNotes()
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        //console.log('Reading a new notes!!!')
        notes.readNotes(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()
