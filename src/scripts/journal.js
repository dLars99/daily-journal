/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files
*/

API.getJournalEntries().then(entryArray => journalList.renderJournalEntries(entryArray))