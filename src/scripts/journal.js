/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

import API from "./data.js"
import journalList from "./entryList.js"
import createEntryObject from "./createEntry.js"

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))

document.querySelector(".button").addEventListener("click", clickEvent => {
    const submittedDate = document.querySelector("#journalDate").value
    const submittedConcepts = document.querySelector("#journalConcepts").value
    const submittedEntry = document.querySelector("#journalEntry").value
    const submittedMood = document.querySelector("#journalMood").value

    if (submittedDate === "" || submittedConcepts === "" || submittedEntry === "" || submittedMood === "") {
        window.alert("All fields must be completed")
    } else {
        const newJournalObject = createEntryObject(submittedDate, submittedConcepts, submittedEntry, submittedMood)
        API.saveJournalEntry(newJournalObject)
            .then(() => {
                API.getJournalEntries()})
                .then(entryArray => journalList.renderJournalEntries(entryArray))
    }
})