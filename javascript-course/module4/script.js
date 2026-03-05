// // procedures 1

// let contacts = [{
// name: "Maxwell Wright",
// phone: "(0191) 719 6495",
// email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
// name: "Raja Villarreal",
// phone: "0866 398 2895",
// email: "posuere.vulputate@sed.com"
// }, {
// name: "Helen Richards",
// phone: "0800 1111",
// email: "libero@convallis.edu"
// }];

// let name = prompt("Enter contact name:");
// let phone = prompt("Enter contact phone:");
// let email = prompt("Enter contact email:");

// let newContact = {
//     name: name,
//     phone: phone,
//     email: email
// };

// contacts.push(newContact);

// let last = contacts.length - 1;

// console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
// console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

// procedures 2

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

// let action = prompt("What do you want to do? (first / last / new)");

// if (action === "first") {
//     console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
// } 
// else if (action === "last") {
//     let last = contacts.length - 1;
//     console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
// } 
// else if (action === "new") {

//     let name = prompt("Enter name:");
//     let phone = prompt("Enter phone:");
//     let email = prompt("Enter email:");

//     if (name && phone && email) {
//         contacts.push({
//             name: name,
//             phone: phone,
//             email: email
//         });
//         console.log("Contact added.");
//     } else {
//         console.log("Contact not added. Missing data.");
//     }
// }

// procedures 3

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

let action;

while (action !== "quit") {

    action = prompt("Choose action: first / last / all / new / quit");

    if (action === "first") {
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } 
    
    else if (action === "last") {
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    } 
    
    else if (action === "all") {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }
    } 
    
    else if (action === "new") {
        let name = prompt("Enter name:");
        let phone = prompt("Enter phone:");
        let email = prompt("Enter email:");

        if (name && phone && email) {
            contacts.push({
                name: name,
                phone: phone,
                email: email
            });
            console.log("Contact added.");
        } else {
            console.log("Contact not added. Missing data.");
        }
    }
}