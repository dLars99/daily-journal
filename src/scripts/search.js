// Filter entries by mood selected by user

const search = {
    filterEntriesByMood (mood, entries) {
        if (mood === "ShowAll") {
            // Return everything if "Show All Entries" is selected
            return entries
        } else {
            // Return only the entries with the selected mood
            const filteredArray = entries.filter(entry => {
                return entry.mood.includes(mood)
            })
            return filteredArray
        }
    },

    keywordSearch (keyword, entries) {
        const filteredArray = entries.filter(entry => {
                for (const value of Object.values(entry)) {
                    if (value.toString().includes(keyword)) {
                        return entry
                    }
                }
        })

        return filteredArray
    }
}

export default search