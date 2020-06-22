
/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },

    saveJournalEntry(entryObject) {
        const objectToSend = JSON.stringify(entryObject)
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: objectToSend
        }).then(response => response.json())
    }
}

export default API