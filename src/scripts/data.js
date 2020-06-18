
/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    saveJournalEntry(entryObject) {
        fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
        .then(response => response.json())
    }
}

export default API