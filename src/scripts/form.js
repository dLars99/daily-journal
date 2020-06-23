import createEntryObject from "./createEntry.js"
import validateData from "./validation.js"
import API from "./data.js"
import journalList from "./entryList.js"

// Displays the New Entry form on the DOM, followed by functionality
// for the form's Save Button

const showEntryForm = () => {
    document.querySelector(".formGoesHere").innerHTML=`<h2 class="form__title">New Entry</h2>
    
    <form class="new-entry" id="new-entry">
        <input type="hidden" id="journalID" value="">
        
        <fieldset>
            <label for="journalDate">Date of Journal Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        
        <fieldset>
            <label for="journalConcepts">Concepts Covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts">
        </fieldset>
        
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry"></textarea>
        </fieldset>
        
        <fieldset>
            <label for="journalMood">Today's Mood</label>
            <select name="journalMood" id="journalMood">
                <option value="Happy &#x1f60A">Happy &#x1f60A</option>
                <option value="Sad &#x1f625">Sad &#x1f625</option>
                <option value="Tired &#x1f971">Tired &#x1f971</option>
                <option value="Celebratory &#x1f973">Celebratory &#x1f973</option>
                <option value="Confused &#x1f615">Confused &#x1f615</option>"
                <option value="Learned &#x1f393">Learned &#x1f393</option>
                <option value="Burn it to the ground! &#x1f525">Burn it to the ground! &#x1f525</option>
            </select>
        </fieldset>

        <button class="button" type="button" id="saveButton">Record Journal Entry</button>
        <button class="button" type="button" id="cancelEntry">Cancel</button>
    </form>` 

    // Save button
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
                API.saveJournalEntry(newJournalObject)
                    .then(() => API.getJournalEntries())
                    .then((entryArray) => journalList.renderJournalEntries(entryArray))
                    .then(() => {
                        // Clear form
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
                        // Clear form
                        submittedID = ""
                        document.getElementById("new-entry").reset()
                        document.querySelector(".formGoesHere").innerHTML = ""
                    }
                )
            }
        }
    })

    // Cancel button
    document.getElementById("cancelEntry").addEventListener("click", clickEvent => {
        document.querySelector(".formGoesHere").innerHTML = ""
    })
}

export default showEntryForm