const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove a command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//list notes
yargs.command({
    command: 'list',
    describe: 'list all available notes',
    handler() {
        notes.listNotes()
    }
})

//Read a note
yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        } 
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.argv

