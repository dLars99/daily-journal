import API from "./data.js"
import journalList from "./entryList.js"
import pageButtons from "./buttons.js"

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
               
            </select>
        </fieldset>

        <button class="button" type="button" id="saveButton">Record Journal Entry</button>
        <button class="button" type="button" id="cancelEntry">Cancel</button>
    </form>` 

    // Populate mood dropdown
    API.getMoods().then((moodArray) => journalList.renderFormMoods(moodArray)) 
    
    // Save button
    pageButtons.saveNewEntry()

    // Cancel button
    pageButtons.cancelNewEntry()
    
}

export default showEntryForm