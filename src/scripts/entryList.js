/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const journalList = {
    renderJournalEntries (entries) {
                // const insertionPoint = document.querySelector(".entryLog")

                for (entry of entries) {
                    entryHTML = journalHTML.makeJournalEntryComponent(entry)
                    document.querySelector(".entryLog").innerHTML += entryHTML
                }
    }
}