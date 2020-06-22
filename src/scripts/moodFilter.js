const filterEntriesByMood = (mood, entries) => {
    const filteredArray = entries.filter(entry => {
        return entry.mood.includes(mood)
    })

    return filteredArray
}

export default filterEntriesByMood