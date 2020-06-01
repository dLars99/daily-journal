// Journal entry object
const firstJournalEntry = {
    date: "2020-05-22",
    concepts: "GitHub one-way street, Flexbox, Linux and Bash",
    entry: `So far, so good. As expected, I am starting a little bit ahead, but there has still been valuable new material within this first week. I suspect that time management is going to become increasingly tricky as things get more complex. The quantity of reading and study outside of class is higher than I expected. This week, though, that quantity has been more of a challenge than the difficulty of the work. I am surprised how little of the “book” material is truly covered in class.
    In an effort to prepare myself as much as possible for the job market, I want to read as much as possible: documentation, supplemental reading, etc.For Chapter 1, I am mostly caught up on the main readings.I want to tackle the supplemental readings, as well.I do not know yet if I will have the chance during the week next week, or if that is something I need to take time from the Memorial Day weekend to do.
    The people in the cohort are fantastic.This really is as great an environment as they advertise.While we have already had significant lab time during the week, I hope to get more chances to work and interact outside of regular hours as the projects progress, as this time is when most of my work has been completed.`,
    mood: "happy"                   
};

const secondJournalEntry = {
    date: "2020-05-29",
    concepts: "Group coding, JS Linking to HTML, JS Objects",
    entry: `This week was our first group project. This was difficult going into without knowing the people or personalities in the group. I had to let some of my standards slide on the final product for the benefit of the group dynamic. That being said, we established a great group dynamic. I feel like a designated leader would have helped, but could also open a can of worms that would be detrimental at this point. Where there is no leader, though, I need to take point where there are no eager volunteers.
    That is one thing I need to work on: volunteering more. There have certainly been opportunities, but I have not taken them for the same reasons I never do. While I have been able to provide some knowledge here or there, there is no reason I could not be doing more. As the course progresses over the next several weeks, I need to push myself not just in coding, but stepping up in the overall group. This has proven more difficult on Zoom than I expected, compared to the live classroom.
    The workload lightened this week, and I have been able to catch up on CSS on a couple of last week’s projects. I imagine the pendulum will swing this upcoming week.`,
    mood: "tired"
}

// Array of journal entries
let journal = [];

journal.push(firstJournalEntry);
journal.push(secondJournalEntry);

console.log(journal);