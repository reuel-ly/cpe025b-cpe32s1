// //procedure 1
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];


// // 1️ showContact function
// function showContact(contactList, index) {

//     // check if argument is an array
//     if (!(contactList instanceof Array)) {
//         alert("Invalid contact list.");
//         return;
//     }

//     if (contactList[index]) {
//         alert(`${contactList[index].name} / ${contactList[index].phone} / ${contactList[index].email}`);
//     } else {
//         alert("Contact does not exist.");
//     }
// }


// // 2️ showAllContacts function
// function showAllContacts(contactList) {

//     if (!(contactList instanceof Array)) {
//         alert("Invalid contact list.");
//         return;
//     }

//     for (let i = 0; i < contactList.length; i++) {
//         alert(`${i}: ${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}`);
//     }
// }


// // 3️ addNewContact function
// function addNewContact(contactList, name, phone, email) {

//     if (!(contactList instanceof Array)) {
//         alert("Invalid contact list.");
//         return;
//     }

//     if (name && phone && email) {
//         contactList.push({
//             name: name,
//             phone: phone,
//             email: email
//         });
//         alert("Contact added.");
//     } else {
//         alert("Missing contact data. Contact not added.");
//     }
// }



// // 4️ Main program loop
// let action = "";

// while (action !== "quit") {

//     action = prompt("Choose option: show / all / add / quit");

//     if (!action) continue;

//     switch (action) {

//         case "show":
//             let index = prompt("Enter contact index:");
//             showContact(contacts, index);
//             break;

//         case "all":
//             showAllContacts(contacts);
//             break;

//         case "add":
//             let name = prompt("Enter name:");
//             let phone = prompt("Enter phone:");
//             let email = prompt("Enter email:");

//             addNewContact(contacts, name, phone, email);
//             break;

//         case "quit":
//             alert("Program ended.");
//             break;

//         default:
//             alert("Invalid option.");
//     }
// }

//procedure 2

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


// 1️⃣ Show a specific contact
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}


// 2️⃣ Show all contacts
let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            alert(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}


// 3️⃣ Add a new contact
let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}


// 4️⃣ NEW: Sort contacts function
let sortContacts = function(contacts, field) {

    if (!(contacts instanceof Array)) {
        return;
    }

    if (field === "name" || field === "phone" || field === "email") {

        contacts.sort((a, b) => {
            if (a[field] > b[field]) return 1;
            if (a[field] < b[field]) return -1;
            return 0;
        });

        alert(`Contacts sorted by ${field}.`);
    } else {
        alert("Invalid sort field.");
    }
}


// 5️⃣ Main menu loop
let action = "";

while (action !== "quit") {

    action = prompt("Choose option: show / all / add / sort / quit");

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
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");
            addNewContact(contacts, name, phone, email);
            break;

        // 6️⃣ Sorting feature
        case "sort":
            let field = prompt("Sort by: name / phone / email");
            sortContacts(contacts, field);
            break;

        case "quit":
            alert("Program ended.");
            break;

        default:
            alert("Invalid option.");
    }
}