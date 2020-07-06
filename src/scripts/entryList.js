import journalHTML from "./entryComponent.js"

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const journalList = {
    renderJournalEntries (entries) {
        document.querySelector(".entryLog").innerHTML = ""
        for (const entry of entries) {
            const entryHTML = journalHTML.makeJournalEntryComponent(entry)
            document.querySelector(".entryLog").innerHTML += entryHTML
        }
    },

    renderFormMoods (moods) {
        document.querySelector("#journalMood").innerHTML = ""
        for (const mood of moods) {
            const moodHTML = journalHTML.makeMoodFormComponent(mood)
            document.querySelector("#journalMood").innerHTML += moodHTML
        }
    }
}

export default journalList