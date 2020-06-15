import journalHTML from "./entryComponent.js"

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const journalList = {
    renderJournalEntries (entries) {

                for (const entry of entries) {
                    const entryHTML = journalHTML.makeJournalEntryComponent(entry)
                    document.querySelector(".entryLog").innerHTML += entryHTML
                }
    }
}

export default journalList