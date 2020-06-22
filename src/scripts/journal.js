/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

import API from "./data.js"
import journalList from "./entryList.js"
import createEntryObject from "./createEntry.js"
import validateData from "./validation.js"
import filterEntriesByMood from "./moodFilter.js"
import editFormFields from "./editEntry.js"

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))

document.querySelector(".button").addEventListener("click", clickEvent => {
    const submittedID = document.querySelector("#journalID").value
    const submittedDate = document.querySelector("#journalDate").value
    const submittedConcepts = document.querySelector("#journalConcepts").value
    const submittedEntry = document.querySelector("#journalEntry").value
    const submittedMood = document.querySelector("#journalMood").value

    // Validate data. Save to JSON database if validation passes
    if (validateData(submittedDate, submittedConcepts, submittedEntry, submittedMood)) {
        const newJournalObject = createEntryObject(submittedDate, submittedConcepts, submittedEntry, submittedMood)

        // Check if entry is new or edited
        if (submittedID === "") {
            // New entry
            API.saveJournalEntry(newJournalObject)
                .then(() => API.getJournalEntries())
                .then((entryArray) => {
                    journalList.renderJournalEntries(entryArray)
                }
            )
        } else {
            // Edited entry
            API.editJournalEntry(newJournalObject, submittedID)
                .then(() => API.getJournalEntries())
                .then((entryArray) => journalList.renderJournalEntries(entryArray)
            )
        }

    }
})


// Assign click events to mood radio buttons and filter existing log entries by mood
const filterButtonCollection = document.getElementsByName("filterMood")

filterButtonCollection.forEach(button => {
    button.addEventListener("click", event => {
        const selectedMood = event.target.id
        API.getJournalEntries()
            .then((allEntries) => filterEntriesByMood(selectedMood, allEntries))
            .then((filteredArray) => journalList.renderJournalEntries(filteredArray)
        )

    })
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

        editFormFields(entryToEdit)
    }
})

