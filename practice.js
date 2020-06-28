const fs = require('fs')
const notes = require('./notes')
const yargs = require('yargs')



const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title )

    saveNote(notesToKeep)
    
}

const loadNotes = () => { 

    try {

        const bufferNote = fs.readFileSync('notes.json')
        const noteJSON = bufferNote.toString()

        return JSON.parse(noteJSON)
        
    } catch (e) {
        
        return []
    }
    
 }

 const saveNote = (notes) => {  
     const notesToString = JSON.stringify(notes)

     fs.writeFileSync('note.json', notes)
 }
