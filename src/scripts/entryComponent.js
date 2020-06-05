// Convert the current entry object to HTML

const journalHTML = {
    makeJournalEntryComponent (journalEntry) {
                return `<section class="journalEntry">
                    <div class = "log__date"><h3>${journalEntry.date}</h3> </div >
                    <div class = "log__concepts"><h4>Concepts Learned:</h4> ${journalEntry.concepts}</div>
                    <div class = "log__entry"><h4>Journal Entry:</h4> ${journalEntry.entry}</div>
                    <div class = "log__mood"><h4>Mood:</h4> <p>${journalEntry.mood}</p></div>
                    </section>`
    }
}