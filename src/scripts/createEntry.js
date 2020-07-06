// 'Factory function' to create an object representing a new journal entry

const createEntryObject = (date, concepts, entry, mood) => {
    return {
        date: date,
        concepts: concepts,
        entry: entry,
        moodId: parseInt(mood)
    }
}

export default createEntryObject