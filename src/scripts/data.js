
/* Retrieve the journal entries from the JSON database,
    convert the array, and send to the render function
*/

// const getJournalEntries = () => {
//     return fetch("http://localhost:8088/entries").then(
//         (response) => {
//             return response.json()
//         }
//     ).then(
//         (arrayOfEntries) => {
//             renderJournalEntries(arrayOfEntries)
//         }
//     )
// }

// getJournalEntries()

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}