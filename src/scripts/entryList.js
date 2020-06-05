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

// const journalList = {
//     renderJournalEntries (entries) {
//                 const insertionPoint = document.querySelector(".entryLog")

//                 for (entry of entries) {
//                     entryHTML = journalHTML.makeJournalEntryComponent(entry)
//                     insertionPoint.innerHTML += entryHTML
//                 }
//             }
// }