// Array of journal entries
const journalEntries = [
    {
        date: "2020-05-22",
        concepts: "GitHub one-way street, Flexbox, Linux and Bash",
        entry: "So far, so good! Stay on target."
        mood: "Happy" 
    },
    {
        date: "2020-05-29",
        concepts: "Group coding, JS Linking to HTML, JS Objects",
        entry: "First group project was a success, though next time I want to spend more time on design before writing any code."
        mood: "Tired" 
    }
];

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntry) => {
    journalEntryHTML = `<section class="journalEntry">
        <div class = "log__date"><h4>Date:</h4> ${journalEntry.date}</div>
        <div class = "log__concepts"><h4>Concepts Learned:</h4> ${journalEntry.concepts}</div>
        <div class = "log__entry"><h4>Journal Entry:</h4> ${journalEntry.entry}</div>
        <div class = "log__mood"><h4>Mood:</h4> ${journalEntry.mood}</div>
        </section>`

    return journalEntryHTML
}



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

// Invoke the reader function
renderJournalEntries(journalEntries)