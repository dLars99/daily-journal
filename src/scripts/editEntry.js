// Pull the requested entry and populate the field forms for editing. Then, save the edited entry when prompted.

const editFormFields = (entryID) => {
    
    // Get references to form fields
    const idField = document.querySelector("#journalID")
    const dateField = document.querySelector("#journalDate")
    const conceptsField = document.querySelector("#journalConcepts")
    const entryField = document.querySelector("#journalEntry")
    const moodField = document.querySelector("#journalMood")

    // Get single entry from database
    fetch(`http://localhost:8088/entries/${entryID}`)
        .then(response => response.json())
        .then(entry => {
            idField.value = entry.id
            dateField.value = entry.date
            conceptsField.value = entry.concepts
            entryField.value = entry.entry
            moodField.value = entry.moodId
        })
}

export default editFormFields