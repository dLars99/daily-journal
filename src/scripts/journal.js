/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

import API from "./data.js"
import journalList from "./entryList.js"
import showEntryForm from "./form.js"
import pageButtons from "./buttons.js"

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))

// New Entry button
document.querySelector("#newEntryButton").addEventListener("click", clickEvent => {
    showEntryForm()
})


// Assign click events to mood radio buttons and filter existing log entries by mood
pageButtons.filterButtons()

// Look for "enter" on Search bar and find matching entries
pageButtons.searchBox()

// Listen to buttons on individual entries and take appropriate action
pageButtons.entryButtons()
