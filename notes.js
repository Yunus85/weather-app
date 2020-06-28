const fs = require('fs')
const chalk = require('chalk')
const { ForegroundColor } = require('chalk')

const getNotes =  () => { 
    return 'Your notes...'
 }

 const addNote = (title, body) => { 
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) =>  note.title === title )
    const duplicateNote = notes.find((note) => note.title === title )

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{ 
        console.log(chalk.red.inverse('Notes title already taken'))    
    }

    
 }

 const removeNote  = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>  note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note reemoved'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No such note exist'))
    }
 }

 const saveNotes = (notes) => {  
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json', dataJSON)
 }

const loadNotes = () => {  

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

const listNotes = () => { 
    console.log(chalk.greenBright.inverse('Your notes: '))

    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
 }

 const readNote = (title) => {
    const notes = loadNotes()

    const findNote = notes.find((note) => note.title === title )
    //console.log(findNote)
    
    if(findNote){
        console.log(chalk.bold.cyanBright.italic.inverse(findNote.title))
        console.log(findNote.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}

