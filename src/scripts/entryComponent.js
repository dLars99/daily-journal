// Convert the current entry object to HTML for display

const journalHTML = {
    makeJournalEntryComponent (journalEntry) {
                return `<section class="journalEntry">
                    <div class = "log__date"><h3>${journalEntry.date}</h3> </div >
                    <div class = "log__concepts"><h4>Concepts Learned:</h4> ${journalEntry.concepts}</div>
                    <div class = "log__entry"><h4>Journal Entry:</h4> ${journalEntry.entry}</div>
                    <div class = "log__mood"><h4>Mood:</h4> <p>${journalEntry.mood.label}</p></div>
                    <button class="button__delete" id="delete--${journalEntry.id}">Delete</button>
                    <button class="button__edit" id="edit--${journalEntry.id}">Edit</button>
                    </section>`
    },

    makeMoodFormComponent (journalMood) {
        return `<option value="${journalMood.id}">${journalMood.label}</option>`
    }
}

export default journalHTML