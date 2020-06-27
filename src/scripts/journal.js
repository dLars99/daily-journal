/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

import API from "./data.js"
import journalList from "./entryList.js"
import search from "./search.js"
import editFormFields from "./editEntry.js"
import showEntryForm from "./form.js"

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))

// New Entry button
document.querySelector("#newEntryButton").addEventListener("click", clickEvent => {
    showEntryForm()
})


// Assign click events to mood radio buttons and filter existing log entries by mood
const filterButtonCollection = document.getElementsByName("filterMood")

filterButtonCollection.forEach(button => {
    button.addEventListener("click", event => {
        const selectedMood = event.target.id
        API.getJournalEntries()
            .then((allEntries) => search.filterEntriesByMood(selectedMood, allEntries))
            .then((filteredArray) => journalList.renderJournalEntries(filteredArray)
        )

    })
})

// Look for "enter" on Search bar and find matching entries
document.getElementById("searchBar").addEventListener("keypress", keyEvent => {
    if (keyEvent.charCode === 13) {
        const searchTerm = keyEvent.target.value
        API.getJournalEntries()
            .then((allEntries) => search.keywordSearch(searchTerm, allEntries))
            .then((filteredArray) => journalList.renderJournalEntries(filteredArray)
        )
    }
})

// Listen to buttons on individual entries and take appropriate action
document.querySelector(".entryLog").addEventListener("click", event => {
    if (event.target.id.startsWith("delete--")) {
        const entryToDelete = event.target.id.split("--")[1]

        API.deleteJournalEntry(entryToDelete)
            .then(() => API.getJournalEntries())
            .then(entryArray => journalList.renderJournalEntries(entryArray))
    }

    if (event.target.id.startsWith("edit--")) {
        const entryToEdit = event.target.id.split("--")[1]
        
        showEntryForm()
        editFormFields(entryToEdit)
    }
})

