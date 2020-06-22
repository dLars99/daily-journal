// Validate data entered into form

const validateData = (date, concepts, entry, mood) => {

    // First validation: check for completeness; skip other validations if incomplete
    if (date === "" || concepts === "" || entry === "" || mood === "") {
        window.alert("All fields must be completed")
        return false
    }

    // Second validation: check concepts for maximum length. Skip final validation if too long
    if (concepts.length > 20) {
        window.alert("Concepts cannot exceed 20 characters")
        return false
    }
    
    // Final validation: no swearing!
    const naughtyWords = ["shit", "fuck", "dick", "motherfucker", "goddamn", "asshole", "frak"]
    if (naughtyWords.some(word => entry.includes(word)) || naughtyWords.some(word => concepts.includes(word))) {
        window.alert("Such language! Go wash out your entry with soap!")
        return false
    }

    // If all validations pass, return approval 
    return true
}

export default validateData