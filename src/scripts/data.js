
/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries?_expand=mood")
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
    },

    saveAndRefresh(entryObject) {
        const objectToSend = JSON.stringify(entryObject)
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: objectToSend
        }).then(() => {
            return fetch("http://localhost:8088/entries?_expand=mood")
            .then(response => response.json())
        })
    },

    editJournalEntry(entryObject, id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        }).then(response => response.json())
    },

    deleteJournalEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },

    getMoods() {
        return fetch("http://localhost:8088/moods")
            .then(response => response.json())
    }
}

export default API