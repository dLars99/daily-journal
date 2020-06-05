
/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries").then(
        (response) => {
            return response.json()
        }
    ).then(
        (arrayOfEntries) => {
            renderJournalEntries(arrayOfEntries)
        }
    )
}

// Convert the current entry object to HTML
const makeJournalEntryComponent = (journalEntry) => {
    journalEntryHTML = `<section class="journalEntry">
        <div class = "log__date"><h4>Date:</h4> ${journalEntry.date}</div>
        <div class = "log__concepts"><h4>Concepts Learned:</h4> ${journalEntry.concepts}</div>
        <div class = "log__entry"><h4>Journal Entry:</h4> ${journalEntry.entry}</div>
        <div class = "log__mood"><h4>Mood:</h4> ${journalEntry.mood}</div>
        </section>`

    return journalEntryHTML
}



/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const renderJournalEntries = (entries) => {
    insertionPoint = document.querySelector(".entryLog")

    for (entry of entries) {
        entryHTML = makeJournalEntryComponent(entry)
        insertionPoint.innerHTML += entryHTML
    }
}

// Invoke journal entry retrieval
getJournalEntries()