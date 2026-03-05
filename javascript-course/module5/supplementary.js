// Initialize the Data
let contacts = [
{
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true
},
{
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false
},
{
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true
}
];


// 2.a showContact function
function showContact(list, index) {

    if (!(list instanceof Array)) return;

    if (list[index]) {
        alert(
            `${list[index].name} / ${list[index].role} / First Skill: ${list[index].skills[0]}`
        );
    } else {
        alert("Invalid index.");
    }
}


// 2️.b showAllContacts function
function showAllContacts(list) {

    if (!(list instanceof Array)) return;

    for (let contact of list) {
        alert(contact.name);
    }
}


// 2.c  addContact function
function addContact(list, name, role, skill) {

    if (!(list instanceof Array)) return;

    if (name && role && skill) {

        list.push({
            name: name,
            role: role,
            skills: [skill],
            availability: true
        });

        alert("Contact added.");
    } else {
        alert("Missing information. Contact not added.");
    }
}


// 4️ searchContact function
function searchContact(list, name) {

    if (!(list instanceof Array)) return;

    let found = false;

    for (let contact of list) {

        if (contact.name.toLowerCase() === name.toLowerCase()) {

            let status = contact.availability ? "Available" : "Busy";

            alert(`${contact.name} / ${contact.role} / ${status}`);

            found = true;
            break;
        }
    }

    if (!found) {
        alert("Contact not found.");
    }
}


// 5️⃣ Persistent program loop
while (true) {

    let action = prompt("Choose action: show / all / add / search / quit");

    if (!action) continue;

    switch (action) {

        case "show":
            let index = prompt("Enter contact index:");
            showContact(contacts, index);
            break;

        case "all":
            showAllContacts(contacts);
            break;

        case "add":
            let name = prompt("Enter name:");
            let role = prompt("Enter role:");
            let skill = prompt("Enter one skill:");
            addContact(contacts, name, role, skill);
            break;

        case "search":
            let searchName = prompt("Enter name to search:");
            searchContact(contacts, searchName);
            break;

        // 6️⃣ Completion condition
        case "quit":
            alert("Goodbye!");
            break;

        default:
            alert("Invalid option.");
    }

    if (action === "quit") {
        break;
    }
}