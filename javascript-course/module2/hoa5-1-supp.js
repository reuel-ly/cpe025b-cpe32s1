// Create the directory
let teamContactList = [
  {
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI", "UX", "Figma"],
    available: true
  },
  {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML", "CSS", "JS"],
    available: false
  },
  {
    name: "Jordan Lee",
    role: "Manager",
    skills: ["Planning", "Agile"],
    available: true
  }
];

// 2. Add a new Specialits
teamContactList.push({
  name: "Casey Moore",
  role: "QA Engineer",
  skills: ["Testing", "Debugging"],
  available: true
});

// Update Availability
const member = teamContactList.find(m => m.name === "Sasha Ivana");
member.available = true;

// Data Extraction
// a
console.log(`a: ${teamContactList[0].name} / ${teamContactList[0].skills}`);
// b
console.log(`b: ${teamContactList[teamContactList.length - 1].name}
     / Number of Skill/s: ${teamContactList[teamContactList.length - 1].skills.length}`);
//c
console.log(`c: total number of people in the list is ${teamContactList.length}`);