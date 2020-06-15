/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

import API from "./data.js"
import journalList from "./entryList.js"

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))