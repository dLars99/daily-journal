import API from "./data.js"
import journalList from "./entryList.js"
import search from "./search.js"
import editFormFields from "./editEntry.js"
import createEntryObject from "./createEntry.js"
import validateData from "./validation.js"

// Object containing event listeners and invoking resultant functions for the various buttons on the page

const pageButtons = {
    
    // Mood filter buttons
    filterButtons() {
        
        const filterButtonCollection = document.getElementsByName("filterMood")
        
        filterButtonCollection.forEach(button => {
            button.addEventListener("click", event => {
                const selectedMood = event.target.id
                API.getJournalEntries()
                .then((allEntries) => search.filterEntriesByMood(selectedMood, allEntries))
                .then((filteredArray) => journalList.renderJournalEntries(filteredArray))
                
            })
        })
        
    },

    // Main entry search box
    searchBox() {

        document.getElementById("searchBar").addEventListener("keypress", keyEvent => {
            // Trigger upon "Enter" key
            if (keyEvent.charCode === 13) {
                const searchTerm = keyEvent.target.value
                API.getJournalEntries()
                    .then((allEntries) => search.keywordSearch(searchTerm, allEntries))
                    .then((filteredArray) => journalList.renderJournalEntries(filteredArray))
            }
        })
    },

    // Buttons on individual journal entries
    entryButtons() {

        document.querySelector(".entryLog").addEventListener("click", event => {
            
            // Delete buttons
            if (event.target.id.startsWith("delete--")) {
                const entryToDelete = event.target.id.split("--")[1]

                API.deleteJournalEntry(entryToDelete)
                    .then(() => API.getJournalEntries())
                    .then(entryArray => journalList.renderJournalEntries(entryArray))
            }

            // Edit buttons
            if (event.target.id.startsWith("edit--")) {
                const entryToEdit = event.target.id.split("--")[1]

                showEntryForm()
                editFormFields(entryToEdit)
            }
        })

    },

    // New entry Save button
    saveNewEntry() {

        document.querySelector("#saveButton").addEventListener("click", clickEvent => {
            let submittedID = document.querySelector("#journalID").value
            const submittedDate = document.querySelector("#journalDate").value
            const submittedConcepts = document.querySelector("#journalConcepts").value
            const submittedEntry = document.querySelector("#journalEntry").value
            const submittedMood = document.querySelector("#journalMood").value

            // Validate data. Save to JSON database if validation passes
            if (validateData(submittedDate, submittedConcepts, submittedEntry, submittedMood)) {
                const newJournalObject = createEntryObject(submittedDate, submittedConcepts, submittedEntry, submittedMood)

                // Check if entry is new or edited
                if (submittedID === "") {

                    // New entry
                    API.saveAndRefresh(newJournalObject)
                        .then((entryArray) => journalList.renderJournalEntries(entryArray))
                        .then(() => {
                            // Clear entry form
                            submittedID = ""
                            document.getElementById("new-entry").reset()
                            document.querySelector(".formGoesHere").innerHTML = ""
                        }
                    )

                } else {

                    // Edited entry
                    API.editJournalEntry(newJournalObject, submittedID)
                        .then(() => API.getJournalEntries())
                        .then((entryArray) => journalList.renderJournalEntries(entryArray))
                        .then(() => {
                            // Clear entry form
                            submittedID = ""
                            document.getElementById("new-entry").reset()
                            document.querySelector(".formGoesHere").innerHTML = ""
                        }
                    )
                
                }
            
            }
        
        })
   
    },

    // Cancel new entry
    cancelNewEntry() {
        document.getElementById("cancelEntry").addEventListener("click", clickEvent => {
            document.querySelector(".formGoesHere").innerHTML = ""
        })
    }
}

export default pageButtons